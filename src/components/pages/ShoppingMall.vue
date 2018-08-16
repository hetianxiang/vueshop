<template>
  <div>
    <!--Recommend goods area-->
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
       <swiper-default/>
      </div>
    </div>
  </div>
</template>

<script>
import swiperDefault from '../swipeDefault'
export default {
  props: ['recommendGoods'],
  components: {
    swiperDefault
  }
}

</script>

<style scoped>
  .recommend-area {
    background-color: #fff;
    margin-top: .3rem;
  }

  .recommend-title {
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: .2rem;
    color: #e5017d;
  }

  .recommend-body {
    border-bottom: 1px solid #eee;
  }

  .recommend-item {
    width: 99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
  }

</style>
