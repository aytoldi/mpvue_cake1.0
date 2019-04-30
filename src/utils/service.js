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
  }
}

export default service
