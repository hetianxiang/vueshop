<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img :src="locationIcon" width="80%" class="location-icon" />
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="imgs-con">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerPicArray" :key="index">
          <img :src="item.imageUrl" alt="" srcset="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img :src="cate.image" width="100%" />
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <div class="ad-banner">
      <img :src="adBanner.PICTURE_ADDRESS" width="100%">
    </div>
    <shopping-mall :recommendGoods="recommendGoods"/>
  </div>
</template>

<script>
import axios from 'axios'
import ShoppingMall from './ShoppingMall'
export default {
  data () {
    return {
      msg: 'shoping',
      category: [],
      adBanner: '',
      recommendGoods: [],
      locationIcon: require('../../assets/images/location.png'),
      bannerPicArray: [{
        imageUrl: 'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'
      },
      {
        imageUrl: 'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'
      },
      {
        imageUrl: 'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'
      }
      ]
    }
  },
  created () {
    axios({
      url: 'https://www.easy-mock.com/mock/5b74dac43f00382f3878a265/smilevue/mock',
      method: 'get'
    })
      .then(response => {
        if (response.status === 200) {
          this.category = response.data.data.category
          this.adBanner = response.data.data.advertesPicture // 获得广告图片
          this.recommendGoods = response.data.data.recommend // 推荐商品
          console.log(this.category)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    hello () {

    }
  },
  components: {ShoppingMall}
}

</script>

<style scoped>
  .search-bar {
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
  }

  .search-input {
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #fff !important;
    background-color: #e5017d;
    color: #fff;
  }

  .location-icon {
    padding-top: 0.2rem;
    padding-left: 0.3rem;
  }

  .imgs-con img {
    width: 20rem;
  }

  .type-bar {
    background-color: #fff;
    margin: 0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .type-bar div {
    width: 20%;
    padding: .3rem;
    font-size: 12px;
    text-align: center;
  }

</style>
