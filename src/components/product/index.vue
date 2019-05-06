<template>
  <ul class="list">
    <li v-for="(item, index) in product" :key="index">
      <div class="imgNav" @click="handleClick(item.id)">
        <img :src="item.url" mode="widthFix" alt>
      </div>
      <div class="title">
        <strong>{{item.title}}</strong>
        <span>{{item.price}}</span>
      </div>
      <div class="cart-icons"></div>
      <div class="desc">
        <strong>{{item.desc}}</strong>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    product: {
      type: Array
    }
  },
  methods: {
    handleClick(id) {
      let setUrl = `../../pages/detail/main?id=${id}`;
      mpvue.navigateTo({ url: setUrl });
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  li {
    margin-bottom: 20rpx;
    background: #fff;
    border: 1px solid #f2eae4;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    overflow: hidden;
    padding-bottom: 20rpx;
    box-sizing: border-box;
    min-height: 200rpx;

    img {
      width: 100%;
    }
    .title {
      width: 80%;
      padding-left: 20rpx;
      box-sizing: border-box;
      strong {
        display: inline-block;
        font-weight: bold;
        font-size: 36rpx;
        margin-right: 20rpx;
        color: #322418;
      }
      span {
        font-size: 30rpx;

        color: #c69c6d;
        vertical-align: middle;
        &:after {
          content: "元";
        }
      }
    }
    .desc {
      display: block;
      padding-left: 20rpx;
      box-sizing: border-box;
      width: 80%;
      strong {
        display: inline-block;
        color: #442818;
        font-size: 30rpx;
      }
    }
    .cart-icons {
      width: 70rpx;
      margin-right: 20rpx;
      float: right;
      height: 70rpx;
      border-radius: 50%;
      border-radius: 50%;
      background: #c69c6d;
      margin-top: -34rpx;
      text-align: center;
      background-size: 45rpx;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEAklEQVRoQ+2ZaahVVRTHfz+abB4pK4gmqw8RVBIVBWHWl76UUVE0KRbZgFlSNIDRAEFo4QdpwCawMgwJ8pOFRASFDYREpIFFEEaUFQlp1Ir9WOdxu171nnPfPb0Xbbi89+47a63/76y19177HJngwwmun/8WQEQ8CjyQWdkGfAk8rr4yXjP1jwxExGbgoB5in1TvGo8Q3QCdGejWe7X62niD2OkciIiFQHXnl6nXTjSAE4ENKfpr9bgKICLmAEe0BPQXsEZ9rzveLlehiNgK7JmG+6lbIuJyYEVL4jvDLAFuV6P6sh+Aj4Ez0uAc9YN/EaDImK+W0h4Z/QC8DFyX19+sPld+j4hbgcNbysJpwGUZa4N6Uh2Ae8tekAaL1bktiR4NExH7AL8Au+eXk9RS2n1l4BLgrTQsE2la2wCZ8d+BvTL23mr5uy+AY4GNabhZPaRtgIgoJVO6gjI2qUf2XUJJ/xuwbxpNVr9vE6Jr0VitXlwX4EPgrDSarr7TMsBDwIKMuUi9uy7AS8D1aTRHfbplgDeAGRlzpvpiXYAHgUfSaKE6v2WA9cCUjDlVLXvTyNjlPpBz4CqgauTeVC9tCyAiShcwsmQCpaUoK1Bp9WsBnAl8lDafq6e2CDAVWJvx1qsnd8buNwP7A7+m4VZ1UosAM4HnM94K9YraAFlGZemsWodj1G/bgIiIRcC8jLVAfbgpwPvAuWk8TV3TEsBqYHrGmqGubApQlq4b0ni0qRs2RERs6jh3TFG/agpQDvvlyFnGE+o9LYg/GPgp42xTq15oNHRfkzjnwJXA8rRcqVYby9A4IuJC4O0MsFatuoFGAOVQU20g69TSow9tRMQewCrgogyyRL2tO2CdDJT0jbSwZWOps5RGxIHAoUDpZMvPXp/u/x3QJbbnwtE3QJZR54Q6Wv0uIoqPO4GjOoR1i9ltwFS9ql7Ty0ddgPJU4Lx0dIH6bkQUx8sGFNjLvLQPXwDlCPuM+udYALwA3JiOZqtLI6Jzcu+IYwvwY52P+nM/N6VuBu4HHkvH5ZnpfVlaNwGH7UDgD+of/Yhpck1dgNKHvJ6BtutLmggY1KYuQOlC12XQjerxgwoY1L4WQJZLZ1NXzgjVYXtQLTuzX66WCb3daAJwB7B4mGp7+N7hGaQ2QGbhloQou2UbY2wBEuIU4PzcwBrdiBrkY1dCNYK2cmnjOxcR5V3B0nxe9ClQzgg9J1q/JE18NgKIiNL3fJabV6WvvF87Xf2mX8Gd1zX12RRgdvYo3VrnqU81BGjksynArCyfbq1z1UZLbEQ08tkUYHLuyKX/GasSauSzEUAuoycAzwJnA58As9TqhWCTKipvfWr7bAzQSOEQjP4HGMJNreXybxh8i0BMr9orAAAAAElFTkSuQmCC");
    }
  }
}
</style>