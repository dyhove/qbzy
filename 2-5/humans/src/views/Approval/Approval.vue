<template>
  <div>
    <div class="header">
      <div class="text">当前审批中0本月审批通过1本月审批驳回0</div>
      <el-button type="primary" @click="toAPPprocess">流程设置</el-button>
    </div>
    <div class="tables">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" :index="indexMethod"> </el-table-column>
        <el-table-column
          prop="processName"
          sortable
          label="审批类型"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="username"
          sortable
          label="申请人"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="procCurrNodeUserName"
          label="当前审批人"
          sortable
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="procApplyTime"
          label="审批发起时间"
          sortable
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="processState"
          label="审批状态"
          sortable
          show-overflow-tooltip
        >
          <template scope="scope">
            <div>
              <div
                v-if="scope.row.processState === '1'"
                type="success"
                size="mini"
              >
                审批中
              </div>
              <div
                v-else-if="scope.row.processState === '2'"
                type="success"
                size="mini"
              >
                审批通过
              </div>
              <div
                v-else-if="scope.row.processState === '3'"
                type="danger"
                size="mini"
              >
                撤销
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="params.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getlist, process } from '@/Api/Approval'
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      indexMethod: 1,
      params: {
        page: 1,
        pageSize: 5
      },
      total: 5
    }
  },
  methods: {
    getlists() {
      getlist(this.params).then((res) => {
        console.log(res)
        this.tableData = res.data.data.rows
        this.total = res.data.data.total
      })
    },

    process() {
      process().then((res) => {
        console.log(res)
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleSizeChange(val) {
      this.params.pageSize = val
      this.getlists()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.getlists()
      console.log(`当前页: ${val}`)
    },
    handleClick(row) {
      console.log(row)
      this.$router.push({
        path: '/Appdetail',
        query: {
          id: row.processId
        }
      })
    },
    toAPPprocess() {
      this.$router.push({
        path: '/APPprocess'
      })
    }
  },
  created() {
    this.getlists()
    this.getDetails()
    this.process()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.header {
  background-color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
