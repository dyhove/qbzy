<template>
  <div>
    <div class="header">
      <el-button type="primary" @click="add">添加权限</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="name" label="名称" sortable width="180">
      </el-table-column>
      <el-table-column prop="code" label="标识" sortable width="180">
      </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button link type="text" size="small">添加</el-button>
          <el-button link type="text" size="small" @click="emits(scope.row)"
            >编辑</el-button
          >
          <el-button link type="text" size="small" @click="dels(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="权限名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="权限标识" prop="code">
          <el-input v-model="ruleForm.code"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" prop="description">
          <el-input v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="开启">
          <template>
            <el-switch
              v-model="value"
              active-color="#409eff"
              inactive-color="#dcdfe6"
            >
            </el-switch>
          </template>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="提示" :visible.sync="dialogVisibles" width="30%">
      <el-form
        :model="ruleForm1"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="权限名称" prop="name">
          <el-input v-model="ruleForm1.name"></el-input>
        </el-form-item>
        <el-form-item label="权限标识" prop="code">
          <el-input v-model="ruleForm1.code"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" prop="description">
          <el-input v-model="ruleForm1.description"></el-input>
        </el-form-item>
        <el-form-item label="开启">
          <template>
            <el-switch
              v-model="value"
              active-color="#409eff"
              inactive-color="#dcdfe6"
            >
            </el-switch>
          </template>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForms('ruleForm1')"
            >立即创建</el-button
          >
          <el-button @click="resetForms('ruleForm1')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {
  permission,
  Addpermission,
  Editpermission,
  delpermission
} from '../../Api/jurisdiction'
export default {
  data() {
    return {
      tableData: [{}],
      dialogVisible: false,
      dialogVisibles: false,
      value: false,
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      ruleForm: {
        name: '',
        code: '',
        description: ''
      },
      ruleForm1: {
        name: '',
        code: '',
        description: ''
      },
      ids: ''
    }
  },
  methods: {
    // 获取权限列表
    getList() {
      permission().then((res) => {
        console.log(res)
        this.tableData = res.data.data
      })
    },
    // 添加权限
    add() {
      this.dialogVisible = true
    },
    //编辑
    emits(val) {
      console.log(val)
      this.ruleForm1.name = val.name
      this.ruleForm1.code = val.code
      this.ruleForm1.description = val.description
      this.dialogVisibles = true
    },
    // 删除
    dels(val) {
      console.log(val)
      this.ids = val.id
      console.log(this.ids)
      delpermission(this.ids).then((res) => {
        console.log(res)
        if (res.data.code == 10000) {
          this.$message({
            message: res.data.message,
            type: 'success'
          })
          this.getList()
        } else {
          this.$message({
            message: res.data.message,
            type: 'warning'
          })
        }
      })
    },
    //提交编辑
    submitForms(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!")
          Editpermission(this.ruleForm1).then((res) => {
            console.log(res)
            this.dialogVisibles = false
            this.getList()
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //提交添加
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!")
          Addpermission(this.ruleForm).then((res) => {
            console.log(res)
            this.dialogVisible = false
            this.getList()
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
    // 添加权限
  },
  created() {
    this.getList()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
