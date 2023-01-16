<template>
  <div class="Apptop">
    <el-tag size="large"
      ><el-icon><InfoFilled /></el-icon> 当前审批中0 本月审批通过1
      本月审批驳回0</el-tag
    >
    <el-button type="primary" size="small" @click="router.push('/SecuritySetting')">流程设置</el-button>
  </div>
</template>

<script lang="ts" setup>
import { InfoFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style lang="scss" scoped>
.Apptop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin: 15px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
