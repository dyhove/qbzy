<template>
  <div class="box">
    <el-row>
      <el-col :span="7">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-button class="btn" type="primary" @click="dialogFormVisible = true">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index"> </el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="mobile" label="电话"> </el-table-column>
        <el-table-column prop="role_name" label="角色">炒鸡管理员</el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="handleEdit(scope.row, scope.$index)"
            ></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row)"></el-button>
            <el-button size="mini" type="warning" icon="el-icon-setting"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box {
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  .table {
    margin: 20px 0;
    height: 100%;
  }
}
</style>
