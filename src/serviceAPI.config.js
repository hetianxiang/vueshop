var BASE_URL = 'https://www.easy-mock.com/mock/5b74dac43f00382f3878a265/smilevue/mock'
const LOCALURL = 'http://localhost:3000/'
const URL = {
  getShoppingMallInfo: BASE_URL + 'index',
  getGoodsInfo: BASE_URL + 'getGoodsInfo',
  registerUser: LOCALURL + 'user/register', // 用户注册接口
  login: LOCALURL + 'user/login', // 用户注册接口
  getDetailGoodsInfo: LOCALURL + 'goods/getDetailGoodsInfo', // 得到商品详细数据
  getCategoryList: LOCALURL + 'goods/getCategoryList' // 得到大类信息
}

module.exports = URL
