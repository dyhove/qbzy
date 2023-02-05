<template>
  <div>
    <div class="header">
      <div class="text">共{{ params.total }}条记录</div>
      <div>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
      </div>
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column prop="username" label="姓名" sortable>
        </el-table-column>
        <el-table-column prop="staffPhoto" label="头像" width="100">
          <template slot-scope="scope">
            <span v-if="scope.row.staffPhoto">
              <img :src="scope.row.staffPhoto" alt="" class="img" />
            </span>
            <span v-else>
              <img
                class="img"
                src="http://ihrm.itheima.net/static/img/bigUserHeader.fda3837f.png"
                alt=""
              />
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" sortable>
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable width="80">
        </el-table-column>
        <el-table-column prop="formOfEmployment" label="聘用形式" sortable>
          <template slot-scope="scope">
            <span v-if="scope.row.formOfEmployment == 2">非正式</span>
            <span v-if="scope.row.formOfEmployment == 1">正式</span>
          </template>
        </el-table-column>
        <el-table-column prop="departmentName" label="部门" sortable>
        </el-table-column>
        <el-table-column prop="timeOfEntry" label="入职时间" sortable>
          <template slot-scope="scope">
            <span>{{ scope.row.timeOfEntry.slice(0, 10) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="enableState" label="账户状态" sortable>
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.enableState"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          sortable
          width="300"
          fixed="right"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="
                $router.push({ name: 'Staffsee', params: { id: scope.row.id } })
              "
              >查看</el-button
            >
            <el-button type="text" size="small">转正</el-button>
            <el-button type="text" size="small">调岗</el-button>
            <el-button type="text" size="small">离职</el-button>
            <el-button type="text" size="small" @click="juese">角色</el-button>
            <el-button type="text" size="small" disabled>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.page"
        :page-size="params.pageSize"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="params.total"
      >
      </el-pagination>
      <el-dialog
        title="分配角色"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
      >
        <!-- 多选框 -->
        <el-checkbox v-model="checked">系统管理员</el-checkbox>
        <el-checkbox v-model="checked">人事经理</el-checkbox>
        <el-checkbox v-model="checked">人事专员</el-checkbox>
        <el-checkbox v-model="checked">薪资专员</el-checkbox>
        <el-checkbox v-model="checked">员工</el-checkbox>
        <el-checkbox v-model="checked">1</el-checkbox>
        <el-checkbox v-model="checked">1</el-checkbox>
        <el-checkbox v-model="checked">1</el-checkbox>
        <!-- 多选框 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getStaffIn } from '@/Api/StaffIn'
export default {
  data() {
    return {
      params: {
        page: 1,
        size: 5,
        total: 0
      },
      dialogVisible: false, //对话框
      tableData: []
    }
  },
  methods: {
    getList() {
      getStaffIn(this.params).then((res) => {
        console.log(res)
        this.tableData = res.data.data.rows
        this.params.total = res.data.data.total
      })
    },
    handleSizeChange(val) {
      this.params.pageSize = val
      this.getList()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.getList()
      console.log(`当前页: ${val}`)
    },
    // 角色
    juese() {
      this.dialogVisible = true
    }
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

<style lang='scss' scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ebeef5;
  .text {
    border: 1px solid#409eff;
    padding: 6px 10px;
    background-color: #e6f7ff;
  }
}
.img {
  width: 50px;
  height: 50px;
  border-radius: 100px;
}
</style>
