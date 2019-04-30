/**
 * Created by zhengyi.fu on 2018/8/31.
 */
import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()
// 添加请求拦截器
fly.interceptors.request.use((request) => {
  request.headers["X-Tag"] = "flyio";
  // 给所有请求添加自定义header
  // const token = getStorageSync('token')
  // request.headers['token'] = token


  // request.headers = {
  //   "content-type": "application/json",
  //   "cld.stats.page_entry": api.Get('scene'),
  //   "version": store.state.version,
  //   "token": api.Get('token')
  // }
  wx.showLoading({
    title: "加载中",
    mask: true
  });
  // request.headers["X-Tag"] = "flyio";
  // request.headers['content-type']= 'application/json';

  return request;
});

// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading();
    return response.data; // 请求成功之后将返回值返回
  },
  (err) => {
    // 请求出错，根据返回状态码判断出错原因
    console.log(err);
    wx.hideLoading();
    if (err) {
      return "请求失败";
    };
  }
);

export default fly;

/*

ھىچكىم بۇنىڭغا قاتناشمىسا ، بۇنىڭدىن ئۈمىد كۈتسە ، دىھقاننىڭ ئېتىزنىڭ بېشىغا چىقۋېلىپ ئوتتاغىندەك بىر ئىش بولىدۇ .
تېرىيسىز زىرائەتنى ، تاكى ئورىدىغانغا قەدەر توختىماي پەرۋىش قىلىسىز، سوغرىشڭىز كېرەك . ئاندىن ئۇنىڭدىن مىۋە كۈتەلەيسىز
كەتمەن چاپماي نان يەيمەن، ئۇخلاپ ياتىمەن
*/
