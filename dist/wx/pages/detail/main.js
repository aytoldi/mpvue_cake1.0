require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(115);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3065022e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(121);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3065022e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3065022e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3065022e", Component.options)
  } else {
    hotAPI.reload("data-v-3065022e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swiper = __webpack_require__(49);

var _swiper2 = _interopRequireDefault(_swiper);

var _service = __webpack_require__(26);

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  components: {
    Swiper: _swiper2.default
  },
  data: function data() {
    return {
      images: [],
      newProductTitle: "新品",
      newProductList: [],
      publicProductList: [],
      name: "",
      title: "",
      price: "",
      size: "",
      tool: "",
      person: "",
      action: "",
      selicye: "",
      number: "2",
      list: [],
      isFlag: false,
      goodsNum: 0
    };
  },

  methods: {
    initSwiper: function initSwiper() {
      var _this = this;

      _service2.default.detail({ id: this.$root.$mp.query.id || 1 }).then(function (res) {
        _this.isFlag = true;
        console.log(res.data.swiper);
        _this.$nextTick(function () {
          _this.images = res.data.swiper;
          _this.list = res.data.list;
          _this.name = res.data.name;
          _this.title = res.data.title;
          _this.price = res.data.price;
          _this.size = res.data.size;
          _this.tool = res.data.tool;
          _this.person = res.data.person;
          _this.action = res.data.action;
          _this.selicye = res.data.selicye;
        });
      });
    },
    addGoods: function addGoods() {
      this.goodsNum = this.goodsNum + 1;
      if (this.goodsNum > 1) {
        wx.showToast({
          title: "你已经加入了"
        });
        return;
      } else {
        wx.showToast({
          title: "加入成功"
        });
      }
    }
  },
  mounted: function mounted() {
    this.initSwiper();
  }
};

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Swiper', {
    attrs: {
      "images": _vm.images,
      "mpcomid": '0'
    }
  }), _vm._v(" "), (_vm.isFlag) ? _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('p', {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_c('span', [_vm._v("￥" + _vm._s(_vm.price))])]), _vm._v(" "), _c('ul', {
    staticClass: "public"
  }, [_c('li', [_c('span', [_vm._v("新品")])]), _vm._v(" "), _c('li', [_c('span', [_vm._v("人气")])]), _vm._v(" "), _c('li', [_c('span', [_vm._v("生日")])])], 1), _vm._v(" "), _c('ul', {
    staticClass: "desc-img"
  }, [_c('li', [_c('div', {
    staticClass: "img img1"
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("樱桃酒")])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "img img2"
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("樱桃酒")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "desc-container"
  }, [_c('div', {
    staticClass: "desc-content"
  }, [_c('p', {
    staticClass: "desc-title"
  }, [_vm._v("已选择：2.0磅")])], 1), _vm._v(" "), _c('ul', {
    staticClass: "desc-content-img"
  }, [_c('li', [_c('div', {
    staticClass: "d-img d-img1"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.size))])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "d-img d-img2"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.tool))])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "d-img d-img3"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.person))])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "d-img d-img4"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.action))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "ifs"
  }, [_c('span', {
    staticClass: "if-img"
  }), _vm._v(" "), _c('span', {
    staticClass: "f-title"
  }, [_vm._v(_vm._s(_vm.selicye))])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "desc-list"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('img', {
      attrs: {
        "src": item.url,
        "mode": "widthFix",
        "alt": ""
      }
    })])
  }))]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "footer"
  }, [_c('li', {
    staticClass: "items1"
  }, [_vm._v("立即购买")]), _vm._v(" "), _c('li', {
    staticClass: "items2",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.addGoods
    }
  }, [_vm._v("加入购物车")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3065022e", esExports)
  }
}

/***/ })

},[114]);