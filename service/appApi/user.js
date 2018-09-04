const Router = require('koa-router')
let routers = new Router()
routers.get('/', async (ctx) => {
  ctx.body = '这是用户操作首页'
})
routers.post('/register', async (ctx) => {
  // console.log(ctx)
  ctx.body = ctx.request.body
})
module.exports = routers
