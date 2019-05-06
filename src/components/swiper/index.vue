<template>
  <swiper
    class="swiper"
    :indicator-dots="indicatorDots"
    :autoplay="autoplay"
    :interval="interval"
    :duration="duration"
  >
    <block v-for="(item, index) in images" :key="index">
      <swiper-item>
        <img class="slide-image" :src="item.url" mode="widthFix" alt>
      </swiper-item>
    </block>
  </swiper>
  <!-- <div class="swiper">
    <img
      class="slide-image"
      src="https://img4.sycdn.imooc.com/5cbca3800001b7e805000267.jpg"
      mode="widthFix"
      alt
    >
  </div>-->
</template>

<script>
export default {
  props: {
    images: {
      type: Array
      // required: true,
      // default() {
      //   return {};
      // }
    }
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 300,
      circular: true
    };
  }
};
</script>
<style lang="less" scoped>
.swiper {
  width: 100%;
  height: 376rpx !important;
  overflow: hidden;
}
.slide-image {
  height: 100%;
  width: 100%;
}
</style>
