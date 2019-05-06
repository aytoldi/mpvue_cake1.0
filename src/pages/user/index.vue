<template>
  <div class="container">
    <div class="list">
      <div class="item">
        <div class="input">
          <span class="icon-user11"></span>
          <input type="text" v-model="name">
        </div>
      </div>
      <div class="item">
        <div class="input">
          <span class="icon-lock-closed-outline"></span>
          <input type="text" v-model="password">
        </div>
      </div>
      <div class="last-btn" @click="submitHandle">提交</div>
    </div>
    <div class="toast-panel" v-if="flag">{{content}}</div>
  </div>
</template>
<script>
import apiUrl from "@/utils/request";
var Fly = require("flyio/dist/npm/wx");
var _fly = new Fly();
import qs from "qs";
export default {
  created() {
    console.log(this.$store.state.token, 55);
    if (this.$store.state.token) {
      let setUrl = "/pages/index/main";
      mpvue.reLaunch({ url: setUrl });
    }
  },
  data() {
    return {
      name: "",
      password: "",
      flag: false,
      content: ""
    };
  },
  methods: {
    _trim(x) {
      return x.replace(/^\s+|\s+$/gm, "");
    },
    regName() {
      let reg = /^1\d{10}$/;
      let result = false;
      if (!this._trim(this.name)) {
        this.content = "手机号不能为空";
        this.flag = true;
        setTimeout(() => {
          this.flag = false;
        }, 1500);
        result = false;
      }

      if (this._trim(this.name) && !reg.test(this._trim(this.name))) {
        this.flag = true;
        this.content = "请输入正确的手机号";
        this.flag = true;
        setTimeout(() => {
          this.flag = false;
        }, 1500);
        result = false;
      }

      if (this._trim(this.name) && reg.test(this._trim(this.name))) {
        result = true;
      }
      return result;
    },
    regPass() {
      let reg = /^[a-zA-Z]\w{4}$/;
      let result = false;
      if (!this._trim(this.password)) {
        this.content = "密码不能为空";
        this.flag = true;
        setTimeout(() => {
          this.flag = false;
        }, 1500);
        result = false;
      }

      if (this._trim(this.password) && !reg.test(this._trim(this.password))) {
        this.flag = true;
        this.content = "请输入正确的密码";
        this.flag = true;
        setTimeout(() => {
          this.flag = false;
        }, 1500);
        result = false;
      }

      if (this._trim(this.password) && reg.test(this._trim(this.password))) {
        result = true;
      }
      return result;
    },
    submitHandle() {
      if (this.regName() && this.regPass()) {
        _fly
          .post(
            apiUrl.login,
            qs.stringify({ username: this.name, password: this.password })
          )
          .then(res => {
            if (res.data.code === 0) {
              console.log(res, 13);
              let myToken = res.data.data.token;
              mpvue.setStorageSync("token", myToken); //本地存储
              this.$store.commit("login", { token: myToken }); //登录，state上存储token
              this.$store.commit("isLogin", false); //用户是否登录
              this.$nextTick(() => {
                let setUrl = "/pages/index/main";
                mpvue.reLaunch({ url: setUrl }); //跳转至指定页面并关闭其他打开的所有页面（这个最好用在返回至首页的的时候）
              });
            }
          });
      }
    }
  },
  update() {
    console.log(33);
  }
};
</script>
<style lang="less" scoped>
body {
  background-color: red;
}

.container {
  width: 100%;
  padding: 40rpx;
  box-sizing: border-box;
  .list {
    width: inherit;
    .item {
      margin-bottom: 30rpx;
      .input {
        border: 1px solid #442818;
        width: 100%;
        display: flex;
        border-radius: 8rpx;
        height: 86rpx;

        span {
          flex: 0 0 80rpx;
          text-align: center;
          vertical-align: middle;
          line-height: 86rpx;
          font-size: 50rpx;
        }
        .icon-lock-closed-outline {
          font-size: 60rpx;
        }
        input {
          flex: 1;
          padding-right: 20rpx;
          box-sizing: border-box;
          height: 86rpx;
          line-height: 86rpx;
          font-size: 30rpx;
        }
      }
    }
    .last-btn {
      font-size: 34rpx;
      line-height: 86rpx;
      border: 1px solid #442818;
      background: #442818;
      color: #fff;
      width: 100%;
      border-radius: 8rpx;
      height: 86rpx;
      text-align: center;
      cursor: pointer;
    }
  }
}
.toast-panel {
  padding: 20rpx 30rpx;
  background: #442818;
  color: #fff;
  font-size: 30rpx;
  border-radius: 10rpx;
  margin-top: 100rpx;
}
</style>