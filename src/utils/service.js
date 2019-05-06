import requestAll from './http.js';
import apiUrl from './request'

const service = {
  swiper(params) {
    return requestAll.get(apiUrl.swiper, params);
  },
  newProduct() {
    return requestAll.get(apiUrl.newProduct);
  },
  publicProduct() {
    return requestAll.get(apiUrl.publicProduct);
  },
  cart() {
    return requestAll.get(apiUrl.cart);
  },
  detail(params) {
    return requestAll.get(apiUrl.detail, params);
  },
  login(params) {
    return requestAll.post(apiUrl.login, params);
  }
}

export default service
