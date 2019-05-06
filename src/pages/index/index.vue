<template>
  <div class="page">
    <!-- 		<MainHeader></MainHeader> -->
    <div class="header">
      <Mainheader></Mainheader>
    </div>
    <div class="swiper-layout">
      <Swiper :images="images"></Swiper>
    </div>
    <div class="nav_title">
      <Navtitle></Navtitle>
    </div>
    <div class="nav_list">
      <Navlist></Navlist>
    </div>
    <div class="product">
      <ProductTitle :title="newProductTitle"></ProductTitle>
      <Product :product="newProductList"></Product>
    </div>
    <div class="product">
      <ProductTitle :title="publicTitle"></ProductTitle>
      <Product :product="publicProductList"></Product>
    </div>
  </div>
</template>
<script>
import Mainheader from "@/components/header";
import Swiper from "@/components/swiper";
import Navtitle from "@/components/nav_title";
import Navlist from "@/components/nav_list";
import ProductTitle from "@/components/product_title";
import Product from "@/components/product";
import service from "@/utils/service.js";
export default {
  data() {
    return {
      images: [],
      newProductTitle: "新品",
      newProductList: [],
      publicProductList: [],
      publicTitle: "人气"
    };
  },
  components: {
    Mainheader,
    Swiper,
    Navtitle,
    Navlist,
    ProductTitle,
    Product
  },
  methods: {
    initSwiper() {
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
    this.initSwiper();
    this.initnewProduct();
    this.initPublicProduct();
  }
};
</script>

<style lang="less" scoped>
.swiper-layout {
  margin-bottom: 24rpx;
}

.nav_list {
  margin-bottom: 30rpx;
}
.product {
  width: 100%;
  padding: 0 40rpx;
  box-sizing: border-box;
}
</style>
