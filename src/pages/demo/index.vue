<template>
  <div class="page">
    <img :src="_getInfo.avatarUrl" class="u_info">
    <h3>hello {{_getInfo.nickName}}</h3>
    <button open-type="getUserInfo" @getuserinfo="getUserInfo">success</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      _getInfo: {}
    };
  },
  components: {},
  methods: {
    // 按钮点击之后用户授权信息
    getUserInfo(data) {
      // 用户是否有授权
      if (data.mp.detail.rawData) {
      }
    },
    // 获取用户的登录信息
    handleGetUserInfo() {
      wx.getUserInfo({
        withCredentials: false,
        success: res => {
          console.log(res, 5);
          this._getInfo = res.userInfo;
        },
        fail: () => {},
        complete: () => {}
      });
    }
  },
  created() {
    this.handleGetUserInfo();
  }
};
</script>

<style>
/*!
 * WeUI v1.1.1 (https://github.com/weui/weui-wxss)
 * Copyright 2017 Tencent, Inc.
 * Licensed under the MIT license
 */

.u_info {
  width: 80px;
}
</style>
