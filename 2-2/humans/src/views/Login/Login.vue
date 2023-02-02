<template>
  <div class="login">
    <div class="loginhome">
      <h1>iHRM 后台登录系统</h1>
      <el-form class="from" ref="ruleForm" :model="form" :rules="rules">
        <el-form-item prop="mobile">
          <el-input placeholder="mobile" v-model="form.mobile" prefix-icon="el-icon-user" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="password" show-password v-model="form.password" prefix-icon="el-icon-lock" />
        </el-form-item>
        <el-button class="btn" type="primary" @click="submitForm">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/Api/login"
import { setToken } from "@/Untils/auth"
export default {
  data() {
    return {
      form: {
        mobile: "13800000002",
        password: "123456"
      },
      rules: {
        mobile: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  methods: {
    submitForm() {
      /*判空*/
      if (this.form.mobile == "" || this.form.password == "") {
        this.$message.error("账号或密码为空")
      } else {
        login(this.form).then((res) => {
          if (res.data.code == 10000) {
            console.log(res)
            setToken(res.data.data) //存储token
            this.$router.push("/home") //跳转页面
            //提示信息
            this.$message({
              title: "操作",
              message: "登录成功",
              type: "success"
            })
          } else {
            this.$message({
              title: "操作",
              message: res.data.message,
              type: "warning"
            })
          }
        })
      }
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url(../../assets/background.jpg) no-repeat;
  background-size: cover;
  padding: 1px;
  .from {
    margin-top: 20px;
  }
  .btn {
    width: 100%;
  }
}
h1 {
  color: #fff;
  font-family: "宋体";
  font-size: 42px;
  text-align: center;
}
.loginhome {
  width: 400px;
  padding: 10px;
  margin: 180px auto;
}
</style>
