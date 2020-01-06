import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { themes } from '../s/theme_min.js'
import { fragment_shader, vertex_shader } from '../shaders/shaders.js'
import * as chroma from 'chroma-js'

let fs = 15
let lh = 1.5
let rlh = fs * lh

let theme_names = themes.map(t => t.name)

let Keycap = ({ k, fg, bg, clickKey, inline = false }) => {
  return (
    <button
      style={{
        userSelect: 'none',
        MozUserSelect: 'none',
        background: fg,
        color: bg,
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch',
        textDecoration: 'underline',
        display: inline ? 'inline' : 'block',
        font: 'inherir',
        paddingBottom: 0,
        paddingTop: 0,
        border: 0,
      }}
      onClick={() => {
        clickKey(k)
      }}
    >
      {k}
    </button>
  )
}

console.log('keys used:', 'asdfhlow?x')

const Home = ({ pick_serve }) => {
  let [pick, setPick] = useState(0)
  let [hue_shift, setHueShift] = useState(0)
  let keymap_ref = useRef({})
  let c_holder_ref = useRef(null)
  let program_ref = useRef({})
  let container_ref = useRef({})
  let [load, setLoad] = useState(false)
  let [lthresh, setLthresh] = useState(0.2)
  let [hthresh, setHthresh] = useState(0.8)
  let [show_info, setShowInfo] = useState(true)

  function clickKey(key) {
    let km = keymap_ref.current
    km[key] = true
    keyAction({ key }, false)
    setTimeout(() => {
      km[key] = false
    }, 0)
  }

  function initImage(src, first_load = false) {
    let img = new Image()
    img.onload = () => {
      setLoad(true)

      let w = window.innerWidth - 18 * 2
      let h = window.innerHeight - rlh

      let iw = img.width
      let ih = img.height

      let wa = w / h
      let ia = iw / ih

      let resize_check = false
      let rw, rh
      if (ia >= wa) {
        if (iw > w) {
          resize_check = true
          rw = w
          rh = Math.round(w / ia)
        }
      } else {
        if (ih > h) {
          resize_check = true
          rh = h
          rw = Math.round(h * ia)
        }
      }

      if (resize_check) {
        let confirm_check = true
        if (!first_load) {
          confirm_check = confirm(
            `The image you selected is larger (${iw}x${ih}) than the browser window.  Resize it to fit (${rw}x${rh})? Choose cancel to import it at full size.`
          )
        }
        if (confirm_check) {
          img.width = rw
          img.height = rh
        }
      }

      let c_holder = c_holder_ref.current
      c_holder.innerHTML = ''

      container_ref.current.style.minWidth = img.width + 18 + 'px'

      let c = document.createElement('canvas')
      c.width = img.width
      c.height = img.height
      c_holder.appendChild(c)

      let ctx = c.getContext('webgl', { preserveDrawingBuffer: true })

      function compileShader(shaderSource, shaderType) {
        let shader = ctx.createShader(shaderType)
        ctx.shaderSource(shader, shaderSource)
        ctx.compileShader(shader)
        return shader
      }

      let program = ctx.createProgram()
      program_ref.current = program
      ctx.attachShader(program, compileShader(vertex_shader, ctx.VERTEX_SHADER))
      ctx.attachShader(
        program,
        compileShader(fragment_shader, ctx.FRAGMENT_SHADER)
      )
      ctx.linkProgram(program)
      ctx.useProgram(program)

      let thresh_location = ctx.getUniformLocation(program, 'u_thresh')
      ctx.uniform2f(thresh_location, lthresh, hthresh)

      let palette_location = ctx.getUniformLocation(program, 'u_palette')
      let picked = themes[pick]
      let hues = picked.hues.map(k =>
        chroma(k)
          .gl()
          .slice(0, 3)
      )
      let arranged = [
        chroma(picked.bg)
          .gl()
          .slice(0, 3),
        chroma(picked.fg)
          .gl()
          .slice(0, 3),
        ...hues,
      ]

      ctx.uniform3fv(palette_location, new Float32Array(arranged.flat()))

      let resolution_location = ctx.getUniformLocation(program, 'u_resolution')
      ctx.uniform2f(resolution_location, c.width, c.height)

      let position_location = ctx.getAttribLocation(program, 'a_position')
      let buffer = ctx.createBuffer()
      ctx.bindBuffer(ctx.ARRAY_BUFFER, buffer)
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
      )
      ctx.enableVertexAttribArray(position_location)
      ctx.vertexAttribPointer(position_location, 2, ctx.FLOAT, false, 0, 0)

      let tex_coord_location = ctx.getAttribLocation(program, 'a_texCoord')
      let tex_coord_buffer = ctx.createBuffer()
      ctx.bindBuffer(ctx.ARRAY_BUFFER, tex_coord_buffer)
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
      )
      ctx.enableVertexAttribArray(tex_coord_location)
      ctx.vertexAttribPointer(tex_coord_location, 2, ctx.FLOAT, false, 0, 0)

      let texture = ctx.createTexture()
      ctx.bindTexture(ctx.TEXTURE_2D, texture)
      ctx.bindTexture(ctx.TEXTURE_2D, texture)

      ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE)
      ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE)
      ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.NEAREST)
      ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.NEAREST)
      ctx.texImage2D(
        ctx.TEXTURE_2D,
        0,
        ctx.RGBA,
        ctx.RGBA,
        ctx.UNSIGNED_BYTE,
        img
      )

      ctx.drawArrays(ctx.TRIANGLES, 0, 6)
    }
    img.src = src
  }

  useEffect(() => {
    initImage('scruggs.jpg', true)
  }, [])

  function selectTheme(name) {
    let index = theme_names.indexOf(name)
    setPick(index)
  }

  function keyAction(e) {
    let key = e.key.toLowerCase()
    let repeat = e.repeat
    let keymap = keymap_ref.current
    if (key === 'o' && !repeat) {
      let input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.dispatchEvent(
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      )

      function handleChange(e) {
        for (const item of this.files) {
          if (item.type.indexOf('image') < 0) {
            continue
          }
          let src = URL.createObjectURL(item)
          initImage(src)
        }
        this.removeEventListener('change', handleChange)
      }
      input.addEventListener('change', handleChange)
    }
    if (key === 'w' && !repeat) {
      let link = document.createElement('a')

      var revokeURL = function() {
        let me = this
        requestAnimationFrame(function() {
          URL.revokeObjectURL(me.href)
          me.href = null
        })
        this.removeEventListener('click', revokeURL)
      }

      c_holder_ref.current.childNodes[0].toBlob(function(blob) {
        link.setAttribute(
          'download',
          `pal-${themes[pick].name
            .replace(' ', '_')
            .toLowerCase()}-l${lthresh
            .toString()
            .replace('0.', '')}-h${hthresh
            .toString()
            .replace('0.', '')}-s${hue_shift}-${new Date()
            .toISOString()
            .slice(0, -4)
            .replace(/-/g, '')
            .replace(/:/g, '')
            .replace(/_/g, '')
            .replace(/\./g, '')}Z.png`
        )
        link.setAttribute('href', URL.createObjectURL(blob))
        link.addEventListener('click', revokeURL)
        link.dispatchEvent(
          new MouseEvent(`click`, {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        )
      })
    }
    if (key === 'x') {
      setShowInfo(false)
    }
    if (key === '?') {
      setShowInfo(prev => !prev)
    }

    if (keymap['j']) {
      setPick(prevState => {
        let nstate = prevState + 1
        if (nstate === themes.length) nstate = 0
        return nstate
      })
    }
    if (keymap['k']) {
      setPick(prevState => {
        let nstate = prevState - 1
        if (nstate < 0) nstate = themes.length - 1
        return nstate
      })
    }
    if (keymap['h']) {
      setHueShift(prevState => {
        let n = prevState - 1
        if (n < 0) n = themes[0].hues.length - 1
        return n
      })
    }
    if (keymap['l']) {
      setHueShift(prevState => {
        return (prevState + 1) % themes[0].hues.length
      })
    }
    if (keymap['a']) {
      setLthresh(prevState => {
        return Math.max(0, prevState - 0.0125)
      })
    }
    if (keymap['s']) {
      setLthresh(prevState => {
        return Math.min(hthresh, prevState + 0.0125)
      })
    }
    if (keymap['d']) {
      setHthresh(prevState => {
        return Math.max(lthresh, prevState - 0.0125)
      })
    }
    if (keymap['f']) {
      setHthresh(prevState => {
        return Math.min(1, prevState + 0.0125)
      })
    }
  }

  useEffect(() => {
    if (load) {
      let c = c_holder_ref.current.childNodes[0]
      let ctx = c.getContext('webgl', { preserveDrawingBuffer: true })
      let program = program_ref.current

      let thresh_location = ctx.getUniformLocation(program, 'u_thresh')
      ctx.uniform2f(thresh_location, lthresh, hthresh)

      let picked = themes[pick]
      let hues = picked.hues.map(k =>
        chroma(k)
          .gl()
          .slice(0, 3)
      )

      let hues_a = hues.slice(0, hue_shift)
      let hues_b = hues.slice(hue_shift)
      let arranged = [
        chroma(picked.bg)
          .gl()
          .slice(0, 3),
        chroma(picked.fg)
          .gl()
          .slice(0, 3),
        ...hues_b,
        ...hues_a,
      ]

      let palette_location = ctx.getUniformLocation(program, 'u_palette')
      ctx.uniform3fv(palette_location, new Float32Array(arranged.flat()))

      ctx.drawArrays(ctx.TRIANGLES, 0, 6)
    }
  }, [lthresh, hthresh, pick, hue_shift])

  function downHandler(e) {
    let key = e.key.toLowerCase()
    keymap_ref.current[key] = true
    keyAction(e)
  }

  function upHandler(e) {
    let key = e.key.toLowerCase()
    keymap_ref.current[key] = false
  }

  function onPaste(e) {
    e.preventDefault()
    e.stopPropagation()
    for (const item of e.clipboardData.items) {
      if (item.type.indexOf('image') < 0) {
        continue
      }
      let file = item.getAsFile()
      let src = URL.createObjectURL(file)
      initImage(src)
    }
  }

  function onDrag(e) {
    e.stopPropagation()
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  }

  function onDrop(e) {
    e.preventDefault()
    e.stopPropagation()
    let file = e.dataTransfer.files[0]
    let filename = file.path ? file.path : file.name ? file.name : ''
    let src = URL.createObjectURL(file)
    initImage(src)
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    window.addEventListener('paste', onPaste, false)
    window.addEventListener('dragover', onDrag, false)
    window.addEventListener('drop', onDrop, false)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
      window.removeEventListener('paste', onPaste)
      window.removeEventListener('dragover', onDrag, false)
      window.removeEventListener('drop', onDrop, false)
    }
  }, [lthresh, hthresh, pick])

  let picked = themes[pick]
  let fg = picked.fg
  let bg = picked.bg
  let sorted = [...themes.slice(pick), ...themes.slice(0, pick)]
  return (
    <div>
      <Head>
        <title>Pal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        ref={container_ref}
        style={{
          minHeight: '100%',
          background: bg,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            outline: `solid 1px ${fg}`,
            color: fg,
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '1ch', marginRight: '1ch' }}>
              <div>Pal</div>
            </div>
            <div style={{ display: 'flex', marginRight: '1ch' }}>
              <Keycap k={'o'} fg={fg} bg={bg} clickKey={clickKey} />
              <div style={{ marginLeft: '0.5ch' }}>open file</div>
            </div>
            <div style={{ display: 'flex', marginRight: '1ch' }}>
              <Keycap k={'w'} fg={fg} bg={bg} clickKey={clickKey} />
              <div style={{ marginLeft: '0.5ch' }}>save png</div>
            </div>
            <div style={{ display: 'flex' }}>
              <Keycap k={'?'} fg={fg} bg={bg} clickKey={clickKey} />
              <div style={{ marginLeft: '0.5ch' }}>show info</div>
            </div>
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
              border: `solid 1px ${fg}`,
              background: fg,
            }}
            ref={c_holder_ref}
          ></div>
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
              <Keycap k={'a'} fg={fg} bg={bg} clickKey={clickKey} />
              <div
                style={{
                  paddingLeft: '0.5ch',
                  paddingRight: '0.5ch',
                }}
              >
                {lthresh.toFixed(4)}
              </div>
              <Keycap k={'s'} fg={fg} bg={bg} clickKey={clickKey} />
            </div>
          </div>
          <div style={{ marginRight: '2ch' }}>
            <div>hithresh</div>
            <div style={{ display: 'flex', outline: `solid 1px ${fg}` }}>
              <Keycap k={'d'} fg={fg} bg={bg} clickKey={clickKey} />
              <div
                style={{
                  paddingLeft: '0.5ch',
                  paddingRight: '0.5ch',
                }}
              >
                {hthresh.toFixed(4)}
              </div>
              <Keycap k={'f'} fg={fg} bg={bg} clickKey={clickKey} />
            </div>
          </div>
          <div>
            <div>shue</div>
            <div style={{ display: 'flex', outline: `solid 1px ${fg}` }}>
              <Keycap k={'h'} fg={fg} bg={bg} clickKey={clickKey} />
              <div
                style={{
                  paddingLeft: '0.5ch',
                  paddingRight: '0.5ch',
                }}
              >
                {hue_shift}
              </div>
              <Keycap k={'l'} fg={fg} bg={bg} clickKey={clickKey} />
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'block',
            paddingLeft: '1ch',
            paddingRight: '1ch',
            paddingBottom: rlh / 2,
          }}
        >
          <div style={{ color: fg }}>theme</div>
          {sorted.map((t, i) => (
            <div
              key={t.name}
              style={{
                display: 'flex',
                position: 'relative',
                color: fg,
                outline: i === 0 ? `solid 1px ${fg}` : 'none',
                zIndex: i === 0 ? 2 : 1,
                cursor: 'default',
              }}
            >
              <div
                style={{ width: '12ch', display: 'flex' }}
                onClick={() => {
                  selectTheme(t.name)
                }}
              >
                <div
                  style={{ background: t.bg, width: '2ch', height: '1.5rem' }}
                ></div>
                <div
                  style={{ background: t.fg, width: '2ch', height: '1.5rem' }}
                ></div>
                {t.hues.map(k => (
                  <div
                    key={k}
                    style={{ background: k, width: '2ch', height: '1.5rem' }}
                  ></div>
                ))}
              </div>
              <div style={{ display: 'flex', flexGrow: 1 }}>
                <div
                  style={{
                    background: i === 0 && false ? t.fg : t.bg,
                    color: i === 0 && false ? t.bg : t.fg,
                    paddingLeft: '0.5ch',
                    paddingRight: '0.5ch',
                  }}
                  onClick={() => {
                    selectTheme(t.name)
                  }}
                >
                  {t.name}
                </div>
              </div>
              {i === 0 ? (
                <div style={{ display: 'flex' }}>
                  <Keycap k={'j'} fg={fg} bg={bg} clickKey={clickKey} />
                  <Keycap k={'k'} fg={fg} bg={bg} clickKey={clickKey} />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {show_info ? (
          <div
            style={{
              position: 'fixed',
              zIndex: 4,
              left: 0,
              top: 0,
              height: '100%',
              width: '100%',
              paddingLeft: '1ch',
              paddingRight: '1ch',
              paddingTop: rlh * 2,
            }}
            onClick={() => {
              setShowInfo(false)
            }}
          >
            <div
              style={{
                background: bg,
                color: fg,
                border: `solid 1px ${fg}`,
                borderTop: 'none',
                maxWidth: '60ch',
                margin: '0 auto',
              }}
              onClick={e => {
                e.stopPropagation()
              }}
            >
              <div
                style={{
                  outline: `solid 1px ${fg}`,
                  paddingLeft: '1ch',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>Info</div>
                <Keycap k={'x'} fg={fg} bg={bg} clickKey={clickKey} />
              </div>
              <div
                style={{
                  paddingLeft: '1ch',
                  paddingRight: '1ch',
                  paddingTop: rlh / 2,
                  paddingBottom: rlh / 2,
                }}
              >
                <div style={{ marginBottom: rlh }}>
                  Pal let's you apply an eight-color terminal color palette to
                  an image. Use the keyboard controls to choose a theme, set
                  thresholds, and cycle hues.
                </div>
                <div style={{ marginBottom: rlh }}>
                  You can load your own image by pressing{' '}
                  <Keycap
                    k={'o'}
                    fg={fg}
                    bg={bg}
                    clickKey={clickKey}
                    inline={true}
                  />
                  , pasting, or dragging and dropping.
                </div>

                <div>
                  You can read more about how it works and view the code{' '}
                  <a
                    href="https://github.com/constraint-systems/pal"
                    style={{ color: fg }}
                  >
                    on github
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        ) : null}
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
          overflow: hidden;
        }
        canvas {
          display: block;
        }
      `}</style>
    </div>
  )
}

export default Home
