<template>
  <div class="_title">
    <p class="left">{{title}}</p>
    <p class="right">
      更多
      <span class="icon-chevron-right" @click="handlePage"></span>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
      // required: true,
      // default() {
      //   return {};
      // }
    }
  },
  data() {
    return {};
  },
  methods: {
    handlePage() {
      wx.navigateTo({
        url: "/pages/product/main?id=5"
      });
    }
  }
};
</script>
<style lang="less" scoped>
._title {
  width: 100%;
  border-top: 1rpx solid #e5e5e5;
  padding: 20rpx 0;
  .left {
    color: #322418;
    display: inline-block;
    height: 20px;
    font-size: 13px;
    background: #f4ebe2;
    border-radius: 100px;
    padding: 0 10px;
    line-height: 20px;
  }
  p {
    display: inline-block;
  }
  .right {
    float: right;
    color: #808080;
    font-size: 26rpx;
  }
}
</style>