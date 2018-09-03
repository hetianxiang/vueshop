const Router = require('koa-router')
let routers = new Router()
routers.get('/', async (ctx) => {
  ctx.body = '这是用户操作首页'
})
routers.get('/register', async (ctx) => {
  ctx.body = '用户注册接口'
})
module.exports = routers
