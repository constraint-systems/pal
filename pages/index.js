import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { themes } from '../s/themes.js';
import * as chroma from 'chroma-js';

let vertex_shader = `attribute vec2 a_position;
  attribute vec2 a_texCoord;
  varying vec2 v_texCoord;
  uniform vec2 u_resolution;

  void main() {
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0; // convert the rectangle from pixels to clipspace
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    v_texCoord = a_texCoord; // pass the texCoord to the fragment shader
  }`;

let fragment_shader = `precision mediump float;
  uniform sampler2D u_image;
  uniform vec2 u_thresh;
  uniform vec3 u_palette[8];
  varying vec2 v_texCoord;

  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }

  void main() {
    vec4 color = texture2D(u_image, v_texCoord);

    vec3 hsv = rgb2hsv(color.rgb);
    float lum = dot(color.rgb, vec3(0.2125, 0.7154, 0.0721));

    float bg = dot(color.rgb, u_palette[0]);
    float fg = dot(color.rgb, u_palette[1]);

    vec3 hued = vec3(1.0, 1.0, 1.0);
    if (lum <= u_thresh[0]) {
      if (bg <= fg) {
        hued = u_palette[0];
      } else {
        hued = u_palette[1];
      }
    } else if (lum >= u_thresh[1]) {
      if (bg <= fg) {
        hued = u_palette[1];
      } else {
        hued = u_palette[0];
      }
    } else {
      if (hsv[0] <= 0.0833) {
        hued = u_palette[2];
      } else if (hsv[0] <= 0.25) {
        hued = u_palette[3];
      } else if (hsv[0] <= 0.4166) {
        hued = u_palette[4];
      } else if (hsv[0] <= 0.5833) {
        hued = u_palette[5];
      } else if (hsv[0] <= 0.75) {
        hued = u_palette[6];
      } else if (hsv[0] <= 0.9166) {
        hued = u_palette[7];
      } else {
        hued = u_palette[2];
      }
    }
    gl_FragColor = vec4(hued, 1.0);
  }`;

let fs = 15;
let lh = 1.5;
let rlh = fs * lh;

let picked_keys = [
  'background_color',
  'foreground_color',
  'color_02',
  'color_03',
  'color_04',
  'color_05',
  'color_06',
  'color_07',
].map(k => k.toUpperCase());

let hue_keys = [
  'color_02',
  'color_03',
  'color_04',
  'color_05',
  'color_06',
  'color_07',
].map(k => k.toUpperCase());

const Home = ({ pick_serve }) => {
  let [pick, setPick] = useState(pick_serve);
  let [hue_shift, setHueShift] = useState(0);
  let keymap_ref = useRef({});
  let cimg_ref = useRef(null);
  let c_ref = useRef(null);
  let program_ref = useRef({});
  let [load, setLoad] = useState(false);
  let [lthresh, setLthresh] = useState(0.2);
  let [hthresh, setHthresh] = useState(0.8);

  useEffect(() => {
    let img = new Image();
    img.onload = () => {
      setLoad(true);

      let c = c_ref.current;
      c.width = img.width;
      c.height = img.height;

      let ctx = c.getContext('webgl');

      function compileShader(shaderSource, shaderType) {
        let shader = ctx.createShader(shaderType);
        ctx.shaderSource(shader, shaderSource);
        ctx.compileShader(shader);
        return shader;
      }

      let program = ctx.createProgram();
      program_ref.current = program;
      ctx.attachShader(
        program,
        compileShader(vertex_shader, ctx.VERTEX_SHADER)
      );
      ctx.attachShader(
        program,
        compileShader(fragment_shader, ctx.FRAGMENT_SHADER)
      );
      ctx.linkProgram(program);
      ctx.useProgram(program);

      let thresh_location = ctx.getUniformLocation(program, 'u_thresh');
      ctx.uniform2f(thresh_location, lthresh, hthresh);

      let palette_location = ctx.getUniformLocation(program, 'u_palette');
      let test = themes[pick];
      let hues = picked_keys
        .map(k =>
          chroma(test[k])
            .gl()
            .slice(0, 3)
        )
        .flat();
      ctx.uniform3fv(palette_location, new Float32Array(hues));

      let resolution_location = ctx.getUniformLocation(program, 'u_resolution');
      ctx.uniform2f(resolution_location, c.width, c.height);

      let position_location = ctx.getAttribLocation(program, 'a_position');
      let buffer = ctx.createBuffer();
      ctx.bindBuffer(ctx.ARRAY_BUFFER, buffer);
      ctx.bufferData(
        ctx.ARRAY_BUFFER,
        new Float32Array([
          0,
          0,
          img.width,
          0,
          0,
          img.height,
          0,
          img.height,
          img.width,
          0,
          img.width,
          img.height,
        ]),
        ctx.STATIC_DRAW
      );
      ctx.enableVertexAttribArray(position_location);
      ctx.vertexAttribPointer(position_location, 2, ctx.FLOAT, false, 0, 0);

      let tex_coord_location = ctx.getAttribLocation(program, 'a_texCoord');
      let tex_coord_buffer = ctx.createBuffer();
      ctx.bindBuffer(ctx.ARRAY_BUFFER, tex_coord_buffer);
      ctx.bufferData(
        ctx.ARRAY_BUFFER,
        new Float32Array([
          0.0,
          0.0,
          1.0,
          0.0,
          0.0,
          1.0,
          0.0,
          1.0,
          1.0,
          0.0,
          1.0,
          1.0,
        ]),
        ctx.STATIC_DRAW
      );
      ctx.enableVertexAttribArray(tex_coord_location);
      ctx.vertexAttribPointer(tex_coord_location, 2, ctx.FLOAT, false, 0, 0);

      let texture = ctx.createTexture();
      ctx.bindTexture(ctx.TEXTURE_2D, texture);
      ctx.bindTexture(ctx.TEXTURE_2D, texture);

      ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE);
      ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE);
      ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.NEAREST);
      ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.NEAREST);
      ctx.texImage2D(
        ctx.TEXTURE_2D,
        0,
        ctx.RGBA,
        ctx.RGBA,
        ctx.UNSIGNED_BYTE,
        img
      );

      ctx.drawArrays(ctx.TRIANGLES, 0, 6);
    };
    img.src = '/wick.jpg';
  }, []);

  function keyAction(e) {
    let key = e.key.toLowerCase();
    let repeat = e.repeat;

    if (key === 'j') {
      setPick(prevState => {
        let nstate = prevState + 1;
        if (nstate === themes.length) nstate = 0;
        return nstate;
      });
    }
    if (key === 'k') {
      setPick(prevState => {
        let nstate = prevState - 1;
        if (nstate < 0) nstate = themes.length - 1;
        return nstate;
      });
    }
    if (key === 'h') {
      setHueShift(prevState => {
        let n = prevState - 1;
        if (n < 0) n = hue_keys.length - 1;
        return n;
      });
    }
    if (key === 'l') {
      setHueShift(prevState => {
        return (prevState + 1) % hue_keys.length;
      });
    }
    if (key === 'a') {
      setLthresh(prevState => {
        return Math.max(0, prevState - 0.0125);
      });
    }
    if (key === 's') {
      setLthresh(prevState => {
        return Math.min(1, prevState + 0.0125);
      });
    }
    if (key === 'd') {
      setHthresh(prevState => {
        return Math.max(0, prevState - 0.0125);
      });
    }
    if (key === 'f') {
      setHthresh(prevState => {
        return Math.min(1, prevState + 0.0125);
      });
    }
  }

  useEffect(() => {
    if (load) {
      let c = c_ref.current;
      let ctx = c.getContext('webgl');
      let program = program_ref.current;

      let thresh_location = ctx.getUniformLocation(program, 'u_thresh');
      ctx.uniform2f(thresh_location, lthresh, hthresh);

      let test = themes[pick];
      let hues = picked_keys.map(k =>
        chroma(test[k])
          .gl()
          .slice(0, 3)
      );

      let bgfg = hues.slice(0, 2);
      let hues_a = hues.slice(2, 2 + hue_shift);
      let hues_b = hues.slice(2 + hue_shift);
      let arranged = [...bgfg, ...hues_b, ...hues_a];

      let palette_location = ctx.getUniformLocation(program, 'u_palette');
      ctx.uniform3fv(palette_location, new Float32Array(arranged.flat()));

      ctx.drawArrays(ctx.TRIANGLES, 0, 6);
    }
  }, [lthresh, hthresh, pick, hue_shift]);

  function downHandler(e) {
    let key = e.key.toLowerCase();
    keymap_ref.current[key] = true;
    keyAction(e);
  }

  function upHandler(e) {
    let key = e.key.toLowerCase();
    keymap_ref.current[key] = false;
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  let sorted = [...themes.slice(pick), ...themes.slice(0, pick)];
  let fg = themes[pick].FOREGROUND_COLOR;
  let bg = themes[pick].BACKGROUND_COLOR;
  return (
    <div>
      <Head>
        <title>Picterm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          minHeight: '100%',
          background: themes[pick].BACKGROUND_COLOR,
        }}
      >
        <div style={{ outline: `solid 1px ${fg}`, color: fg, display: 'flex' }}>
          <div style={{ display: 'flex', marginRight: '1ch' }}>
            <div
              style={{
                background: fg,
                color: bg,
                paddingLeft: '0.5ch',
                paddingRight: '0.5ch',
                marginRight: '0.5ch',
              }}
            >
              o
            </div>
            <div>open file</div>
          </div>
          <div style={{ display: 'flex', marginRight: '1ch' }}>
            <div
              style={{
                background: fg,
                color: bg,
                paddingLeft: '0.5ch',
                paddingRight: '0.5ch',
                marginLeft: '0.5ch',
                marginRight: '0.5ch',
              }}
            >
              w
            </div>
            <div>save png</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                background: fg,
                color: bg,
                paddingLeft: '0.5ch',
                paddingRight: '0.5ch',
                marginLeft: '0.5ch',
                marginRight: '0.5ch',
              }}
            >
              ?
            </div>
            <div>toggle help</div>
          </div>
        </div>
        <div
          style={{
            paddingLeft: '1ch',
            paddingRight: '1ch',
            paddingTop: rlh / 2,
            paddingBottom: 0,
            display: 'flex',
            marginBottom: rlh / 4,
          }}
        >
          <div
            style={{
              border: `solid 1px ${themes[pick].FOREGROUND_COLOR}`,
              background: themes[pick].FOREGROUND_COLOR,
            }}
          >
            <canvas ref={c_ref} />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            color: fg,
            paddingLeft: '1ch',
            marginBottom: rlh / 4,
          }}
        >
          <div style={{ marginRight: '2ch' }}>
            <div style={{}}>lothresh</div>
            <div style={{ display: 'flex', outline: `solid 1px ${fg}` }}>
              <div
                style={{
                  background: fg,
                  color: bg,
                  paddingLeft: '0.5ch',
                  paddingRight: '0.5ch',
                }}
              >
                a
              </div>
              <div
                style={{
                  paddingLeft: '0.5ch',
                  paddingRight: '0.5ch',
                }}
              >
                {lthresh.toFixed(4)}
              </div>
              <div
                style={{
                  background: fg,
                  color: bg,
                  paddingLeft: '0.5ch',
                  paddingRight: '0.5ch',
                }}
              >
                s
              </div>
            </div>
          </div>
          <div style={{ marginRight: '2ch' }}>
            <div>hithresh</div>
            <div style={{ display: 'flex', outline: `solid 1px ${fg}` }}>
              <div
                style={{
                  background: fg,
                  color: bg,
                  paddingLeft: '0.5ch',
                  paddingRight: '0.5ch',
                }}
              >
                d
              </div>
              <div
                style={{
                  paddingLeft: '0.5ch',
                  paddingRight: '0.5ch',
                }}
              >
                {hthresh.toFixed(4)}
              </div>
              <div
                style={{
                  background: fg,
                  color: bg,
                  paddingLeft: '0.5ch',
                  paddingRight: '0.5ch',
                }}
              >
                f
              </div>
            </div>
          </div>
          <div>
            <div>shue</div>
            <div style={{ display: 'flex', outline: `solid 1px ${fg}` }}>
              <div
                style={{
                  background: fg,
                  color: bg,
                  paddingLeft: '0.5ch',
                  paddingRight: '0.5ch',
                }}
              >
                h
              </div>
              <div
                style={{
                  paddingLeft: '0.5ch',
                  paddingRight: '0.5ch',
                }}
              >
                {hue_shift}
              </div>
              <div
                style={{
                  background: fg,
                  color: bg,
                  paddingLeft: '0.5ch',
                  paddingRight: '0.5ch',
                }}
              >
                l
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            color: themes[pick].FOREGROUND_COLOR,
            paddingLeft: '1ch',
            display: 'none',
          }}
        >
          <div>lothresh</div>
          <div style={{ display: 'flex' }}>
            <span
              style={{
                display: 'inline-block',
              }}
            >
              a←
            </span>
            <span
              style={{
                background: themes[pick].FOREGROUND_COLOR,
                color: themes[pick].BACKGROUND_COLOR,
                display: 'inline-block',
              }}
            >
              {lthresh.toFixed(4)}
            </span>
            <span style={{ display: 'inline-block' }}>→s</span>
            {` `}
            <span
              style={{
                background: themes[pick].FOREGROUND_COLOR,
                color: themes[pick].BACKGROUND_COLOR,
                display: 'inline-block',
              }}
            >
              {hthresh.toFixed(4)}
            </span>
            f h
            <span
              style={{
                background: themes[pick].FOREGROUND_COLOR,
                color: themes[pick].BACKGROUND_COLOR,
                display: 'inline-block',
              }}
            >
              {hue_shift}
            </span>
            l
          </div>
          <div style={{ display: 'none' }}>
            h↓j↑ {themes[pick].PROFILE_NAME}
          </div>
        </div>

        <div
          style={{ display: 'block', paddingLeft: '1ch', paddingRight: '1ch' }}
        >
          <div style={{ color: fg }}>theme</div>
          {sorted.map((t, i) => (
            <div
              key={t.PROFILE_NAME}
              style={{
                display: 'flex',
                position: 'relative',
                color: themes[pick].FOREGROUND_COLOR,
                outline: i === 0 ? `solid 1px ${t.FOREGROUND_COLOR}` : 'none',
                zIndex: i === 0 ? 2 : 1,
              }}
            >
              <div style={{ width: '12ch', display: 'flex' }}>
                {hue_keys.map(k => (
                  <div
                    style={{ background: t[k], width: '2ch', height: '1.5rem' }}
                  ></div>
                ))}
              </div>
              <div style={{ display: 'flex', flexGrow: 1 }}>
                <div
                  style={{
                    background:
                      i === 0 && false
                        ? t.FOREGROUND_COLOR
                        : t.BACKGROUND_COLOR,
                    color:
                      i === 0 && false
                        ? t.BACKGROUND_COLOR
                        : t.FOREGROUND_COLOR,
                    paddingLeft: '0.5ch',
                    paddingRight: '0.5ch',
                  }}
                >
                  {t['profile_name'.toUpperCase()]}
                </div>
              </div>
              {i === 0 ? (
                <div
                  style={{
                    width: '4ch',
                    background: fg,
                    paddingLeft: '0.5ch',
                    color: bg,
                  }}
                >
                  j k
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <style global jsx>{`
        @font-face {
          font-family: 'custom';
          src: url('/IBMPlexSans-Regular.woff2') format('woff2'),
            url('/IBMPlexSans-Regular.woff') format('woff');
        }
        @font-face {
          font-family: 'customono';
          src: url('/IBMPlexMono-Regular.woff2') format('woff2'),
            url('/IBMPlexMono-Regular.woff') format('woff');
        }
        * {
          box-sizing: border-box;
        }
        html {
          font-family: 'customono', sans-serif;
          font-size: ${fs}px;
          line-height: ${lh};
        }
        body {
          margin: 0;
          padding: 0;
        }
        canvas {
          display: block;
        }
      `}</style>
    </div>
  );
};

Home.getInitialProps = async function() {
  return {
    pick_serve: 0,
  };
};

export default Home;
