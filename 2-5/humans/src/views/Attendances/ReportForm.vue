<template>
  <!-- 考勤报表模块 -->
  <div class="Atrtreport">
    <el-card class="card">
      <h3>202303月人事报表</h3>
      <el-tabs v-model="activeName">
        <el-tab-pane label="考勤统计" name="first"></el-tab-pane>
      </el-tabs>
      <div class="btn">
        <el-button type="primary" size="mini" @click="exportExcel()"
          >导出</el-button
        >
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" border>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="workNumber" label="工号"> </el-table-column>
        <el-table-column prop="mobile" label="手机号"> </el-table-column>
        <el-table-column prop="department" label="部门"> </el-table-column>
        <el-table-column prop="dayOffLeaveDays" label="事假"> </el-table-column>
        <el-table-column prop="absenceDays" label="调休"> </el-table-column>
        <el-table-column prop="normalDays" label="正常"> </el-table-column>
        <el-table-column prop="laterTimes" label="迟到次数"> </el-table-column>
        <el-table-column prop="earlyTimes" label="早退次数"> </el-table-column>
        <el-table-column prop="archiveDate" label="日均时长"> </el-table-column>
        <el-table-column prop="leaveDays" label="旷工天数"> </el-table-column>
        <el-table-column prop="archiveDate" label="是否全勤"> </el-table-column>
        <el-table-column prop="archiveDate" label="实际出勤天数">
        </el-table-column>
        <el-table-column prop="archiveDate" label="应出勤工作日">
        </el-table-column>
        <el-table-column prop="archiveDate" label="计薪标准"> </el-table-column>
        <el-table-column prop="archiveDate" label="计薪天数"> </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination layout="prev, pager, next" :total="10"> </el-pagination>
      <!-- 底部按钮 -->
      <div class="but">
        <el-button size="mini" type="primary">归档202303月份报表</el-button>
        <el-button size="mini" type="primary">新建报表</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { Atrtgetreport } from '@/Api/Attendance'
export default {
  data() {
    return {
      activeName: 'first',
      tableData: []
    }
  },
  created() {
    Atrtgetreport().then((res) => {
      console.log(res)
      this.tableData = res.data.data
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.Atrtreport {
  padding: 10px;

  .card {
    padding: 0 10px;

    h3 {
      text-align: center;
    }

    .btn {
      text-align: right;
      margin-top: 15px;
    }

    .el-table {
      margin-top: 20px;
    }
    .el-pagination {
      text-align: center;
      margin-top: 15px;
    }
    .but {
      text-align: center;
      margin-top: 10px;
    }
  }
}
</style>
