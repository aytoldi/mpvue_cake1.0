<template>
  <ul class="nav">
    <li>
      <span class="icon-git-merge"></span>
      <strong>新人首单赠小切块</strong>
    </li>
    <li class="center">
      <span class="icon-git-merge"></span>
      <strong>满100包邮</strong>
    </li>
    <li>
      <span class="icon-git-merge"></span>
      <strong>全程冷链配送</strong>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.nav {
  width: 100%;
  text-align: center;
  li {
    display: inline-block;
    text-align: center;
    line-height: 80rpx;

    span {
      display: inline-block;
      margin-right: 5rpx;
      vertical-align: middle;
    }
    strong {
      display: inline-block;
      font-size: 28rpx;
    }
  }
  .center {
    margin: 0 28rpx;
  }
}
</style>
