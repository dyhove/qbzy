<template>
    <div class="Jurisdiction">
      <!-- 按钮 -->
      <div class="top">
        <Addmenu></Addmenu>
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="菜单名称">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-icon><FolderOpened /></el-icon>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="权限标识">
          <template #default="scope">
            <el-popover
              effect="light"
              trigger="hover"
              placement="top"
              width="auto"
            >
              <template #default>
                <div>name: {{ scope.row.name }}</div>
                <div>address: {{ scope.row.address }}</div>
              </template>
              <template #reference>
                <div>{{ scope.row.name }}</div>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="描述">
          <template #default="scope">
            <el-popover
              effect="light"
              trigger="hover"
              placement="top"
              width="auto"
            >
              <template #default>
                <div>name: {{ scope.row.name }}</div>
                <div>address: {{ scope.row.address }}</div>
              </template>
              <template #reference>
                <div>{{ scope.row.address }}</div>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="dialogVisible = true">添加权限点</el-button>
            <el-button link type="primary" size="small" @click="meixie">查看api权限</el-button>
            <el-button link type="primary" size="small" @click="meixie">查看</el-button>
            <el-button link type="primary" size="small" @click="meixie">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  
      <!-- 添加权限弹框 -->
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
          <el-form-item label="按钮样式">
            <el-input v-model="form.id" />
          </el-form-item>
          <el-form-item label="按钮icon">
            <el-input v-model="form.id" />
          </el-form-item>
          <el-form-item label="按钮状态">
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
  import { FolderOpened } from '@element-plus/icons-vue'
  import { ElMessage } from 'element-plus'
  import Addmenu from './Addmenu.vue'
  import { ref, reactive } from 'vue'
  const dialogVisible = ref(false)  //控制弹出框
  const value1 = ref(true)  // 控制开关
  // 表单数据
  const form = reactive({
    name: '',
    id: ''
  })
  components: {
    Addmenu
  }
  interface User {
    date: string
    name: string
    address: string
  }
  const meixie = () => {
    ElMessage.error('你的权限不够')
  }
  
  const tableData: User[] = [
    {
      date: 'SAAS企业管理',
      name: 'saas-clients',
      address: '用户管理菜单'
    },
    {
      date: '员工管理',
      name: 'employees',
      address: '用户管理菜单'
    },
    {
      date: '组织架构',
      name: 'departments',
      address: '组织架构菜单'
    },
    {
      date: '公司设置',
      name: 'settings',
      address: '公司设置菜单'
    },
    {
      date: '权限管理',
      name: 'permissions',
      address: '权限菜单'
    },
    {
      date: '社保',
      name: 'saaaa',
      address: '社保菜单aaaa'
    },
    {
      date: '考勤',
      name: 'attendances',
      address: '考勤'
    },
    {
      date: '工资',
      name: 'salarys',
      address: '工资模块'
    },
    {
      date: '员工自助',
      name: 'user12345',
      address: '员工自助'
    },
    {
      date: '审批',
      name: 'approvals',
      address: '审批'
    },
    {
      date: 'aaaa',
      name: 'bbbb',
      address: 'cccc'
    },
    {
      date: '123',
      name: '123',
      address: '123'
    }
  ]
  </script>
  
  <style lang="scss" scoped>
  .Jurisdiction {
    height: 100%;
    margin: 15px;
    background-color: #fff;
    padding: 0 20px;
    box-sizing: border-box;
    .top {
      text-align: right;
    }
    .el-table {
      margin-top: 20px;
    }
  }
  </style>
  