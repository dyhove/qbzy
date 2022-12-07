let express = require("express") //引入express
let Mock = require("mockjs") //引入mock
const loginData = require("./common/login.json")
let app = express() //实例化express

/**登录接口 */
app.use("/login", function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})

app.listen("8090", () => {
  console.log("监听端口 8090")
})
