import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let state = {
  token: wx.getStorageSync('token') || '',
  user: {}, //解析token之后获取用户的信息
  is_login: false
}

let getters = {
  isLoggedIn: state => !!state.token,
  userInfo: state => state.user,
}

//处理前段派发的action
let actions = {
  logout({
    commit
  }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      // localStorage.removeItem('token')
      wx.clearStorageSync('token');
      delete axios.headers.common['Authorization']
      resolve()
    })
  }
}

//改变state的状态信息
let mutations = {
  login(state, obj) {
    state.token = obj.token;
  },
  logout(state) {
    state.user = ''
    state.token = ''
  },
  isLogin(state, flag) {
    state.is_login = flag;
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
