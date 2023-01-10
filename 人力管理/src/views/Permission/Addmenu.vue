<template>
    <div>
      <el-button type="primary" :icon="Edit" @click="dialogVisible = true"
        >添加菜单</el-button
      >
      <!-- 弹出框 -->
      <el-dialog v-model="dialogVisible" title="编辑权限" width="40%">
        <el-form :model="form" label-width="100px">
          <el-form-item label="权限名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="权限标识">
            <el-input v-model="form.id" />
          </el-form-item>
          <el-form-item label="权限描述">
            <el-input v-model="form.id" />
          </el-form-item>
          <el-form-item label="企业可见">
            <span>不可见</span>
            <el-switch v-model="value1" />
            <span>可见</span>
          </el-form-item>
          <el-form-item label="菜单顺序">
            <el-input v-model="form.id" />
          </el-form-item>
          <el-form-item label="菜单icon">
            <el-input v-model="form.id" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { Edit } from '@element-plus/icons-vue'
  import { ref, reactive } from 'vue'
  const dialogVisible = ref(false)  //控制弹出框
  const value1 = ref(true)  // 控制开关
  // 表单数据
  const form = reactive({
    name: '',
    id: ''
  })
  </script>
  
  <style lang="scss" scoped>
  .el-button {
    margin-top: 20px;
  }
  </style>
  