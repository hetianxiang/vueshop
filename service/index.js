const Koa = require('koa')
// const mongoose = require('mongoose')
const Router = require('koa-router')
let user = require('./appApi/user.js')
let router = new Router()
router.use('/user', user.routes())
const bodyParser = require('koa-bodyparser')
const {
  // connect,
  initSchema
} = require('./database/init.js')
const app = new Koa()
app.use(router.routes())
app.use(bodyParser())
app.use(router.allowedMethods())
// 引入connect
// const {connect} = require('./database/init.js')
console.log(initSchema)
// 立即执行函数
// ;
// (async () => {
//   await connect()
//   initSchema()
//   const User = mongoose.model('User')
//   let OneUser = new User({
//     userName: 'hetianxiang',
//     password: '123456'
//   })
//   OneUser.save().then(() => {
//     console.log('插入成功')
//   })
//   let users = await User.findOne({}).exec()
//   console.log('------------------')
//   console.log(users)
//   console.log('------------------')
// })()
// app.use(async (ctx) => {
//   ctx.body = '<h1>hello</h1>'
// })
app.listen(3000, () => {
  console.log('server is start')
})
