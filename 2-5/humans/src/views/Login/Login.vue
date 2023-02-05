<template>
  <div class="login">
    <div>
      <h1 class="title">IHRM 后台登陆系统</h1>
      <div class="loginform">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="mobile">
            <el-input v-model="ruleForm.mobile">
              <i slot="prefix" class="el-icon-user-solid"></i
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" show-password>
              <i slot="prefix" class="el-icon-lock"></i
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="submitForm"
              type="primary"
              @click="submitForm('ruleForm')"
              >立即创建</el-button
            >
          </el-form-item>
        </el-form>
        <div class="texts">
          <span class="mobile">账号:13800000002</span>
          <span>密码:123456</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/Api/login'
import { setToken } from '@/Untils/auth'
export default {
  data() {
    return {
      ruleForm: {
        mobile: '13800000002',
        password: '123456'
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号格式不正确',
            trigger: 'blur'
          }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
          login(this.ruleForm).then((res) => {
            console.log(res)
            if (res.data.code == 10000) {
              console.log(res)
              setToken(res.data.data) //存储token
              this.$router.push('/home') //跳转页面
              //提示信息
              this.$message({
                title: '操作',
                message: '登录成功',
                type: 'success'
              })
            } else {
              this.$message({
                title: '操作',
                message: res.data.message,
                type: 'warning'
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.texts {
  text-align: left;
  margin-top: 20px;
  color: #fff;
  .mobile {
    margin-right: 20px;
  }
}
.login {
  width: 100%;
  height: 100%;
  background: url(@/assets/background.jpg) no-repeat;
  background-size: cover;
  padding: 1px;
}
.title {
  color: #fff;
  font-size: 60px;
  text-align: center;
  margin-top: 200px;
  font-family: '宋体';
}
.loginform {
  width: 550px;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}
.submitForm {
  width: 100%;
  background-color: #407ffe;
}
</style>
