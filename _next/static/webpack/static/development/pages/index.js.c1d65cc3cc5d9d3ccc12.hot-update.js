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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }, "Pal"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: this
  }, "save png")), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginRight: '2ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }, __jsx("div", {
    style: {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: this
  }, __jsx("div", {
    style: {
      color: fg
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 610
      },
      __self: this
    }, t.name)), i === 0 ? __jsx("div", {
      style: {
        display: 'flex'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: rlh
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, "Pal let's you apply an eight-color terminal color palette to an image. Use the keyboard controls to choose a theme, set thresholds, and cycle hues."), __jsx("div", {
    style: {
      marginBottom: rlh
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2892652615", [fs, lh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702
    },
    __self: this
  }, "on github"), ".")))) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2892652615",
    dynamic: [fs, lh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/IBMPlexSans-Regular.woff2') format('woff2'), url('/IBMPlexSans-Regular.woff') format('woff');}@font-face{font-family:'customono';src:url('/IBMPlexMono-Regular.woff2') format('woff2'), url('/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:'customono',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";}body{margin:0;padding:0;}canvas{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3NpdGVzL2NvbnN0cmFpbnQtc3lzdGVtcy9wYWwvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMnNCeUIsQUFHZ0MsQUFLRyxBQUtGLEFBR2MsQUFLM0IsQUFJSyxTQUhKLEtBSVosS0FIQSxFQWxCbUQsQ0FTbkQsRUFKbUQsV0FPUix5Q0FDQSx5Q0FDM0MsT0FiQSxHQUtBIiwiZmlsZSI6Ii9ob21lL2dyYW50L3NpdGVzL2NvbnN0cmFpbnQtc3lzdGVtcy9wYWwvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB0aGVtZXMgfSBmcm9tICcuLi9zL3RoZW1lX21pbi5qcydcbmltcG9ydCB7IGZyYWdtZW50X3NoYWRlciwgdmVydGV4X3NoYWRlciB9IGZyb20gJy4uL3NoYWRlcnMvc2hhZGVycy5qcydcbmltcG9ydCAqIGFzIGNocm9tYSBmcm9tICdjaHJvbWEtanMnXG5cbmxldCBmcyA9IDE1XG5sZXQgbGggPSAxLjVcbmxldCBybGggPSBmcyAqIGxoXG5cbmxldCB0aGVtZV9uYW1lcyA9IHRoZW1lcy5tYXAodCA9PiB0Lm5hbWUpXG5cbmxldCBLZXljYXAgPSAoeyBrLCBmZywgYmcsIGNsaWNrS2V5LCBpbmxpbmUgPSBmYWxzZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICBNb3pVc2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgIGJhY2tncm91bmQ6IGZnLFxuICAgICAgICBjb2xvcjogYmcsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICAgICAgZGlzcGxheTogaW5saW5lID8gJ2lubGluZScgOiAnYmxvY2snLFxuICAgICAgICBmb250OiAnaW5oZXJpcicsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgIH19XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGNsaWNrS2V5KGspXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtrfVxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnNvbGUubG9nKCdrZXlzIHVzZWQ6JywgJ2FzZGZobG93P3gnKVxuXG5jb25zdCBIb21lID0gKHsgcGlja19zZXJ2ZSB9KSA9PiB7XG4gIGxldCBbcGljaywgc2V0UGlja10gPSB1c2VTdGF0ZSgwKVxuICBsZXQgW2h1ZV9zaGlmdCwgc2V0SHVlU2hpZnRdID0gdXNlU3RhdGUoMClcbiAgbGV0IGtleW1hcF9yZWYgPSB1c2VSZWYoe30pXG4gIGxldCBjX2hvbGRlcl9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHByb2dyYW1fcmVmID0gdXNlUmVmKHt9KVxuICBsZXQgY29udGFpbmVyX3JlZiA9IHVzZVJlZih7fSlcbiAgbGV0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBsZXQgW2x0aHJlc2gsIHNldEx0aHJlc2hdID0gdXNlU3RhdGUoMC4yKVxuICBsZXQgW2h0aHJlc2gsIHNldEh0aHJlc2hdID0gdXNlU3RhdGUoMC44KVxuICBsZXQgW3Nob3dfaW5mbywgc2V0U2hvd0luZm9dID0gdXNlU3RhdGUodHJ1ZSlcblxuICBmdW5jdGlvbiBjbGlja0tleShrZXkpIHtcbiAgICBsZXQga20gPSBrZXltYXBfcmVmLmN1cnJlbnRcbiAgICBrbVtrZXldID0gdHJ1ZVxuICAgIGtleUFjdGlvbih7IGtleSB9LCBmYWxzZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGttW2tleV0gPSBmYWxzZVxuICAgIH0sIDApXG4gIH1cblxuICBmdW5jdGlvbiBpbml0SW1hZ2Uoc3JjLCBmaXJzdF9sb2FkID0gZmFsc2UpIHtcbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKClcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgc2V0TG9hZCh0cnVlKVxuXG4gICAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTggKiAyXG4gICAgICBsZXQgaCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHJsaFxuXG4gICAgICBsZXQgaXcgPSBpbWcud2lkdGhcbiAgICAgIGxldCBpaCA9IGltZy5oZWlnaHRcblxuICAgICAgbGV0IHdhID0gdyAvIGhcbiAgICAgIGxldCBpYSA9IGl3IC8gaWhcblxuICAgICAgbGV0IHJlc2l6ZV9jaGVjayA9IGZhbHNlXG4gICAgICBsZXQgcncsIHJoXG4gICAgICBpZiAoaWEgPj0gd2EpIHtcbiAgICAgICAgaWYgKGl3ID4gdykge1xuICAgICAgICAgIHJlc2l6ZV9jaGVjayA9IHRydWVcbiAgICAgICAgICBydyA9IHdcbiAgICAgICAgICByaCA9IE1hdGgucm91bmQodyAvIGlhKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaWggPiBoKSB7XG4gICAgICAgICAgcmVzaXplX2NoZWNrID0gdHJ1ZVxuICAgICAgICAgIHJoID0gaFxuICAgICAgICAgIHJ3ID0gTWF0aC5yb3VuZChoICogaWEpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJlc2l6ZV9jaGVjaykge1xuICAgICAgICBsZXQgY29uZmlybV9jaGVjayA9IHRydWVcbiAgICAgICAgaWYgKCFmaXJzdF9sb2FkKSB7XG4gICAgICAgICAgY29uZmlybV9jaGVjayA9IGNvbmZpcm0oXG4gICAgICAgICAgICBgVGhlIGltYWdlIHlvdSBzZWxlY3RlZCBpcyBsYXJnZXIgKCR7aXd9eCR7aWh9KSB0aGFuIHRoZSBicm93c2VyIHdpbmRvdy4gIFJlc2l6ZSBpdCB0byBmaXQgKCR7cnd9eCR7cmh9KT8gQ2hvb3NlIGNhbmNlbCB0byBpbXBvcnQgaXQgYXQgZnVsbCBzaXplLmBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpcm1fY2hlY2spIHtcbiAgICAgICAgICBpbWcud2lkdGggPSByd1xuICAgICAgICAgIGltZy5oZWlnaHQgPSByaFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBjX2hvbGRlciA9IGNfaG9sZGVyX3JlZi5jdXJyZW50XG4gICAgICBjX2hvbGRlci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICBjb250YWluZXJfcmVmLmN1cnJlbnQuc3R5bGUubWluV2lkdGggPSBpbWcud2lkdGggKyAxOCArICdweCdcblxuICAgICAgbGV0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgYy53aWR0aCA9IGltZy53aWR0aFxuICAgICAgYy5oZWlnaHQgPSBpbWcuaGVpZ2h0XG4gICAgICBjX2hvbGRlci5hcHBlbmRDaGlsZChjKVxuXG4gICAgICBsZXQgY3R4ID0gYy5nZXRDb250ZXh0KCd3ZWJnbCcsIHsgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlIH0pXG5cbiAgICAgIGZ1bmN0aW9uIGNvbXBpbGVTaGFkZXIoc2hhZGVyU291cmNlLCBzaGFkZXJUeXBlKSB7XG4gICAgICAgIGxldCBzaGFkZXIgPSBjdHguY3JlYXRlU2hhZGVyKHNoYWRlclR5cGUpXG4gICAgICAgIGN0eC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpXG4gICAgICAgIGN0eC5jb21waWxlU2hhZGVyKHNoYWRlcilcbiAgICAgICAgcmV0dXJuIHNoYWRlclxuICAgICAgfVxuXG4gICAgICBsZXQgcHJvZ3JhbSA9IGN0eC5jcmVhdGVQcm9ncmFtKClcbiAgICAgIHByb2dyYW1fcmVmLmN1cnJlbnQgPSBwcm9ncmFtXG4gICAgICBjdHguYXR0YWNoU2hhZGVyKHByb2dyYW0sIGNvbXBpbGVTaGFkZXIodmVydGV4X3NoYWRlciwgY3R4LlZFUlRFWF9TSEFERVIpKVxuICAgICAgY3R4LmF0dGFjaFNoYWRlcihcbiAgICAgICAgcHJvZ3JhbSxcbiAgICAgICAgY29tcGlsZVNoYWRlcihmcmFnbWVudF9zaGFkZXIsIGN0eC5GUkFHTUVOVF9TSEFERVIpXG4gICAgICApXG4gICAgICBjdHgubGlua1Byb2dyYW0ocHJvZ3JhbSlcbiAgICAgIGN0eC51c2VQcm9ncmFtKHByb2dyYW0pXG5cbiAgICAgIGxldCB0aHJlc2hfbG9jYXRpb24gPSBjdHguZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1X3RocmVzaCcpXG4gICAgICBjdHgudW5pZm9ybTJmKHRocmVzaF9sb2NhdGlvbiwgbHRocmVzaCwgaHRocmVzaClcblxuICAgICAgbGV0IHBhbGV0dGVfbG9jYXRpb24gPSBjdHguZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1X3BhbGV0dGUnKVxuICAgICAgbGV0IHBpY2tlZCA9IHRoZW1lc1twaWNrXVxuICAgICAgbGV0IGh1ZXMgPSBwaWNrZWQuaHVlcy5tYXAoayA9PlxuICAgICAgICBjaHJvbWEoaylcbiAgICAgICAgICAuZ2woKVxuICAgICAgICAgIC5zbGljZSgwLCAzKVxuICAgICAgKVxuICAgICAgbGV0IGFycmFuZ2VkID0gW1xuICAgICAgICBjaHJvbWEocGlja2VkLmJnKVxuICAgICAgICAgIC5nbCgpXG4gICAgICAgICAgLnNsaWNlKDAsIDMpLFxuICAgICAgICBjaHJvbWEocGlja2VkLmZnKVxuICAgICAgICAgIC5nbCgpXG4gICAgICAgICAgLnNsaWNlKDAsIDMpLFxuICAgICAgICAuLi5odWVzLFxuICAgICAgXVxuXG4gICAgICBjdHgudW5pZm9ybTNmdihwYWxldHRlX2xvY2F0aW9uLCBuZXcgRmxvYXQzMkFycmF5KGFycmFuZ2VkLmZsYXQoKSkpXG5cbiAgICAgIGxldCByZXNvbHV0aW9uX2xvY2F0aW9uID0gY3R4LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndV9yZXNvbHV0aW9uJylcbiAgICAgIGN0eC51bmlmb3JtMmYocmVzb2x1dGlvbl9sb2NhdGlvbiwgYy53aWR0aCwgYy5oZWlnaHQpXG5cbiAgICAgIGxldCBwb3NpdGlvbl9sb2NhdGlvbiA9IGN0eC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYV9wb3NpdGlvbicpXG4gICAgICBsZXQgYnVmZmVyID0gY3R4LmNyZWF0ZUJ1ZmZlcigpXG4gICAgICBjdHguYmluZEJ1ZmZlcihjdHguQVJSQVlfQlVGRkVSLCBidWZmZXIpXG4gICAgICBjdHguYnVmZmVyRGF0YShcbiAgICAgICAgY3R4LkFSUkFZX0JVRkZFUixcbiAgICAgICAgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGltZy53aWR0aCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaW1nLmhlaWdodCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGltZy5oZWlnaHQsXG4gICAgICAgICAgaW1nLndpZHRoLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaW1nLndpZHRoLFxuICAgICAgICAgIGltZy5oZWlnaHQsXG4gICAgICAgIF0pLFxuICAgICAgICBjdHguU1RBVElDX0RSQVdcbiAgICAgIClcbiAgICAgIGN0eC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NpdGlvbl9sb2NhdGlvbilcbiAgICAgIGN0eC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc2l0aW9uX2xvY2F0aW9uLCAyLCBjdHguRkxPQVQsIGZhbHNlLCAwLCAwKVxuXG4gICAgICBsZXQgdGV4X2Nvb3JkX2xvY2F0aW9uID0gY3R4LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhX3RleENvb3JkJylcbiAgICAgIGxldCB0ZXhfY29vcmRfYnVmZmVyID0gY3R4LmNyZWF0ZUJ1ZmZlcigpXG4gICAgICBjdHguYmluZEJ1ZmZlcihjdHguQVJSQVlfQlVGRkVSLCB0ZXhfY29vcmRfYnVmZmVyKVxuICAgICAgY3R4LmJ1ZmZlckRhdGEoXG4gICAgICAgIGN0eC5BUlJBWV9CVUZGRVIsXG4gICAgICAgIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgIDAuMCxcbiAgICAgICAgICAwLjAsXG4gICAgICAgICAgMS4wLFxuICAgICAgICAgIDAuMCxcbiAgICAgICAgICAwLjAsXG4gICAgICAgICAgMS4wLFxuICAgICAgICAgIDAuMCxcbiAgICAgICAgICAxLjAsXG4gICAgICAgICAgMS4wLFxuICAgICAgICAgIDAuMCxcbiAgICAgICAgICAxLjAsXG4gICAgICAgICAgMS4wLFxuICAgICAgICBdKSxcbiAgICAgICAgY3R4LlNUQVRJQ19EUkFXXG4gICAgICApXG4gICAgICBjdHguZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGV4X2Nvb3JkX2xvY2F0aW9uKVxuICAgICAgY3R4LnZlcnRleEF0dHJpYlBvaW50ZXIodGV4X2Nvb3JkX2xvY2F0aW9uLCAyLCBjdHguRkxPQVQsIGZhbHNlLCAwLCAwKVxuXG4gICAgICBsZXQgdGV4dHVyZSA9IGN0eC5jcmVhdGVUZXh0dXJlKClcbiAgICAgIGN0eC5iaW5kVGV4dHVyZShjdHguVEVYVFVSRV8yRCwgdGV4dHVyZSlcbiAgICAgIGN0eC5iaW5kVGV4dHVyZShjdHguVEVYVFVSRV8yRCwgdGV4dHVyZSlcblxuICAgICAgY3R4LnRleFBhcmFtZXRlcmkoY3R4LlRFWFRVUkVfMkQsIGN0eC5URVhUVVJFX1dSQVBfUywgY3R4LkNMQU1QX1RPX0VER0UpXG4gICAgICBjdHgudGV4UGFyYW1ldGVyaShjdHguVEVYVFVSRV8yRCwgY3R4LlRFWFRVUkVfV1JBUF9ULCBjdHguQ0xBTVBfVE9fRURHRSlcbiAgICAgIGN0eC50ZXhQYXJhbWV0ZXJpKGN0eC5URVhUVVJFXzJELCBjdHguVEVYVFVSRV9NSU5fRklMVEVSLCBjdHguTkVBUkVTVClcbiAgICAgIGN0eC50ZXhQYXJhbWV0ZXJpKGN0eC5URVhUVVJFXzJELCBjdHguVEVYVFVSRV9NQUdfRklMVEVSLCBjdHguTkVBUkVTVClcbiAgICAgIGN0eC50ZXhJbWFnZTJEKFxuICAgICAgICBjdHguVEVYVFVSRV8yRCxcbiAgICAgICAgMCxcbiAgICAgICAgY3R4LlJHQkEsXG4gICAgICAgIGN0eC5SR0JBLFxuICAgICAgICBjdHguVU5TSUdORURfQllURSxcbiAgICAgICAgaW1nXG4gICAgICApXG5cbiAgICAgIGN0eC5kcmF3QXJyYXlzKGN0eC5UUklBTkdMRVMsIDAsIDYpXG4gICAgfVxuICAgIGltZy5zcmMgPSBzcmNcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5pdEltYWdlKCdzY3J1Z2dzLmpwZycsIHRydWUpXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIHNlbGVjdFRoZW1lKG5hbWUpIHtcbiAgICBsZXQgaW5kZXggPSB0aGVtZV9uYW1lcy5pbmRleE9mKG5hbWUpXG4gICAgc2V0UGljayhpbmRleClcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihlKSB7XG4gICAgbGV0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKClcbiAgICBsZXQgcmVwZWF0ID0gZS5yZXBlYXRcbiAgICBsZXQga2V5bWFwID0ga2V5bWFwX3JlZi5jdXJyZW50XG4gICAgaWYgKGtleSA9PT0gJ28nICYmICFyZXBlYXQpIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJylcbiAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5maWxlcykge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGl0ZW0pXG4gICAgICAgICAgaW5pdEltYWdlKHNyYylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgICAgIH1cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgICB9XG4gICAgaWYgKGtleSA9PT0gJ3cnICYmICFyZXBlYXQpIHtcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG5cbiAgICAgIHZhciByZXZva2VVUkwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpc1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChtZS5ocmVmKVxuICAgICAgICAgIG1lLmhyZWYgPSBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXZva2VVUkwpXG4gICAgICB9XG5cbiAgICAgIGNfaG9sZGVyX3JlZi5jdXJyZW50LmNoaWxkTm9kZXNbMF0udG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2Rvd25sb2FkJyxcbiAgICAgICAgICBgcGFsLSR7dGhlbWVzW3BpY2tdLm5hbWVcbiAgICAgICAgICAgIC5yZXBsYWNlKCcgJywgJ18nKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCl9LWwke2x0aHJlc2hcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAucmVwbGFjZSgnMC4nLCAnJyl9LWgke2h0aHJlc2hcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAucmVwbGFjZSgnMC4nLCAnJyl9LXMke2h1ZV9zaGlmdH0tJHtuZXcgRGF0ZSgpXG4gICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgLnNsaWNlKDAsIC00KVxuICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvOi9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJyl9Wi5wbmdgXG4gICAgICAgIClcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKVxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV2b2tlVVJMKVxuICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGtleSA9PT0gJ3gnKSB7XG4gICAgICBzZXRTaG93SW5mbyhmYWxzZSlcbiAgICB9XG4gICAgaWYgKGtleSA9PT0gJz8nKSB7XG4gICAgICBzZXRTaG93SW5mbyhwcmV2ID0+ICFwcmV2KVxuICAgIH1cblxuICAgIGlmIChrZXltYXBbJ2onXSkge1xuICAgICAgc2V0UGljayhwcmV2U3RhdGUgPT4ge1xuICAgICAgICBsZXQgbnN0YXRlID0gcHJldlN0YXRlICsgMVxuICAgICAgICBpZiAobnN0YXRlID09PSB0aGVtZXMubGVuZ3RoKSBuc3RhdGUgPSAwXG4gICAgICAgIHJldHVybiBuc3RhdGVcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChrZXltYXBbJ2snXSkge1xuICAgICAgc2V0UGljayhwcmV2U3RhdGUgPT4ge1xuICAgICAgICBsZXQgbnN0YXRlID0gcHJldlN0YXRlIC0gMVxuICAgICAgICBpZiAobnN0YXRlIDwgMCkgbnN0YXRlID0gdGhlbWVzLmxlbmd0aCAtIDFcbiAgICAgICAgcmV0dXJuIG5zdGF0ZVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGtleW1hcFsnaCddKSB7XG4gICAgICBzZXRIdWVTaGlmdChwcmV2U3RhdGUgPT4ge1xuICAgICAgICBsZXQgbiA9IHByZXZTdGF0ZSAtIDFcbiAgICAgICAgaWYgKG4gPCAwKSBuID0gdGhlbWVzWzBdLmh1ZXMubGVuZ3RoIC0gMVxuICAgICAgICByZXR1cm4gblxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGtleW1hcFsnbCddKSB7XG4gICAgICBzZXRIdWVTaGlmdChwcmV2U3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4gKHByZXZTdGF0ZSArIDEpICUgdGhlbWVzWzBdLmh1ZXMubGVuZ3RoXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoa2V5bWFwWydhJ10pIHtcbiAgICAgIHNldEx0aHJlc2gocHJldlN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIHByZXZTdGF0ZSAtIDAuMDEyNSlcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChrZXltYXBbJ3MnXSkge1xuICAgICAgc2V0THRocmVzaChwcmV2U3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oaHRocmVzaCwgcHJldlN0YXRlICsgMC4wMTI1KVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGtleW1hcFsnZCddKSB7XG4gICAgICBzZXRIdGhyZXNoKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChsdGhyZXNoLCBwcmV2U3RhdGUgLSAwLjAxMjUpXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoa2V5bWFwWydmJ10pIHtcbiAgICAgIHNldEh0aHJlc2gocHJldlN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKDEsIHByZXZTdGF0ZSArIDAuMDEyNSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9hZCkge1xuICAgICAgbGV0IGMgPSBjX2hvbGRlcl9yZWYuY3VycmVudC5jaGlsZE5vZGVzWzBdXG4gICAgICBsZXQgY3R4ID0gYy5nZXRDb250ZXh0KCd3ZWJnbCcsIHsgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlIH0pXG4gICAgICBsZXQgcHJvZ3JhbSA9IHByb2dyYW1fcmVmLmN1cnJlbnRcblxuICAgICAgbGV0IHRocmVzaF9sb2NhdGlvbiA9IGN0eC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfdGhyZXNoJylcbiAgICAgIGN0eC51bmlmb3JtMmYodGhyZXNoX2xvY2F0aW9uLCBsdGhyZXNoLCBodGhyZXNoKVxuXG4gICAgICBsZXQgcGlja2VkID0gdGhlbWVzW3BpY2tdXG4gICAgICBsZXQgaHVlcyA9IHBpY2tlZC5odWVzLm1hcChrID0+XG4gICAgICAgIGNocm9tYShrKVxuICAgICAgICAgIC5nbCgpXG4gICAgICAgICAgLnNsaWNlKDAsIDMpXG4gICAgICApXG5cbiAgICAgIGxldCBodWVzX2EgPSBodWVzLnNsaWNlKDAsIGh1ZV9zaGlmdClcbiAgICAgIGxldCBodWVzX2IgPSBodWVzLnNsaWNlKGh1ZV9zaGlmdClcbiAgICAgIGxldCBhcnJhbmdlZCA9IFtcbiAgICAgICAgY2hyb21hKHBpY2tlZC5iZylcbiAgICAgICAgICAuZ2woKVxuICAgICAgICAgIC5zbGljZSgwLCAzKSxcbiAgICAgICAgY2hyb21hKHBpY2tlZC5mZylcbiAgICAgICAgICAuZ2woKVxuICAgICAgICAgIC5zbGljZSgwLCAzKSxcbiAgICAgICAgLi4uaHVlc19iLFxuICAgICAgICAuLi5odWVzX2EsXG4gICAgICBdXG5cbiAgICAgIGxldCBwYWxldHRlX2xvY2F0aW9uID0gY3R4LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndV9wYWxldHRlJylcbiAgICAgIGN0eC51bmlmb3JtM2Z2KHBhbGV0dGVfbG9jYXRpb24sIG5ldyBGbG9hdDMyQXJyYXkoYXJyYW5nZWQuZmxhdCgpKSlcblxuICAgICAgY3R4LmRyYXdBcnJheXMoY3R4LlRSSUFOR0xFUywgMCwgNilcbiAgICB9XG4gIH0sIFtsdGhyZXNoLCBodGhyZXNoLCBwaWNrLCBodWVfc2hpZnRdKVxuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKVxuICAgIGtleW1hcF9yZWYuY3VycmVudFtrZXldID0gdHJ1ZVxuICAgIGtleUFjdGlvbihlKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKVxuICAgIGtleW1hcF9yZWYuY3VycmVudFtrZXldID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZS5jbGlwYm9hcmREYXRhLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKClcbiAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICBpbml0SW1hZ2Uoc3JjKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSdcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGxldCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF1cbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJ1xuICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgaW5pdEltYWdlKHNyYylcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSwgZmFsc2UpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnLCBmYWxzZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnLCBmYWxzZSlcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSlcbiAgICB9XG4gIH0sIFtsdGhyZXNoLCBodGhyZXNoLCBwaWNrXSlcblxuICBsZXQgcGlja2VkID0gdGhlbWVzW3BpY2tdXG4gIGxldCBmZyA9IHBpY2tlZC5mZ1xuICBsZXQgYmcgPSBwaWNrZWQuYmdcbiAgbGV0IHNvcnRlZCA9IFsuLi50aGVtZXMuc2xpY2UocGljayksIC4uLnRoZW1lcy5zbGljZSgwLCBwaWNrKV1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QYWw8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtjb250YWluZXJfcmVmfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIGJhY2tncm91bmQ6IGJnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBvdXRsaW5lOiBgc29saWQgMXB4ICR7Zmd9YCxcbiAgICAgICAgICAgIGNvbG9yOiBmZyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxY2gnLCBtYXJnaW5SaWdodDogJzFjaCcgfX0+XG4gICAgICAgICAgICAgIDxkaXY+UGFsPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5SaWdodDogJzFjaCcgfX0+XG4gICAgICAgICAgICAgIDxLZXljYXAgaz17J28nfSBmZz17Zmd9IGJnPXtiZ30gY2xpY2tLZXk9e2NsaWNrS2V5fSAvPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjVjaCcgfX0+b3BlbiBmaWxlPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5SaWdodDogJzFjaCcgfX0+XG4gICAgICAgICAgICAgIDxLZXljYXAgaz17J3cnfSBmZz17Zmd9IGJnPXtiZ30gY2xpY2tLZXk9e2NsaWNrS2V5fSAvPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjVjaCcgfX0+c2F2ZSBwbmc8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgIDxLZXljYXAgaz17Jz8nfSBmZz17Zmd9IGJnPXtiZ30gY2xpY2tLZXk9e2NsaWNrS2V5fSAvPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjVjaCcgfX0+c2hvdyBpbmZvPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogcmxoIC8gMixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IHJsaCAvIDQsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJvcmRlcjogYHNvbGlkIDFweCAke2ZnfWAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHJlZj17Y19ob2xkZXJfcmVmfVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBjb2xvcjogZmcsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IHJsaCAvIDQsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcyY2gnIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PmxvdGhyZXNoPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4Jywgb3V0bGluZTogYHNvbGlkIDFweCAke2ZnfWAgfX0+XG4gICAgICAgICAgICAgIDxLZXljYXAgaz17J2EnfSBmZz17Zmd9IGJnPXtiZ30gY2xpY2tLZXk9e2NsaWNrS2V5fSAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bHRocmVzaC50b0ZpeGVkKDQpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEtleWNhcCBrPXsncyd9IGZnPXtmZ30gYmc9e2JnfSBjbGlja0tleT17Y2xpY2tLZXl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMmNoJyB9fT5cbiAgICAgICAgICAgIDxkaXY+aGl0aHJlc2g8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBvdXRsaW5lOiBgc29saWQgMXB4ICR7Zmd9YCB9fT5cbiAgICAgICAgICAgICAgPEtleWNhcCBrPXsnZCd9IGZnPXtmZ30gYmc9e2JnfSBjbGlja0tleT17Y2xpY2tLZXl9IC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtodGhyZXNoLnRvRml4ZWQoNCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8S2V5Y2FwIGs9eydmJ30gZmc9e2ZnfSBiZz17Ymd9IGNsaWNrS2V5PXtjbGlja0tleX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PnNodWU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBvdXRsaW5lOiBgc29saWQgMXB4ICR7Zmd9YCB9fT5cbiAgICAgICAgICAgICAgPEtleWNhcCBrPXsnaCd9IGZnPXtmZ30gYmc9e2JnfSBjbGlja0tleT17Y2xpY2tLZXl9IC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtodWVfc2hpZnR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8S2V5Y2FwIGs9eydsJ30gZmc9e2ZnfSBiZz17Ymd9IGNsaWNrS2V5PXtjbGlja0tleX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogcmxoIC8gMixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogZmcgfX0+dGhlbWU8L2Rpdj5cbiAgICAgICAgICB7c29ydGVkLm1hcCgodCwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e3QubmFtZX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgY29sb3I6IGZnLFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IGkgPT09IDAgPyBgc29saWQgMXB4ICR7Zmd9YCA6ICdub25lJyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IGkgPT09IDAgPyAyIDogMSxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTJjaCcsIGRpc3BsYXk6ICdmbGV4JyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdFRoZW1lKHQubmFtZSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogdC5iZywgd2lkdGg6ICcyY2gnLCBoZWlnaHQ6ICcxLjVyZW0nIH19XG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IHQuZmcsIHdpZHRoOiAnMmNoJywgaGVpZ2h0OiAnMS41cmVtJyB9fVxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICB7dC5odWVzLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXtrfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBrLCB3aWR0aDogJzJjaCcsIGhlaWdodDogJzEuNXJlbScgfX1cbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpID09PSAwICYmIGZhbHNlID8gdC5mZyA6IHQuYmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpID09PSAwICYmIGZhbHNlID8gdC5iZyA6IHQuZmcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMC41Y2gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcwLjVjaCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RUaGVtZSh0Lm5hbWUpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7aSA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgIDxLZXljYXAgaz17J2onfSBmZz17Zmd9IGJnPXtiZ30gY2xpY2tLZXk9e2NsaWNrS2V5fSAvPlxuICAgICAgICAgICAgICAgICAgPEtleWNhcCBrPXsnayd9IGZnPXtmZ30gYmc9e2JnfSBjbGlja0tleT17Y2xpY2tLZXl9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtzaG93X2luZm8gPyAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgIHpJbmRleDogNCxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBybGggKiAyLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2hvd0luZm8oZmFsc2UpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiZyxcbiAgICAgICAgICAgICAgICBjb2xvcjogZmcsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBgc29saWQgMXB4ICR7Zmd9YCxcbiAgICAgICAgICAgICAgICBib3JkZXJUb3A6ICdub25lJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzYwY2gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBvdXRsaW5lOiBgc29saWQgMXB4ICR7Zmd9YCxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+SW5mbzwvZGl2PlxuICAgICAgICAgICAgICAgIDxLZXljYXAgaz17J3gnfSBmZz17Zmd9IGJnPXtiZ30gY2xpY2tLZXk9e2NsaWNrS2V5fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzFjaCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcmxoIC8gMixcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IHJsaCAvIDIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggfX0+XG4gICAgICAgICAgICAgICAgICBQYWwgbGV0J3MgeW91IGFwcGx5IGFuIGVpZ2h0LWNvbG9yIHRlcm1pbmFsIGNvbG9yIHBhbGV0dGUgdG9cbiAgICAgICAgICAgICAgICAgIGFuIGltYWdlLiBVc2UgdGhlIGtleWJvYXJkIGNvbnRyb2xzIHRvIGNob29zZSBhIHRoZW1lLCBzZXRcbiAgICAgICAgICAgICAgICAgIHRocmVzaG9sZHMsIGFuZCBjeWNsZSBodWVzLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBybGggfX0+XG4gICAgICAgICAgICAgICAgICBZb3UgY2FuIGxvYWQgeW91ciBvd24gaW1hZ2UgYnkgcHJlc3Npbmd7JyAnfVxuICAgICAgICAgICAgICAgICAgPEtleWNhcFxuICAgICAgICAgICAgICAgICAgICBrPXsnbyd9XG4gICAgICAgICAgICAgICAgICAgIGZnPXtmZ31cbiAgICAgICAgICAgICAgICAgICAgYmc9e2JnfVxuICAgICAgICAgICAgICAgICAgICBjbGlja0tleT17Y2xpY2tLZXl9XG4gICAgICAgICAgICAgICAgICAgIGlubGluZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAsIHBhc3RpbmcsIG9yIGRyYWdnaW5nIGFuZCBkcm9wcGluZy5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBob3cgaXQgd29ya3MgYW5kIHZpZXcgdGhlIGNvZGV7JyAnfVxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb25zdHJhaW50LXN5c3RlbXMvcGFsXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGZnIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIG9uIGdpdGh1YlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9JQk1QbGV4U2Fucy1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvSUJNUGxleFNhbnMtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b21vbm8nO1xuICAgICAgICAgIHNyYzogdXJsKCcvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b21vbm8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtmc31weDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogJHtsaH07XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/home/grant/sites/constraint-systems/pal/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c1d65cc3cc5d9d3ccc12.hot-update.js.map