webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _s_theme_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../s/theme_min.js */ "./s/theme_min.js");
/* harmony import */ var _shaders_shaders_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaders/shaders.js */ "./shaders/shaders.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/home/grant/sites/constraint-systems/pal/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var fs = 15;
var lh = 1.5;
var rlh = fs * lh;
var theme_names = _s_theme_min_js__WEBPACK_IMPORTED_MODULE_5__["themes"].map(function (t) {
  return t.name;
});

var Keycap = function Keycap(_ref) {
  var k = _ref.k,
      fg = _ref.fg,
      bg = _ref.bg,
      clickKey = _ref.clickKey,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline;
  return __jsx("button", {
    style: {
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
      border: 0
    },
    onClick: function onClick() {
      clickKey(k);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, k);
};

console.log('keys used:', 'asdfhlow?x');

var Home = function Home(_ref2) {
  var pick_serve = _ref2.pick_serve;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      pick = _useState[0],
      setPick = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      hue_shift = _useState2[0],
      setHueShift = _useState2[1];

  var keymap_ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])({});
  var c_holder_ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var program_ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])({});
  var container_ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])({});

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      load = _useState3[0],
      setLoad = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0.2),
      lthresh = _useState4[0],
      setLthresh = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0.8),
      hthresh = _useState5[0],
      setHthresh = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      show_info = _useState6[0],
      setShowInfo = _useState6[1];

  function clickKey(key) {
    var km = keymap_ref.current;
    km[key] = true;
    keyAction({
      key: key
    }, false);
    setTimeout(function () {
      km[key] = false;
    }, 0);
  }

  function initImage(src) {
    var first_load = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var img = new Image();

    img.onload = function () {
      setLoad(true);
      var w = window.innerWidth - 18 * 2;
      var h = window.innerHeight - rlh;
      var iw = img.width;
      var ih = img.height;
      var wa = w / h;
      var ia = iw / ih;
      var resize_check = false;
      var rw, rh;

      if (ia >= wa) {
        if (iw > w) {
          resize_check = true;
          rw = w;
          rh = Math.round(w / ia);
        }
      } else {
        if (ih > h) {
          resize_check = true;
          rh = h;
          rw = Math.round(h * ia);
        }
      }

      if (resize_check) {
        var confirm_check = true;

        if (!first_load) {
          confirm_check = confirm("The image you selected is larger (".concat(iw, "x").concat(ih, ") than the browser window.  Resize it to fit (").concat(rw, "x").concat(rh, ")? Choose cancel to import it at full size."));
        }

        if (confirm_check) {
          img.width = rw;
          img.height = rh;
        }
      }

      var c_holder = c_holder_ref.current;
      c_holder.innerHTML = '';
      container_ref.current.style.minWidth = img.width + 18 + 'px';
      var c = document.createElement('canvas');
      c.width = img.width;
      c.height = img.height;
      c_holder.appendChild(c);
      var ctx = c.getContext('webgl', {
        preserveDrawingBuffer: true
      });

      function compileShader(shaderSource, shaderType) {
        var shader = ctx.createShader(shaderType);
        ctx.shaderSource(shader, shaderSource);
        ctx.compileShader(shader);
        return shader;
      }

      var program = ctx.createProgram();
      program_ref.current = program;
      ctx.attachShader(program, compileShader(_shaders_shaders_js__WEBPACK_IMPORTED_MODULE_6__["vertex_shader"], ctx.VERTEX_SHADER));
      ctx.attachShader(program, compileShader(_shaders_shaders_js__WEBPACK_IMPORTED_MODULE_6__["fragment_shader"], ctx.FRAGMENT_SHADER));
      ctx.linkProgram(program);
      ctx.useProgram(program);
      var thresh_location = ctx.getUniformLocation(program, 'u_thresh');
      ctx.uniform2f(thresh_location, lthresh, hthresh);
      var palette_location = ctx.getUniformLocation(program, 'u_palette');
      var picked = _s_theme_min_js__WEBPACK_IMPORTED_MODULE_5__["themes"][pick];
      var hues = picked.hues.map(function (k) {
        return chroma_js__WEBPACK_IMPORTED_MODULE_7__(k).gl().slice(0, 3);
      });
      var arranged = [chroma_js__WEBPACK_IMPORTED_MODULE_7__(picked.bg).gl().slice(0, 3), chroma_js__WEBPACK_IMPORTED_MODULE_7__(picked.fg).gl().slice(0, 3)].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(hues));
      ctx.uniform3fv(palette_location, new Float32Array(arranged.flat()));
      var resolution_location = ctx.getUniformLocation(program, 'u_resolution');
      ctx.uniform2f(resolution_location, c.width, c.height);
      var position_location = ctx.getAttribLocation(program, 'a_position');
      var buffer = ctx.createBuffer();
      ctx.bindBuffer(ctx.ARRAY_BUFFER, buffer);
      ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array([0, 0, img.width, 0, 0, img.height, 0, img.height, img.width, 0, img.width, img.height]), ctx.STATIC_DRAW);
      ctx.enableVertexAttribArray(position_location);
      ctx.vertexAttribPointer(position_location, 2, ctx.FLOAT, false, 0, 0);
      var tex_coord_location = ctx.getAttribLocation(program, 'a_texCoord');
      var tex_coord_buffer = ctx.createBuffer();
      ctx.bindBuffer(ctx.ARRAY_BUFFER, tex_coord_buffer);
      ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), ctx.STATIC_DRAW);
      ctx.enableVertexAttribArray(tex_coord_location);
      ctx.vertexAttribPointer(tex_coord_location, 2, ctx.FLOAT, false, 0, 0);
      var texture = ctx.createTexture();
      ctx.bindTexture(ctx.TEXTURE_2D, texture);
      ctx.bindTexture(ctx.TEXTURE_2D, texture);
      ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE);
      ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE);
      ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.NEAREST);
      ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.NEAREST);
      ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, ctx.RGBA, ctx.UNSIGNED_BYTE, img);
      ctx.drawArrays(ctx.TRIANGLES, 0, 6);
    };

    img.src = src;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    initImage('scruggs.jpg', true);
  }, []);

  function selectTheme(name) {
    var index = theme_names.indexOf(name);
    setPick(index);
  }

  function keyAction(e) {
    var key = e.key.toLowerCase();
    var repeat = e.repeat;
    var keymap = keymap_ref.current;

    if (key === 'o' && !repeat) {
      var handleChange = function handleChange(e) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.files), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item.type.indexOf('image') < 0) {
              continue;
            }

            var src = URL.createObjectURL(item);
            initImage(src);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.removeEventListener('change', handleChange);
      };

      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      }));
      input.addEventListener('change', handleChange);
    }

    if (key === 'w' && !repeat) {
      var link = document.createElement('a');

      var revokeURL = function revokeURL() {
        var me = this;
        requestAnimationFrame(function () {
          URL.revokeObjectURL(me.href);
          me.href = null;
        });
        this.removeEventListener('click', revokeURL);
      };

      c_holder_ref.current.childNodes[0].toBlob(function (blob) {
        link.setAttribute('download', "pal-".concat(_s_theme_min_js__WEBPACK_IMPORTED_MODULE_5__["themes"][pick].name.replace(' ', '_').toLowerCase(), "-l").concat(lthresh.toString().replace('0.', ''), "-h").concat(hthresh.toString().replace('0.', ''), "-s").concat(hue_shift, "-").concat(new Date().toISOString().slice(0, -4).replace(/-/g, '').replace(/:/g, '').replace(/_/g, '').replace(/\./g, ''), "Z.png"));
        link.setAttribute('href', URL.createObjectURL(blob));
        link.addEventListener('click', revokeURL);
        link.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      });
    }

    if (key === 'x') {
      setShowInfo(false);
    }

    if (key === '?') {
      setShowInfo(function (prev) {
        return !prev;
      });
    }

    if (keymap['j']) {
      setPick(function (prevState) {
        var nstate = prevState + 1;
        if (nstate === _s_theme_min_js__WEBPACK_IMPORTED_MODULE_5__["themes"].length) nstate = 0;
        return nstate;
      });
    }

    if (keymap['k']) {
      setPick(function (prevState) {
        var nstate = prevState - 1;
        if (nstate < 0) nstate = _s_theme_min_js__WEBPACK_IMPORTED_MODULE_5__["themes"].length - 1;
        return nstate;
      });
    }

    if (keymap['h']) {
      setHueShift(function (prevState) {
        var n = prevState - 1;
        if (n < 0) n = _s_theme_min_js__WEBPACK_IMPORTED_MODULE_5__["themes"][0].hues.length - 1;
        return n;
      });
    }

    if (keymap['l']) {
      setHueShift(function (prevState) {
        return (prevState + 1) % _s_theme_min_js__WEBPACK_IMPORTED_MODULE_5__["themes"][0].hues.length;
      });
    }

    if (keymap['a']) {
      setLthresh(function (prevState) {
        return Math.max(0, prevState - 0.0125);
      });
    }

    if (keymap['s']) {
      setLthresh(function (prevState) {
        return Math.min(hthresh, prevState + 0.0125);
      });
    }

    if (keymap['d']) {
      setHthresh(function (prevState) {
        return Math.max(lthresh, prevState - 0.0125);
      });
    }

    if (keymap['f']) {
      setHthresh(function (prevState) {
        return Math.min(1, prevState + 0.0125);
      });
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (load) {
      var c = c_holder_ref.current.childNodes[0];
      var ctx = c.getContext('webgl', {
        preserveDrawingBuffer: true
      });
      var program = program_ref.current;
      var thresh_location = ctx.getUniformLocation(program, 'u_thresh');
      ctx.uniform2f(thresh_location, lthresh, hthresh);
      var _picked = _s_theme_min_js__WEBPACK_IMPORTED_MODULE_5__["themes"][pick];

      var hues = _picked.hues.map(function (k) {
        return chroma_js__WEBPACK_IMPORTED_MODULE_7__(k).gl().slice(0, 3);
      });

      var hues_a = hues.slice(0, hue_shift);
      var hues_b = hues.slice(hue_shift);
      var arranged = [chroma_js__WEBPACK_IMPORTED_MODULE_7__(_picked.bg).gl().slice(0, 3), chroma_js__WEBPACK_IMPORTED_MODULE_7__(_picked.fg).gl().slice(0, 3)].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(hues_b), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(hues_a));
      var palette_location = ctx.getUniformLocation(program, 'u_palette');
      ctx.uniform3fv(palette_location, new Float32Array(arranged.flat()));
      ctx.drawArrays(ctx.TRIANGLES, 0, 6);
    }
  }, [lthresh, hthresh, pick, hue_shift]);

  function downHandler(e) {
    var key = e.key.toLowerCase();
    keymap_ref.current[key] = true;
    keyAction(e);
  }

  function upHandler(e) {
    var key = e.key.toLowerCase();
    keymap_ref.current[key] = false;
  }

  function onPaste(e) {
    e.preventDefault();
    e.stopPropagation();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(e.clipboardData.items), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        if (item.type.indexOf('image') < 0) {
          continue;
        }

        var file = item.getAsFile();
        var src = URL.createObjectURL(file);
        initImage(src);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  function onDrag(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    var file = e.dataTransfer.files[0];
    var filename = file.path ? file.path : file.name ? file.name : '';
    var src = URL.createObjectURL(file);
    initImage(src);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('paste', onPaste, false);
    window.addEventListener('dragover', onDrag, false);
    window.addEventListener('drop', onDrop, false);
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('paste', onPaste);
      window.removeEventListener('dragover', onDrag, false);
      window.removeEventListener('drop', onDrop, false);
    };
  }, [lthresh, hthresh, pick]);
  var picked = _s_theme_min_js__WEBPACK_IMPORTED_MODULE_5__["themes"][pick];
  var fg = picked.fg;
  var bg = picked.bg;
  var sorted = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_s_theme_min_js__WEBPACK_IMPORTED_MODULE_5__["themes"].slice(pick)), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_s_theme_min_js__WEBPACK_IMPORTED_MODULE_5__["themes"].slice(0, pick)));
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }, "Pal"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  })), __jsx("div", {
    ref: container_ref,
    style: {
      minHeight: '100%',
      background: bg
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      outline: "solid 1px ".concat(fg),
      color: fg
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginLeft: '1ch',
      marginRight: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: this
  }, "Pal")), __jsx("div", {
    style: {
      display: 'flex',
      marginRight: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  }, __jsx(Keycap, {
    k: 'o',
    fg: fg,
    bg: bg,
    clickKey: clickKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: this
  }), __jsx("div", {
    style: {
      marginLeft: '0.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }, "open file")), __jsx("div", {
    style: {
      display: 'flex',
      marginRight: '1ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    },
    __self: this
  }, __jsx(Keycap, {
    k: 'w',
    fg: fg,
    bg: bg,
    clickKey: clickKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: this
  }), __jsx("div", {
    style: {
      marginLeft: '0.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: this
  }, "save png")), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, __jsx(Keycap, {
    k: '?',
    fg: fg,
    bg: bg,
    clickKey: clickKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }), __jsx("div", {
    style: {
      marginLeft: '0.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: this
  }, "show info")))), __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      paddingTop: rlh / 2,
      paddingBottom: 0,
      display: 'flex',
      marginBottom: rlh / 4
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  }, __jsx("div", {
    style: {
      border: "solid 1px ".concat(fg),
      background: fg
    },
    ref: c_holder_ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: 'flex',
      color: fg,
      paddingLeft: '1ch',
      marginBottom: rlh / 4
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginRight: '2ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }, __jsx("div", {
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }, "lothresh"), __jsx("div", {
    style: {
      display: 'flex',
      outline: "solid 1px ".concat(fg)
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, __jsx(Keycap, {
    k: 'a',
    fg: fg,
    bg: bg,
    clickKey: clickKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }), __jsx("div", {
    style: {
      paddingLeft: '0.5ch',
      paddingRight: '0.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  }, lthresh.toFixed(4)), __jsx(Keycap, {
    k: 's',
    fg: fg,
    bg: bg,
    clickKey: clickKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }))), __jsx("div", {
    style: {
      marginRight: '2ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }, "hithresh"), __jsx("div", {
    style: {
      display: 'flex',
      outline: "solid 1px ".concat(fg)
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }, __jsx(Keycap, {
    k: 'd',
    fg: fg,
    bg: bg,
    clickKey: clickKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  }), __jsx("div", {
    style: {
      paddingLeft: '0.5ch',
      paddingRight: '0.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, hthresh.toFixed(4)), __jsx(Keycap, {
    k: 'f',
    fg: fg,
    bg: bg,
    clickKey: clickKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }, "shue"), __jsx("div", {
    style: {
      display: 'flex',
      outline: "solid 1px ".concat(fg)
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, __jsx(Keycap, {
    k: 'h',
    fg: fg,
    bg: bg,
    clickKey: clickKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }), __jsx("div", {
    style: {
      paddingLeft: '0.5ch',
      paddingRight: '0.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: this
  }, hue_shift), __jsx(Keycap, {
    k: 'l',
    fg: fg,
    bg: bg,
    clickKey: clickKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: this
  })))), __jsx("div", {
    style: {
      display: 'block',
      paddingLeft: '1ch',
      paddingRight: '1ch',
      paddingBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: this
  }, __jsx("div", {
    style: {
      color: fg
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577
    },
    __self: this
  }, "theme"), sorted.map(function (t, i) {
    return __jsx("div", {
      key: t.name,
      style: {
        display: 'flex',
        position: 'relative',
        color: fg,
        outline: i === 0 ? "solid 1px ".concat(fg) : 'none',
        zIndex: i === 0 ? 2 : 1,
        cursor: 'default'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579
      },
      __self: this
    }, __jsx("div", {
      style: {
        width: '12ch',
        display: 'flex'
      },
      onClick: function onClick() {
        selectTheme(t.name);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590
      },
      __self: this
    }, __jsx("div", {
      style: {
        background: t.bg,
        width: '2ch',
        height: '1.5rem'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596
      },
      __self: this
    }), __jsx("div", {
      style: {
        background: t.fg,
        width: '2ch',
        height: '1.5rem'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 599
      },
      __self: this
    }), t.hues.map(function (k) {
      return __jsx("div", {
        key: k,
        style: {
          background: k,
          width: '2ch',
          height: '1.5rem'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      });
    })), __jsx("div", {
      style: {
        display: 'flex',
        flexGrow: 1
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609
      },
      __self: this
    }, __jsx("div", {
      style: {
        background: i === 0 && false ? t.fg : t.bg,
        color: i === 0 && false ? t.bg : t.fg,
        paddingLeft: '0.5ch',
        paddingRight: '0.5ch'
      },
      onClick: function onClick() {
        selectTheme(t.name);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 610
      },
      __self: this
    }, t.name)), i === 0 ? __jsx("div", {
      style: {
        display: 'flex'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625
      },
      __self: this
    }, __jsx(Keycap, {
      k: 'j',
      fg: fg,
      bg: bg,
      clickKey: clickKey,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626
      },
      __self: this
    }), __jsx(Keycap, {
      k: 'k',
      fg: fg,
      bg: bg,
      clickKey: clickKey,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 627
      },
      __self: this
    })) : null);
  })), show_info ? __jsx("div", {
    style: {
      position: 'fixed',
      zIndex: 4,
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
      paddingLeft: '1ch',
      paddingRight: '1ch',
      paddingTop: rlh * 2
    },
    onClick: function onClick() {
      setShowInfo(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: this
  }, __jsx("div", {
    style: {
      background: bg,
      color: fg,
      border: "solid 1px ".concat(fg),
      borderTop: 'none',
      maxWidth: '60ch',
      margin: '0 auto'
    },
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: this
  }, __jsx("div", {
    style: {
      outline: "solid 1px ".concat(fg),
      paddingLeft: '1ch',
      display: 'flex',
      justifyContent: 'space-between'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }, "Info"), __jsx(Keycap, {
    k: 'x',
    fg: fg,
    bg: bg,
    clickKey: clickKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673
    },
    __self: this
  })), __jsx("div", {
    style: {
      paddingLeft: '1ch',
      paddingRight: '1ch',
      paddingTop: rlh / 2,
      paddingBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: rlh
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, "Pal let's you apply an eight-color terminal color palette to an image. Use the keyboard controls to choose a theme, set thresholds, and cycle hues."), __jsx("div", {
    style: {
      marginBottom: rlh
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688
    },
    __self: this
  }, "You can load your own image by pressing", ' ', __jsx(Keycap, {
    k: 'o',
    fg: fg,
    bg: bg,
    clickKey: clickKey,
    inline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: this
  }), ", pasting, or dragging and dropping."), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700
    },
    __self: this
  }, "You can read more about how it works and view the code", ' ', __jsx("a", {
    href: "https://github.com/constraint-systems/pal",
    style: {
      color: fg
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1698735566", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702
    },
    __self: this
  }, "on github"), ".")))) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1698735566",
    dynamic: [fs, lh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/IBMPlexSans-Regular.woff2') format('woff2'), url('/IBMPlexSans-Regular.woff') format('woff');}@font-face{font-family:'customono';src:url('/IBMPlexMono-Regular.woff2') format('woff2'), url('/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:'customono',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";}body{margin:0;padding:0;overflow:hidden;}canvas{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3NpdGVzL2NvbnN0cmFpbnQtc3lzdGVtcy9wYWwvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMnNCeUIsQUFHZ0MsQUFLRyxBQUtGLEFBR2MsQUFLM0IsQUFLSyxTQUpKLEtBS1osS0FKa0IsRUFsQmlDLENBU25ELEVBSm1ELFdBT1IsQUFPM0MseUNBTjJDLHlDQUMzQyxPQWJBLEdBS0EiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvc2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL3BhbC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHRoZW1lcyB9IGZyb20gJy4uL3MvdGhlbWVfbWluLmpzJ1xuaW1wb3J0IHsgZnJhZ21lbnRfc2hhZGVyLCB2ZXJ0ZXhfc2hhZGVyIH0gZnJvbSAnLi4vc2hhZGVycy9zaGFkZXJzLmpzJ1xuaW1wb3J0ICogYXMgY2hyb21hIGZyb20gJ2Nocm9tYS1qcydcblxubGV0IGZzID0gMTVcbmxldCBsaCA9IDEuNVxubGV0IHJsaCA9IGZzICogbGhcblxubGV0IHRoZW1lX25hbWVzID0gdGhlbWVzLm1hcCh0ID0+IHQubmFtZSlcblxubGV0IEtleWNhcCA9ICh7IGssIGZnLCBiZywgY2xpY2tLZXksIGlubGluZSA9IGZhbHNlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBzdHlsZT17e1xuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgIE1velVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgYmFja2dyb3VuZDogZmcsXG4gICAgICAgIGNvbG9yOiBiZyxcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUgPyAnaW5saW5lJyA6ICdibG9jaycsXG4gICAgICAgIGZvbnQ6ICdpbmhlcmlyJyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICAgICAgcGFkZGluZ1RvcDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgfX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgY2xpY2tLZXkoaylcbiAgICAgIH19XG4gICAgPlxuICAgICAge2t9XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuY29uc29sZS5sb2coJ2tleXMgdXNlZDonLCAnYXNkZmhsb3c/eCcpXG5cbmNvbnN0IEhvbWUgPSAoeyBwaWNrX3NlcnZlIH0pID0+IHtcbiAgbGV0IFtwaWNrLCBzZXRQaWNrXSA9IHVzZVN0YXRlKDApXG4gIGxldCBbaHVlX3NoaWZ0LCBzZXRIdWVTaGlmdF0gPSB1c2VTdGF0ZSgwKVxuICBsZXQga2V5bWFwX3JlZiA9IHVzZVJlZih7fSlcbiAgbGV0IGNfaG9sZGVyX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcHJvZ3JhbV9yZWYgPSB1c2VSZWYoe30pXG4gIGxldCBjb250YWluZXJfcmVmID0gdXNlUmVmKHt9KVxuICBsZXQgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGxldCBbbHRocmVzaCwgc2V0THRocmVzaF0gPSB1c2VTdGF0ZSgwLjIpXG4gIGxldCBbaHRocmVzaCwgc2V0SHRocmVzaF0gPSB1c2VTdGF0ZSgwLjgpXG4gIGxldCBbc2hvd19pbmZvLCBzZXRTaG93SW5mb10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGZ1bmN0aW9uIGNsaWNrS2V5KGtleSkge1xuICAgIGxldCBrbSA9IGtleW1hcF9yZWYuY3VycmVudFxuICAgIGttW2tleV0gPSB0cnVlXG4gICAga2V5QWN0aW9uKHsga2V5IH0sIGZhbHNlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAga21ba2V5XSA9IGZhbHNlXG4gICAgfSwgMClcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRJbWFnZShzcmMsIGZpcnN0X2xvYWQgPSBmYWxzZSkge1xuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzZXRMb2FkKHRydWUpXG5cbiAgICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGggLSAxOCAqIDJcbiAgICAgIGxldCBoID0gd2luZG93LmlubmVySGVpZ2h0IC0gcmxoXG5cbiAgICAgIGxldCBpdyA9IGltZy53aWR0aFxuICAgICAgbGV0IGloID0gaW1nLmhlaWdodFxuXG4gICAgICBsZXQgd2EgPSB3IC8gaFxuICAgICAgbGV0IGlhID0gaXcgLyBpaFxuXG4gICAgICBsZXQgcmVzaXplX2NoZWNrID0gZmFsc2VcbiAgICAgIGxldCBydywgcmhcbiAgICAgIGlmIChpYSA+PSB3YSkge1xuICAgICAgICBpZiAoaXcgPiB3KSB7XG4gICAgICAgICAgcmVzaXplX2NoZWNrID0gdHJ1ZVxuICAgICAgICAgIHJ3ID0gd1xuICAgICAgICAgIHJoID0gTWF0aC5yb3VuZCh3IC8gaWEpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpaCA+IGgpIHtcbiAgICAgICAgICByZXNpemVfY2hlY2sgPSB0cnVlXG4gICAgICAgICAgcmggPSBoXG4gICAgICAgICAgcncgPSBNYXRoLnJvdW5kKGggKiBpYSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzaXplX2NoZWNrKSB7XG4gICAgICAgIGxldCBjb25maXJtX2NoZWNrID0gdHJ1ZVxuICAgICAgICBpZiAoIWZpcnN0X2xvYWQpIHtcbiAgICAgICAgICBjb25maXJtX2NoZWNrID0gY29uZmlybShcbiAgICAgICAgICAgIGBUaGUgaW1hZ2UgeW91IHNlbGVjdGVkIGlzIGxhcmdlciAoJHtpd314JHtpaH0pIHRoYW4gdGhlIGJyb3dzZXIgd2luZG93LiAgUmVzaXplIGl0IHRvIGZpdCAoJHtyd314JHtyaH0pPyBDaG9vc2UgY2FuY2VsIHRvIGltcG9ydCBpdCBhdCBmdWxsIHNpemUuYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlybV9jaGVjaykge1xuICAgICAgICAgIGltZy53aWR0aCA9IHJ3XG4gICAgICAgICAgaW1nLmhlaWdodCA9IHJoXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGNfaG9sZGVyID0gY19ob2xkZXJfcmVmLmN1cnJlbnRcbiAgICAgIGNfaG9sZGVyLmlubmVySFRNTCA9ICcnXG5cbiAgICAgIGNvbnRhaW5lcl9yZWYuY3VycmVudC5zdHlsZS5taW5XaWR0aCA9IGltZy53aWR0aCArIDE4ICsgJ3B4J1xuXG4gICAgICBsZXQgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICBjLndpZHRoID0gaW1nLndpZHRoXG4gICAgICBjLmhlaWdodCA9IGltZy5oZWlnaHRcbiAgICAgIGNfaG9sZGVyLmFwcGVuZENoaWxkKGMpXG5cbiAgICAgIGxldCBjdHggPSBjLmdldENvbnRleHQoJ3dlYmdsJywgeyBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUgfSlcblxuICAgICAgZnVuY3Rpb24gY29tcGlsZVNoYWRlcihzaGFkZXJTb3VyY2UsIHNoYWRlclR5cGUpIHtcbiAgICAgICAgbGV0IHNoYWRlciA9IGN0eC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSlcbiAgICAgICAgY3R4LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSlcbiAgICAgICAgY3R4LmNvbXBpbGVTaGFkZXIoc2hhZGVyKVxuICAgICAgICByZXR1cm4gc2hhZGVyXG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9ncmFtID0gY3R4LmNyZWF0ZVByb2dyYW0oKVxuICAgICAgcHJvZ3JhbV9yZWYuY3VycmVudCA9IHByb2dyYW1cbiAgICAgIGN0eC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgY29tcGlsZVNoYWRlcih2ZXJ0ZXhfc2hhZGVyLCBjdHguVkVSVEVYX1NIQURFUikpXG4gICAgICBjdHguYXR0YWNoU2hhZGVyKFxuICAgICAgICBwcm9ncmFtLFxuICAgICAgICBjb21waWxlU2hhZGVyKGZyYWdtZW50X3NoYWRlciwgY3R4LkZSQUdNRU5UX1NIQURFUilcbiAgICAgIClcbiAgICAgIGN0eC5saW5rUHJvZ3JhbShwcm9ncmFtKVxuICAgICAgY3R4LnVzZVByb2dyYW0ocHJvZ3JhbSlcblxuICAgICAgbGV0IHRocmVzaF9sb2NhdGlvbiA9IGN0eC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfdGhyZXNoJylcbiAgICAgIGN0eC51bmlmb3JtMmYodGhyZXNoX2xvY2F0aW9uLCBsdGhyZXNoLCBodGhyZXNoKVxuXG4gICAgICBsZXQgcGFsZXR0ZV9sb2NhdGlvbiA9IGN0eC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfcGFsZXR0ZScpXG4gICAgICBsZXQgcGlja2VkID0gdGhlbWVzW3BpY2tdXG4gICAgICBsZXQgaHVlcyA9IHBpY2tlZC5odWVzLm1hcChrID0+XG4gICAgICAgIGNocm9tYShrKVxuICAgICAgICAgIC5nbCgpXG4gICAgICAgICAgLnNsaWNlKDAsIDMpXG4gICAgICApXG4gICAgICBsZXQgYXJyYW5nZWQgPSBbXG4gICAgICAgIGNocm9tYShwaWNrZWQuYmcpXG4gICAgICAgICAgLmdsKClcbiAgICAgICAgICAuc2xpY2UoMCwgMyksXG4gICAgICAgIGNocm9tYShwaWNrZWQuZmcpXG4gICAgICAgICAgLmdsKClcbiAgICAgICAgICAuc2xpY2UoMCwgMyksXG4gICAgICAgIC4uLmh1ZXMsXG4gICAgICBdXG5cbiAgICAgIGN0eC51bmlmb3JtM2Z2KHBhbGV0dGVfbG9jYXRpb24sIG5ldyBGbG9hdDMyQXJyYXkoYXJyYW5nZWQuZmxhdCgpKSlcblxuICAgICAgbGV0IHJlc29sdXRpb25fbG9jYXRpb24gPSBjdHguZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1X3Jlc29sdXRpb24nKVxuICAgICAgY3R4LnVuaWZvcm0yZihyZXNvbHV0aW9uX2xvY2F0aW9uLCBjLndpZHRoLCBjLmhlaWdodClcblxuICAgICAgbGV0IHBvc2l0aW9uX2xvY2F0aW9uID0gY3R4LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhX3Bvc2l0aW9uJylcbiAgICAgIGxldCBidWZmZXIgPSBjdHguY3JlYXRlQnVmZmVyKClcbiAgICAgIGN0eC5iaW5kQnVmZmVyKGN0eC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcilcbiAgICAgIGN0eC5idWZmZXJEYXRhKFxuICAgICAgICBjdHguQVJSQVlfQlVGRkVSLFxuICAgICAgICBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaW1nLndpZHRoLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBpbWcuaGVpZ2h0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaW1nLmhlaWdodCxcbiAgICAgICAgICBpbWcud2lkdGgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBpbWcud2lkdGgsXG4gICAgICAgICAgaW1nLmhlaWdodCxcbiAgICAgICAgXSksXG4gICAgICAgIGN0eC5TVEFUSUNfRFJBV1xuICAgICAgKVxuICAgICAgY3R4LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uX2xvY2F0aW9uKVxuICAgICAgY3R4LnZlcnRleEF0dHJpYlBvaW50ZXIocG9zaXRpb25fbG9jYXRpb24sIDIsIGN0eC5GTE9BVCwgZmFsc2UsIDAsIDApXG5cbiAgICAgIGxldCB0ZXhfY29vcmRfbG9jYXRpb24gPSBjdHguZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FfdGV4Q29vcmQnKVxuICAgICAgbGV0IHRleF9jb29yZF9idWZmZXIgPSBjdHguY3JlYXRlQnVmZmVyKClcbiAgICAgIGN0eC5iaW5kQnVmZmVyKGN0eC5BUlJBWV9CVUZGRVIsIHRleF9jb29yZF9idWZmZXIpXG4gICAgICBjdHguYnVmZmVyRGF0YShcbiAgICAgICAgY3R4LkFSUkFZX0JVRkZFUixcbiAgICAgICAgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgICAgMC4wLFxuICAgICAgICAgIDAuMCxcbiAgICAgICAgICAxLjAsXG4gICAgICAgICAgMC4wLFxuICAgICAgICAgIDAuMCxcbiAgICAgICAgICAxLjAsXG4gICAgICAgICAgMC4wLFxuICAgICAgICAgIDEuMCxcbiAgICAgICAgICAxLjAsXG4gICAgICAgICAgMC4wLFxuICAgICAgICAgIDEuMCxcbiAgICAgICAgICAxLjAsXG4gICAgICAgIF0pLFxuICAgICAgICBjdHguU1RBVElDX0RSQVdcbiAgICAgIClcbiAgICAgIGN0eC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0ZXhfY29vcmRfbG9jYXRpb24pXG4gICAgICBjdHgudmVydGV4QXR0cmliUG9pbnRlcih0ZXhfY29vcmRfbG9jYXRpb24sIDIsIGN0eC5GTE9BVCwgZmFsc2UsIDAsIDApXG5cbiAgICAgIGxldCB0ZXh0dXJlID0gY3R4LmNyZWF0ZVRleHR1cmUoKVxuICAgICAgY3R4LmJpbmRUZXh0dXJlKGN0eC5URVhUVVJFXzJELCB0ZXh0dXJlKVxuICAgICAgY3R4LmJpbmRUZXh0dXJlKGN0eC5URVhUVVJFXzJELCB0ZXh0dXJlKVxuXG4gICAgICBjdHgudGV4UGFyYW1ldGVyaShjdHguVEVYVFVSRV8yRCwgY3R4LlRFWFRVUkVfV1JBUF9TLCBjdHguQ0xBTVBfVE9fRURHRSlcbiAgICAgIGN0eC50ZXhQYXJhbWV0ZXJpKGN0eC5URVhUVVJFXzJELCBjdHguVEVYVFVSRV9XUkFQX1QsIGN0eC5DTEFNUF9UT19FREdFKVxuICAgICAgY3R4LnRleFBhcmFtZXRlcmkoY3R4LlRFWFRVUkVfMkQsIGN0eC5URVhUVVJFX01JTl9GSUxURVIsIGN0eC5ORUFSRVNUKVxuICAgICAgY3R4LnRleFBhcmFtZXRlcmkoY3R4LlRFWFRVUkVfMkQsIGN0eC5URVhUVVJFX01BR19GSUxURVIsIGN0eC5ORUFSRVNUKVxuICAgICAgY3R4LnRleEltYWdlMkQoXG4gICAgICAgIGN0eC5URVhUVVJFXzJELFxuICAgICAgICAwLFxuICAgICAgICBjdHguUkdCQSxcbiAgICAgICAgY3R4LlJHQkEsXG4gICAgICAgIGN0eC5VTlNJR05FRF9CWVRFLFxuICAgICAgICBpbWdcbiAgICAgIClcblxuICAgICAgY3R4LmRyYXdBcnJheXMoY3R4LlRSSUFOR0xFUywgMCwgNilcbiAgICB9XG4gICAgaW1nLnNyYyA9IHNyY1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0SW1hZ2UoJ3NjcnVnZ3MuanBnJywgdHJ1ZSlcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gc2VsZWN0VGhlbWUobmFtZSkge1xuICAgIGxldCBpbmRleCA9IHRoZW1lX25hbWVzLmluZGV4T2YobmFtZSlcbiAgICBzZXRQaWNrKGluZGV4KVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGUpIHtcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKVxuICAgIGxldCByZXBlYXQgPSBlLnJlcGVhdFxuICAgIGxldCBrZXltYXAgPSBrZXltYXBfcmVmLmN1cnJlbnRcbiAgICBpZiAoa2V5ID09PSAnbycgJiYgIXJlcGVhdCkge1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKVxuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaXRlbSlcbiAgICAgICAgICBpbml0SW1hZ2Uoc3JjKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuICAgICAgfVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuICAgIH1cbiAgICBpZiAoa2V5ID09PSAndycgJiYgIXJlcGVhdCkge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICAgICAgdmFyIHJldm9rZVVSTCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKG1lLmhyZWYpXG4gICAgICAgICAgbWUuaHJlZiA9IG51bGxcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHJldm9rZVVSTClcbiAgICAgIH1cblxuICAgICAgY19ob2xkZXJfcmVmLmN1cnJlbnQuY2hpbGROb2Rlc1swXS50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnZG93bmxvYWQnLFxuICAgICAgICAgIGBwYWwtJHt0aGVtZXNbcGlja10ubmFtZVxuICAgICAgICAgICAgLnJlcGxhY2UoJyAnLCAnXycpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKX0tbCR7bHRocmVzaFxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC5yZXBsYWNlKCcwLicsICcnKX0taCR7aHRocmVzaFxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC5yZXBsYWNlKCcwLicsICcnKX0tcyR7aHVlX3NoaWZ0fS0ke25ldyBEYXRlKClcbiAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAuc2xpY2UoMCwgLTQpXG4gICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC86L2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKX1aLnBuZ2BcbiAgICAgICAgKVxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXZva2VVUkwpXG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoa2V5ID09PSAneCcpIHtcbiAgICAgIHNldFNob3dJbmZvKGZhbHNlKVxuICAgIH1cbiAgICBpZiAoa2V5ID09PSAnPycpIHtcbiAgICAgIHNldFNob3dJbmZvKHByZXYgPT4gIXByZXYpXG4gICAgfVxuXG4gICAgaWYgKGtleW1hcFsnaiddKSB7XG4gICAgICBzZXRQaWNrKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIGxldCBuc3RhdGUgPSBwcmV2U3RhdGUgKyAxXG4gICAgICAgIGlmIChuc3RhdGUgPT09IHRoZW1lcy5sZW5ndGgpIG5zdGF0ZSA9IDBcbiAgICAgICAgcmV0dXJuIG5zdGF0ZVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGtleW1hcFsnayddKSB7XG4gICAgICBzZXRQaWNrKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIGxldCBuc3RhdGUgPSBwcmV2U3RhdGUgLSAxXG4gICAgICAgIGlmIChuc3RhdGUgPCAwKSBuc3RhdGUgPSB0aGVtZXMubGVuZ3RoIC0gMVxuICAgICAgICByZXR1cm4gbnN0YXRlXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoa2V5bWFwWydoJ10pIHtcbiAgICAgIHNldEh1ZVNoaWZ0KHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIGxldCBuID0gcHJldlN0YXRlIC0gMVxuICAgICAgICBpZiAobiA8IDApIG4gPSB0aGVtZXNbMF0uaHVlcy5sZW5ndGggLSAxXG4gICAgICAgIHJldHVybiBuXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoa2V5bWFwWydsJ10pIHtcbiAgICAgIHNldEh1ZVNoaWZ0KHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiAocHJldlN0YXRlICsgMSkgJSB0aGVtZXNbMF0uaHVlcy5sZW5ndGhcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChrZXltYXBbJ2EnXSkge1xuICAgICAgc2V0THRocmVzaChwcmV2U3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgcHJldlN0YXRlIC0gMC4wMTI1KVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGtleW1hcFsncyddKSB7XG4gICAgICBzZXRMdGhyZXNoKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihodGhyZXNoLCBwcmV2U3RhdGUgKyAwLjAxMjUpXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoa2V5bWFwWydkJ10pIHtcbiAgICAgIHNldEh0aHJlc2gocHJldlN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KGx0aHJlc2gsIHByZXZTdGF0ZSAtIDAuMDEyNSlcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChrZXltYXBbJ2YnXSkge1xuICAgICAgc2V0SHRocmVzaChwcmV2U3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oMSwgcHJldlN0YXRlICsgMC4wMTI1KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2FkKSB7XG4gICAgICBsZXQgYyA9IGNfaG9sZGVyX3JlZi5jdXJyZW50LmNoaWxkTm9kZXNbMF1cbiAgICAgIGxldCBjdHggPSBjLmdldENvbnRleHQoJ3dlYmdsJywgeyBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUgfSlcbiAgICAgIGxldCBwcm9ncmFtID0gcHJvZ3JhbV9yZWYuY3VycmVudFxuXG4gICAgICBsZXQgdGhyZXNoX2xvY2F0aW9uID0gY3R4LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndV90aHJlc2gnKVxuICAgICAgY3R4LnVuaWZvcm0yZih0aHJlc2hfbG9jYXRpb24sIGx0aHJlc2gsIGh0aHJlc2gpXG5cbiAgICAgIGxldCBwaWNrZWQgPSB0aGVtZXNbcGlja11cbiAgICAgIGxldCBodWVzID0gcGlja2VkLmh1ZXMubWFwKGsgPT5cbiAgICAgICAgY2hyb21hKGspXG4gICAgICAgICAgLmdsKClcbiAgICAgICAgICAuc2xpY2UoMCwgMylcbiAgICAgIClcblxuICAgICAgbGV0IGh1ZXNfYSA9IGh1ZXMuc2xpY2UoMCwgaHVlX3NoaWZ0KVxuICAgICAgbGV0IGh1ZXNfYiA9IGh1ZXMuc2xpY2UoaHVlX3NoaWZ0KVxuICAgICAgbGV0IGFycmFuZ2VkID0gW1xuICAgICAgICBjaHJvbWEocGlja2VkLmJnKVxuICAgICAgICAgIC5nbCgpXG4gICAgICAgICAgLnNsaWNlKDAsIDMpLFxuICAgICAgICBjaHJvbWEocGlja2VkLmZnKVxuICAgICAgICAgIC5nbCgpXG4gICAgICAgICAgLnNsaWNlKDAsIDMpLFxuICAgICAgICAuLi5odWVzX2IsXG4gICAgICAgIC4uLmh1ZXNfYSxcbiAgICAgIF1cblxuICAgICAgbGV0IHBhbGV0dGVfbG9jYXRpb24gPSBjdHguZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1X3BhbGV0dGUnKVxuICAgICAgY3R4LnVuaWZvcm0zZnYocGFsZXR0ZV9sb2NhdGlvbiwgbmV3IEZsb2F0MzJBcnJheShhcnJhbmdlZC5mbGF0KCkpKVxuXG4gICAgICBjdHguZHJhd0FycmF5cyhjdHguVFJJQU5HTEVTLCAwLCA2KVxuICAgIH1cbiAgfSwgW2x0aHJlc2gsIGh0aHJlc2gsIHBpY2ssIGh1ZV9zaGlmdF0pXG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGxldCBrZXkgPSBlLmtleS50b0xvd2VyQ2FzZSgpXG4gICAga2V5bWFwX3JlZi5jdXJyZW50W2tleV0gPSB0cnVlXG4gICAga2V5QWN0aW9uKGUpXG4gIH1cblxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGxldCBrZXkgPSBlLmtleS50b0xvd2VyQ2FzZSgpXG4gICAga2V5bWFwX3JlZi5jdXJyZW50W2tleV0gPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gb25QYXN0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBlLmNsaXBib2FyZERhdGEuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGxldCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKVxuICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICAgIGluaXRJbWFnZShzcmMpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5J1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgbGV0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXVxuICAgIGxldCBmaWxlbmFtZSA9IGZpbGUucGF0aCA/IGZpbGUucGF0aCA6IGZpbGUubmFtZSA/IGZpbGUubmFtZSA6ICcnXG4gICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICBpbml0SW1hZ2Uoc3JjKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlLCBmYWxzZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKVxuICAgIH1cbiAgfSwgW2x0aHJlc2gsIGh0aHJlc2gsIHBpY2tdKVxuXG4gIGxldCBwaWNrZWQgPSB0aGVtZXNbcGlja11cbiAgbGV0IGZnID0gcGlja2VkLmZnXG4gIGxldCBiZyA9IHBpY2tlZC5iZ1xuICBsZXQgc29ydGVkID0gWy4uLnRoZW1lcy5zbGljZShwaWNrKSwgLi4udGhlbWVzLnNsaWNlKDAsIHBpY2spXVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBhbDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2NvbnRhaW5lcl9yZWZ9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgYmFja2dyb3VuZDogYmcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIG91dGxpbmU6IGBzb2xpZCAxcHggJHtmZ31gLFxuICAgICAgICAgICAgY29sb3I6IGZnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzFjaCcsIG1hcmdpblJpZ2h0OiAnMWNoJyB9fT5cbiAgICAgICAgICAgICAgPGRpdj5QYWw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblJpZ2h0OiAnMWNoJyB9fT5cbiAgICAgICAgICAgICAgPEtleWNhcCBrPXsnbyd9IGZnPXtmZ30gYmc9e2JnfSBjbGlja0tleT17Y2xpY2tLZXl9IC8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuNWNoJyB9fT5vcGVuIGZpbGU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblJpZ2h0OiAnMWNoJyB9fT5cbiAgICAgICAgICAgICAgPEtleWNhcCBrPXsndyd9IGZnPXtmZ30gYmc9e2JnfSBjbGlja0tleT17Y2xpY2tLZXl9IC8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuNWNoJyB9fT5zYXZlIHBuZzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgPEtleWNhcCBrPXsnPyd9IGZnPXtmZ30gYmc9e2JnfSBjbGlja0tleT17Y2xpY2tLZXl9IC8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuNWNoJyB9fT5zaG93IGluZm88L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogcmxoIC8gNCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyOiBgc29saWQgMXB4ICR7Zmd9YCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmVmPXtjX2hvbGRlcl9yZWZ9XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGNvbG9yOiBmZyxcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogcmxoIC8gNCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzJjaCcgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+bG90aHJlc2g8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBvdXRsaW5lOiBgc29saWQgMXB4ICR7Zmd9YCB9fT5cbiAgICAgICAgICAgICAgPEtleWNhcCBrPXsnYSd9IGZnPXtmZ30gYmc9e2JnfSBjbGlja0tleT17Y2xpY2tLZXl9IC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsdGhyZXNoLnRvRml4ZWQoNCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8S2V5Y2FwIGs9eydzJ30gZmc9e2ZnfSBiZz17Ymd9IGNsaWNrS2V5PXtjbGlja0tleX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcyY2gnIH19PlxuICAgICAgICAgICAgPGRpdj5oaXRocmVzaDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG91dGxpbmU6IGBzb2xpZCAxcHggJHtmZ31gIH19PlxuICAgICAgICAgICAgICA8S2V5Y2FwIGs9eydkJ30gZmc9e2ZnfSBiZz17Ymd9IGNsaWNrS2V5PXtjbGlja0tleX0gLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2h0aHJlc2gudG9GaXhlZCg0KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxLZXljYXAgaz17J2YnfSBmZz17Zmd9IGJnPXtiZ30gY2xpY2tLZXk9e2NsaWNrS2V5fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+c2h1ZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG91dGxpbmU6IGBzb2xpZCAxcHggJHtmZ31gIH19PlxuICAgICAgICAgICAgICA8S2V5Y2FwIGs9eydoJ30gZmc9e2ZnfSBiZz17Ymd9IGNsaWNrS2V5PXtjbGlja0tleX0gLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2h1ZV9zaGlmdH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxLZXljYXAgaz17J2wnfSBmZz17Zmd9IGJnPXtiZ30gY2xpY2tLZXk9e2NsaWNrS2V5fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGggLyAyLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBmZyB9fT50aGVtZTwvZGl2PlxuICAgICAgICAgIHtzb3J0ZWQubWFwKCh0LCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17dC5uYW1lfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogZmcsXG4gICAgICAgICAgICAgICAgb3V0bGluZTogaSA9PT0gMCA/IGBzb2xpZCAxcHggJHtmZ31gIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHpJbmRleDogaSA9PT0gMCA/IDIgOiAxLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMmNoJywgZGlzcGxheTogJ2ZsZXgnIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0VGhlbWUodC5uYW1lKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiB0LmJnLCB3aWR0aDogJzJjaCcsIGhlaWdodDogJzEuNXJlbScgfX1cbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogdC5mZywgd2lkdGg6ICcyY2gnLCBoZWlnaHQ6ICcxLjVyZW0nIH19XG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgIHt0Lmh1ZXMubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2t9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGssIHdpZHRoOiAnMmNoJywgaGVpZ2h0OiAnMS41cmVtJyB9fVxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGkgPT09IDAgJiYgZmFsc2UgPyB0LmZnIDogdC5iZyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGkgPT09IDAgJiYgZmFsc2UgPyB0LmJnIDogdC5mZyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzAuNWNoJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFRoZW1lKHQubmFtZSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QubmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtpID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAgPEtleWNhcCBrPXsnaid9IGZnPXtmZ30gYmc9e2JnfSBjbGlja0tleT17Y2xpY2tLZXl9IC8+XG4gICAgICAgICAgICAgICAgICA8S2V5Y2FwIGs9eydrJ30gZmc9e2ZnfSBiZz17Ymd9IGNsaWNrS2V5PXtjbGlja0tleX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3Nob3dfaW5mbyA/IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgekluZGV4OiA0LFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdUb3A6IHJsaCAqIDIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTaG93SW5mbyhmYWxzZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBmZyxcbiAgICAgICAgICAgICAgICBib3JkZXI6IGBzb2xpZCAxcHggJHtmZ31gLFxuICAgICAgICAgICAgICAgIGJvcmRlclRvcDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNjBjaCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG91dGxpbmU6IGBzb2xpZCAxcHggJHtmZ31gLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5JbmZvPC9kaXY+XG4gICAgICAgICAgICAgICAgPEtleWNhcCBrPXsneCd9IGZnPXtmZ30gYmc9e2JnfSBjbGlja0tleT17Y2xpY2tLZXl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBybGggLyAyLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogcmxoIC8gMixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCB9fT5cbiAgICAgICAgICAgICAgICAgIFBhbCBsZXQncyB5b3UgYXBwbHkgYW4gZWlnaHQtY29sb3IgdGVybWluYWwgY29sb3IgcGFsZXR0ZSB0b1xuICAgICAgICAgICAgICAgICAgYW4gaW1hZ2UuIFVzZSB0aGUga2V5Ym9hcmQgY29udHJvbHMgdG8gY2hvb3NlIGEgdGhlbWUsIHNldFxuICAgICAgICAgICAgICAgICAgdGhyZXNob2xkcywgYW5kIGN5Y2xlIGh1ZXMuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHJsaCB9fT5cbiAgICAgICAgICAgICAgICAgIFlvdSBjYW4gbG9hZCB5b3VyIG93biBpbWFnZSBieSBwcmVzc2luZ3snICd9XG4gICAgICAgICAgICAgICAgICA8S2V5Y2FwXG4gICAgICAgICAgICAgICAgICAgIGs9eydvJ31cbiAgICAgICAgICAgICAgICAgICAgZmc9e2ZnfVxuICAgICAgICAgICAgICAgICAgICBiZz17Ymd9XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrS2V5PXtjbGlja0tleX1cbiAgICAgICAgICAgICAgICAgICAgaW5saW5lPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICwgcGFzdGluZywgb3IgZHJhZ2dpbmcgYW5kIGRyb3BwaW5nLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IGhvdyBpdCB3b3JrcyBhbmQgdmlldyB0aGUgY29kZXsnICd9XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvbnN0cmFpbnQtc3lzdGVtcy9wYWxcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogZmcgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgb24gZ2l0aHViXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL0lCTVBsZXhTYW5zLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9JQk1QbGV4U2Fucy1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbW9ubyc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbW9ubycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAke2ZzfXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2xofTtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/home/grant/sites/constraint-systems/pal/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0ed5bb2686ebb7c8a517.hot-update.js.map