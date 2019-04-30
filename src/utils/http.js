// 通过用户id获取信息,参数直接写在url中ڭ لېیىغا شېكهرنى كـۆپرەك قوشـىۋەتكهنمىكىن، جېنـى
//  بهكلا تاتلىققۇ بۇ خهقنىڭ، شۇنچىلا ھاقارەتلهرگه چىداۋېرىدۇ!

import qs from 'qs'
import fly from './fly'

function get(url, param) {
  return new Promise((resolve, reject) => {
    fly
      .get(url, {
        params: param
      })
      .then(res => {
        resolve(res)
      })
  })
}

function post(url, params = {}) {
  // post请求
  return new Promise((resolve, reject) => {
    fly.post(url, qs.stringify(params)).then(res => {
      resolve(res)
    })
  })
}

export default {
  get,
  post
}
