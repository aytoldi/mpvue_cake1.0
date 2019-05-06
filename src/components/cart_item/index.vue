<template>
  <div class="page">
    <ul class="list">
      <li v-for="(item, index) in product" :key="index">
        <div class="img">
          <img :src="item.url" alt>
        </div>
        <div class="content">
          <h3>{{item.title}}</h3>
          <h3>{{item.desc}}</h3>
          <h3>
            <span class="up">规格</span>
            <span class="up">{{item.size}}</span>
          </h3>
          <div class="price">
            <div class="text">{{item.price}}</div>
            <div class="action">
              <!-- <span class="btn" :class="computedClassStr"></span> -->
              <span
                @click="handleMinus(item,index)"
                class="btn"
                :class="item.num>1?'icon-minus':'icon-trash-2'"
              ></span>
              <span class="number">{{item.num}}</span>
              <span class="btn icon-plus" @click="handlePlus(item,index)"></span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Array
    },
    computedClass: {
      String
    }
  },
  data() {
    return {
      isActive: 0
    };
  },
  computed: {
    // computedClassStr() {
    //   return this.isActive > 1 ? "icon-minus" : "icon-trash-2";
    // }
  },
  methods: {
    handlePlus(item, index) {
      let obj = {
        num: parseFloat(item.num),
        index
      };
      this.$emit("plus", obj);
    },
    handleMinus(item, index) {
      console.log(item);
      let obj = {
        num: parseFloat(item.num),
        index
      };
      this.$emit("minus", obj);
    }
  }
};
</script>
<style lang="less" scoped>
.page {
  margin-bottom: 150rpx;
}
.list {
  width: 100%;
  box-sizing: border-box;
  li {
    width: 100%;
    display: flex;

    background: #fff;
    .img {
      flex: 0 0 220rpx;
      margin: 0 40rpx;
      margin-bottom: 39rpx;
      img {
        width: 100%;
        height: 240rpx;
      }
    }
    .content {
      margin-top: 39rpx;
      height: 210rpx;
      flex: 1;
      h3 {
        color: #442818;
        font-size: 24rpx;
      }
      .up {
        color: #969696;
        font-size: 22rpx;
      }
      .delete {
        text-align: right;
      }
      .price {
        margin-top: 24rpx;
        height: 50rpx;
        .text {
          color: #969696;
          float: left;
          font-size: 22rpx;
          line-height: 50rpx;
          vertical-align: middle;
        }
        .action {
          float: right;
          width: 160rpx;
          margin-right: 40rpx;
          span {
            float: left;
          }
          .btn {
            width: 50rpx;
            height: 50rpx;
            display: inline-block;
            text-align: center;
            background: #f0f0f0;
            line-height: 50rpx;
            font-size: 26rpx;
            color: #442818;
          }
          .number {
            width: 60rpx;
            height: 50rpx;
            background: #f7f7f7;
            color: #969696;
            text-align: center;
            line-height: 50rpx;
            font-size: 30rpx;
          }
        }
      }
    }
  }
}
</style>