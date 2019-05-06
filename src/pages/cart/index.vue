<template>
  <div>
    <Cartitem
      @plus="activePlus"
      @minus="activeMinus"
      :computedNum="computedClass"
      :product="images"
    ></Cartitem>
    <div class="foo">
      <ul>
        <li class="left">
          <span class="title">合计</span>
          <span class="price">{{result}}</span>
        </li>
        <li class="right">
          <span>去结算</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Cartitem from "@/components/cart_item";
import service from "@/utils/service.js";
export default {
  data() {
    return {
      images: [],
      result: 0,
      len: 0
    };
  },
  components: {
    Cartitem
  },
  methods: {
    getData() {
      let result = 0;
      service.cart().then(res => {
        this.$nextTick(() => {
          for (let i = 0; i < res.data.list.length; i++) {
            result += parseFloat(res.data.list[i].price);
          }
          this.result = result;
        });
        this.images = res.data.list;
      });
    },
    activePlus(obj) {
      let { num, index } = obj;
      this.$nextTick(() => {
        num++;
        this.images[index]["num"] = num;
        this.result = this.result + parseFloat(this.images[index]["price"]);
      });
    },
    activeMinus(obj) {
      let { num, index } = obj;
      this.$nextTick(() => {
        num--;
        this.images[index]["num"] = num;
        this.result = this.result - parseFloat(this.images[index]["price"]);
        if (num < 1) {
          this.images[index]["price"] = 0;
          this.images.splice(index, 1);
          this.images = this.images;
          return;
        }
      });
    },
    getResult() {
      let sum = 0;
      this.images.forEach(item => {
        sum += parseFloat(item.price);
      });
      this.result = sum;
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
.foo {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 88rpx;
  background: #fff;
  z-index: 1000000;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.1);
  ul {
    width: 100%;
    display: flex;
    li {
      line-height: 88rpx;
    }
    .left {
      flex: 1;
      text-align: center;
      .title {
        font-size: 28rpx;
        color: #969696;
        &:after {
          content: ":";
          margin: 0 5rpx;
        }
      }
      .price {
        font-size: 32rpx;
        color: #442818;
        font-weight: bold;
        &:before {
          content: "￥";
        }
      }
    }
    .right {
      flex: 0 0 188rpx;
      background: #442818;
      color: #fff;
      text-align: center;
      span {
        font-size: 28rpx;
      }
    }
  }
}
</style>
