<template>
  <div class="home">
    <div class="login">
      <!-- 标题 -->
      <h1>iHRM后台登录系统</h1>
      <!-- 表单 -->
      <el-form class="from" ref="ruleFormRef" :model="ruleForm" :rules="rules">
        <el-form-item prop="mobile">
          <el-input placeholder="mobile" v-model="ruleForm.mobile" :prefix-icon="User" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="password" show-password v-model="ruleForm.password" :prefix-icon="Lock" />
        </el-form-item>
        <el-button class="btn" type="primary" @click="submitForm">登录</el-button>
        <div class="text">还没有账号？立即注册</div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import * as TS from '@/api/defind'
import { User, Lock } from '@element-plus/icons-vue'
import { login } from '@/api/login'
import { ElMessage } from 'element-plus'
const router = useRouter()

/*校验账号密码*/
const ruleForm = reactive<TS.LoginForm>({
  mobile: '13800000002',
  password: '123456'
})

/*表单验证*/
const rules = reactive<FormRules>({
  mobile: [
    {
      required: true,
      message: '用户名不能小于6位',
      trigger: 'blur',
      min: 6
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能小于6位',
      trigger: 'blur',
      min: 6
    }
  ]
})

/*登录*/
const submitForm = () => {
  login(ruleForm).then((res) => {
    console.log(res)
    if (res.code === 10000) {
      ElMessage({
        message: res.data.message,
        type: 'success',
      })
      router.replace('/home')
    }
  })
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/background.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
}

.login {
  padding: 10px;
  margin: 220px auto;

  .from {
    margin-top: 20px;

    .btn {
      width: 100%;
      height: 60px;
      font-size: 30px;
    }

    .text {
      font-weight: 900;
      font-size: 12px;
      text-align: center;
      margin-top: 20px;
      color: #fff;
    }
  }
}

h1 {
  margin: 0;
  color: #fff;
  font-size: 60px;
}
</style>
