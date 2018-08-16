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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      msg: 'shoping',
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
      url: 'https://www.easy-mock.com/mock/5ae2427800247c2aa1efe442/SmileVue/',
      method: 'get'
    })
      .then(response => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    hello () {

    }
  },
  components: {}
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

</style>
