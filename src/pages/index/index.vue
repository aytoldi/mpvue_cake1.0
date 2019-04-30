<template>
  <div class="page">
    <CardHeader></CardHeader>
    <div class="swiper-layout">
      <Swiper :images="images"></Swiper>
    </div>
    <CardNav></CardNav>
    <div class="bar">
      <CardNavBar></CardNavBar>
    </div>
    <div class="product">
      <CarTitle :title="newProductTitle"></CarTitle>
      <CarList :product="newProductList"></CarList>
    </div>
    <div class="product">
      <CarTitle :title="publicTitle"></CarTitle>
      <CarList :product="publicProductList"></CarList>
    </div>
  </div>
</template>
<script>
import CardHeader from "@/components/header";
import Swiper from "@/components/swiper";
import CardNav from "@/components/home/nav.vue";
import CardNavBar from "@/components/home/navbar.vue";
import CarTitle from "@/components/title";
import CarList from "@/components/list/newProduct";
import service from "@/utils/service.js";

export default {
  components: {
    CardHeader,
    Swiper,
    CardNav,
    CardNavBar,
    CarTitle,
    CarList
  },
  data() {
    return {
      images: [],
      newProductTitle: "新品",
      newProductList: [],
      publicProductList: [],
      publicTitle: "人气"
    };
  },
  methods: {
    initData() {
      service.swiper().then(res => {
        this.images = res.data.list;
      });
    },
    initnewProduct() {
      service.newProduct().then(res => {
        this.newProductList = res.data.list;
      });
    },
    initPublicProduct() {
      service.publicProduct().then(res => {
        this.publicProductList = res.data.list;
      });
    }
  },
  mounted() {
    this.initData();
    this.initnewProduct();
    this.initPublicProduct();
  }
};
</script>


<style lang="less" scoped>
.page {
  background: #fff;
}

.swiper-layout {
  margin-bottom: 24rpx;
}

.bar {
  margin-bottom: 30rpx;
}

.product {
  width: 100%;
  padding: 0 40rpx;
  box-sizing: border-box;
}
</style>

