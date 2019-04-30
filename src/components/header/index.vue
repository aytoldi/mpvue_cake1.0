<template>
  <div class="header">
    <div class="map">
      <span class="icon icon-map-pin"></span>
      <span>杭州</span>
    </div>
    <div class="search">
      <div class="icons">
        <span class="icon icon-search"></span>
      </div>
      <input type="text">
    </div>
    <div class="user">
      <span class="icon icon-user-o"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  width: 100%;
  // background: yellowgreen;
  /*居中*/
  align-items: center;
  justify-content: center;

  .map {
    flex: 0 0 150rpx; //缩放宽度,表示项目在主轴上占据的空间，默认值为auto。如下代码
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    span {
      line-height: 75rpx;
      display: inline-block;
      vertical-align: middle;
    }
    .icon-map-pin {
      font-size: 40rpx;
      margin-right: 8rpx;
    }
  }

  .search {
    flex: 1;
    background: #eeeeee;
    border-radius: 10rpx;
    width: auto;
    height: 70rpx;
    line-height: 70rpx;
    display: flex;
    .icons {
      display: table;
      text-align: center;
      height: 70rpx;
      line-height: 70rpx;
      margin-left: 15rpx;
      span {
        font-size: 45rpx;
        display: inline-block;
        vertical-align: sub;
      }
    }

    input {
      display: inline-block;
      flex: 1;
      height: 70rpx;
      line-height: 70rpx;
      padding: 0 15rpx;
      box-sizing: border-box;
    }
  }
  .user {
    flex: 0 0 90rpx;
    display: inline-block;
    text-align: center;
    span {
      font-size: 40rpx;
      vertical-align: sub;
    }
  }
}
</style>
