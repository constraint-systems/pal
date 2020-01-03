export default () => `attribute vec2 a_position;
  attribute vec2 a_texCoord;
  varying vec2 v_texCoord;
  uniform vec2 u_resolution;

  void main() {
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0; // convert the rectangle from pixels to clipspace
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    v_texCoord = a_texCoord; // pass the texCoord to the fragment shader
  }`
