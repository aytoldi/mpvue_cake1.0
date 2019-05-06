require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(158);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_571744b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(161);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-571744b0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_571744b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\user\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-571744b0", Component.options)
  } else {
    hotAPI.reload("data-v-571744b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = __webpack_require__(48);

var _request2 = _interopRequireDefault(_request);

var _qs = __webpack_require__(44);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fly = __webpack_require__(47); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _fly = new Fly();
exports.default = {
  created: function created() {
    console.log(this.$store.state.token, 55);
    if (this.$store.state.token) {
      var setUrl = "/pages/index/main";
      global.mpvue.reLaunch({ url: setUrl });
    }
  },
  data: function data() {
    return {
      name: "",
      password: "",
      flag: false,
      content: ""
    };
  },

  methods: {
    _trim: function _trim(x) {
      return x.replace(/^\s+|\s+$/gm, "");
    },
    regName: function regName() {
      var _this = this;

      var reg = /^1\d{10}$/;
      var result = false;
      if (!this._trim(this.name)) {
        this.content = "手机号不能为空";
        this.flag = true;
        setTimeout(function () {
          _this.flag = false;
        }, 1500);
        result = false;
      }

      if (this._trim(this.name) && !reg.test(this._trim(this.name))) {
        this.flag = true;
        this.content = "请输入正确的手机号";
        this.flag = true;
        setTimeout(function () {
          _this.flag = false;
        }, 1500);
        result = false;
      }

      if (this._trim(this.name) && reg.test(this._trim(this.name))) {
        result = true;
      }
      return result;
    },
    regPass: function regPass() {
      var _this2 = this;

      var reg = /^[a-zA-Z]\w{4}$/;
      var result = false;
      if (!this._trim(this.password)) {
        this.content = "密码不能为空";
        this.flag = true;
        setTimeout(function () {
          _this2.flag = false;
        }, 1500);
        result = false;
      }

      if (this._trim(this.password) && !reg.test(this._trim(this.password))) {
        this.flag = true;
        this.content = "请输入正确的密码";
        this.flag = true;
        setTimeout(function () {
          _this2.flag = false;
        }, 1500);
        result = false;
      }

      if (this._trim(this.password) && reg.test(this._trim(this.password))) {
        result = true;
      }
      return result;
    },
    submitHandle: function submitHandle() {
      var _this3 = this;

      if (this.regName() && this.regPass()) {
        _fly.post(_request2.default.login, _qs2.default.stringify({ username: this.name, password: this.password })).then(function (res) {
          if (res.data.code === 0) {
            console.log(res, 13);
            var myToken = res.data.data.token;
            global.mpvue.setStorageSync("token", myToken); //本地存储
            _this3.$store.commit("login", { token: myToken }); //登录，state上存储token
            _this3.$store.commit("isLogin", false); //用户是否登录
            _this3.$nextTick(function () {
              var setUrl = "/pages/index/main";
              global.mpvue.reLaunch({ url: setUrl }); //跳转至指定页面并关闭其他打开的所有页面（这个最好用在返回至首页的的时候）
            });
          }
        });
      }
    }
  },
  update: function update() {
    console.log(33);
  }
};

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "input"
  }, [_c('span', {
    staticClass: "icon-user11"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    attrs: {
      "type": "text",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "input"
  }, [_c('span', {
    staticClass: "icon-lock-closed-outline"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "type": "text",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "last-btn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.submitHandle
    }
  }, [_vm._v("提交")])]), _vm._v(" "), (_vm.flag) ? _c('div', {
    staticClass: "toast-panel"
  }, [_vm._v(_vm._s(_vm.content))]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-571744b0", esExports)
  }
}

/***/ })

},[157]);