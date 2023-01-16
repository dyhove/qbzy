<template>
  <!-- 权限管理模块 -->
  <div class="Jurisdiction">
    <!-- 按钮 -->
    <div class="top">
      <el-button type="primary" size="mini">添加权限</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column label="菜单名称">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <i class="el-icon-money"></i>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="权限标识">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <div>name: {{ scope.row.name }}</div>
              <div>code: {{ scope.row.code }}</div>
            </template>
            <template #reference>
              <div>{{ scope.row.code }}</div>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="描述">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <div>name: {{ scope.row.name }}</div>
              <div>code: {{ scope.row.code }}</div>
            </template>
            <template #reference>
              <div>{{ scope.row.description }}</div>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button link type="text" size="small">添加</el-button>
          <el-button link type="text" size="small">编辑</el-button>
          <el-button link type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { permission } from "@/api/permission"
export default {
  data() {
    return {
      dialogVisible: false,
      // 表单数据
      form: {
        code: "",
        description: "",
        enVisible: "",
        id: "",
        name: "",
        pid: "",
        type: 1
      },
      /**表格数据*/
      tableData: []
    }
  },
  created() {
    /*请求数据*/
    permission().then((res) => {
      console.log(res)
      this.tableData = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
.Jurisdiction {
  margin: 10px;
  box-sizing: border-box;
  .top {
    text-align: right;
    background-color: #fff;
    padding: 10px;
  }
  .el-table {
    margin-top: 10px;
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>
