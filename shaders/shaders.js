export let vertex_shader = `attribute vec2 a_position;
  attribute vec2 a_texCoord;
  varying vec2 v_texCoord;
  uniform vec2 u_resolution;

  void main() {
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0; // convert the rectangle from pixels to clipspace
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    v_texCoord = a_texCoord; // pass the texCoord to the fragment shader
  }`

export let fragment_shader = `precision mediump float;
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
  }`
