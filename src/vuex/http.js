import apiUrl from '@/utils/request'
var Fly = require("flyio/dist/npm/wx")
var axios = new Fly
import qs from 'qs'

function wxPromisify(user) {
  return new Promise((resolve, reject) => {
    axios.post(apiUrl.login, qs.stringify(user)).then((res) => {
      let token = res.data.data.token;
      wx.setStorageSync('token', token)
      axios.headers.common['Authorization'] = token;
      commit('auth_success', token, user) //reducer做的事情
      resolve(res);
    }).catch(err => {
      wx.clearStorageSync('token');
      reject(err)
    })
  })
}

module.exports = {
  wxPromisify: wxPromisify
}
