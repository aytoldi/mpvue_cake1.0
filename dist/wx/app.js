require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(27);

var _extends3 = _interopRequireDefault(_extends2);

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(16);

var _vuex2 = _interopRequireDefault(_vuex);

var _vuex3 = __webpack_require__(63);

var _vuex4 = _interopRequireDefault(_vuex3);

var _App = __webpack_require__(91);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

_vue2.default.config.productionTip = false;
_App2.default.mpType = 'app';
// 原型上插入vuex
_vue2.default.prototype.$store = _vuex4.default;
var app = new _vue2.default((0, _extends3.default)({}, _App2.default, {
  store: _vuex4.default
}));
app.$mount();

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(36);

var _promise2 = _interopRequireDefault(_promise);

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(16);

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var state = {
  token: wx.getStorageSync('token') || '',
  user: {}, //解析token之后获取用户的信息
  is_login: false
};

var getters = {
  isLoggedIn: function isLoggedIn(state) {
    return !!state.token;
  },
  userInfo: function userInfo(state) {
    return state.user;
  }

  //处理前段派发的action
};var actions = {
  logout: function logout(_ref) {
    var commit = _ref.commit;

    return new _promise2.default(function (resolve, reject) {
      commit('logout');
      // localStorage.removeItem('token')
      wx.clearStorageSync('token');
      delete axios.headers.common['Authorization'];
      resolve();
    });
  }
};

//改变state的状态信息
var mutations = {
  login: function login(state, obj) {
    state.token = obj.token;
  },
  logout: function logout(state) {
    state.user = '';
    state.token = '';
  },
  isLogin: function isLogin(state, flag) {
    state.is_login = flag;
  }
};

exports.default = new _vuex2.default.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(92)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02fe003c", Component.options)
  } else {
    hotAPI.reload("data-v-02fe003c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  created: function created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    var logs = void 0;
    if (global.mpvuePlatform === "my") {
      logs = global.mpvue.getStorageSync({ key: "logs" }).data || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync({
        key: "logs",
        data: logs
      });
    } else {
      logs = global.mpvue.getStorageSync("logs") || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync("logs", logs);
    }
  },
  log: function log() {
    console.log("log at:" + Date.now());
  }
};

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[50]);