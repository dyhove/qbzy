let express = require("express") //引入express
let Mock = require("mockjs") //引入mock
let logindata = require("./common/login.json") //引入login数据
const menusData = require("./common/menus.json") //引入侧边栏数据
const usersData = require("./common/users.json") //引入用户数据
const rolesData = require("./common/roles.json") //角色列表
const rightsData = require("./common/rights.json") //权限列表
const shoplistData = require("./common/shoplist.json") //商品列表
const shopclassData = require("./common/shopclass.json") //商品分类
const ordersData = require("./common/orders.json") //订单管理
const rolesTree = require("./common/rolesTree.json") /**权限 */
let app = express() //实例化express

/**登录接口 */
app.use("/login", function (req, res) {
  res.json(
    Mock.mock({
      ...logindata
    })
  )
})

/**侧边栏接口 */
app.use("/menus", function (req, res) {
  res.json(
    Mock.mock({
      ...menusData
    })
  )
})

// 用户数据
app.use("/users", function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      ...usersData
    })
  )
})

// 角色列表
app.use("/roles", function (req, res) {
  res.json(
    Mock.mock({
      ...rolesData
    })
  )
})

// 权限列表
app.use("/rights", function (req, res) {
  res.json(
    Mock.mock({
      ...rightsData
    })
  )
})

// 商品列表
app.use("/goods", function (req, res) {
  res.json(
    Mock.mock({
      ...shoplistData
    })
  )
})

// 商品分类
app.use("/categories", function (req, res) {
  res.json(
    Mock.mock({
      ...shopclassData
    })
  )
})

// 订单管理
app.use("/orders", function (req, res) {
  res.json(
    Mock.mock({
      ...ordersData
    })
  )
})

// 权限树
app.use("/tree", function (req, res) {
  res.json(
    Mock.mock({
      ...rolesTree
    })
  )
})

app.listen("8091", () => {
  console.log("监听端口 8091")
})
