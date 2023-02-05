<template>
  <!-- 定薪弹框 -->
  <div class="SalaryFixing">
    <el-dialog title="定薪" :visible.sync="dialogVisible" width="40%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="当前基本工资">
          <el-input v-model="form.name" placeholder="当前基本工资"></el-input>
        </el-form-item>
        <el-form-item label="当前岗位工资">
          <el-input v-model="form.name" placeholder="当前岗位工资"></el-input>
        </el-form-item>
        <el-form-item label="当前工资合计">
          <el-input v-model="form.name" placeholder="0" disabled></el-input>
        </el-form-item>
        <el-form-item label="转正基本工资">
          <el-input v-model="form.name" placeholder="转正基本工资"></el-input>
        </el-form-item>
        <el-form-item label="转正岗位工资">
          <el-input v-model="form.name" placeholder="转正岗位工资"></el-input>
        </el-form-item>
        <el-form-item label="转正工资合计">
          <el-input v-model="form.name" placeholder="0" disabled></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">关 闭</el-button>
        <el-button size="mini" type="primary" @click="dialogVisible = false"
          >确 认</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
      form: {
        name: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.SalaryFixing {
  .el-input {
    width: 300px;
  }
}
</style>
