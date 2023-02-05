<template>
  <!-- 工资报表 -->
  <div class="Atrtreport">
    <el-card class="card">
      <el-tabs v-model="activeName">
        <el-tab-pane
          label="工资报表"
          name="first"
          style="font-size: 20px"
        ></el-tab-pane>
      </el-tabs>
      <div class="btn">
        <el-button type="primary">导出</el-button>
      </div>
      <el-table :data="tableData" border>
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" width="130">
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" width="100">
        </el-table-column>
        <el-table-column prop="departmentName" label="部门名称" width="120">
        </el-table-column>
        <el-table-column prop="inServiceStatus" label="在职状态" width="100">
          <template slot-scope="scope">
            {{ scope.row.inServiceStatus == '1' ? '在职' : '离职' }}
          </template>
        </el-table-column>
        <el-table-column
          prop="providentFundIndividual"
          label="公积金个人"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="socialSecurityIndividual"
          label="社保个人"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="socialSecurityEnterprise"
          label="社保企业"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="providentFundEnterprises"
          label="公积金企业"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="socialSecurityProvidentFundEnterprises"
          label="公积金社保企业"
          width="160"
        ></el-table-column>
        <el-table-column prop="currentBaseSalary" label="基本工资">
        </el-table-column>
        <el-table-column prop="baseSalaryByMonth" label="岗位工资">
        </el-table-column>
        <el-table-column prop="salaryChangeAmount" label="福利津贴">
        </el-table-column>
        <el-table-column prop="attendanceDeductionMonthly" label="考勤扣款">
        </el-table-column>
        <el-table-column
          prop="currentSalaryTotalBase"
          label="税前工资合计"
          width="160"
        >
        </el-table-column>
        <el-table-column prop="salaryByTax" label="应纳税工资" width="140">
        </el-table-column>
        <el-table-column prop="salaryBeforeTax" label="应扣税">
        </el-table-column>
        <el-table-column prop="payment" label="实发工资"> </el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next" :total="10"> </el-pagination>
      <div class="but">
        <el-button type="primary">归档03报表</el-button>
        <el-button type="primary">新建报表</el-button>
        <el-button>取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getreport } from '@/Api/Wages'
export default {
  data() {
    return {
      activeName: 'first',
      tableData: [],
      params: {
        yearMonth: 202003,
        opType: 1
      }
    }
  },
  created() {
    /*请求数据*/
    getreport(this.params).then((res) => {
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

    .btn {
      text-align: right;
      margin-top: 15px;
    }

    .el-table {
      margin-top: 20px;
      font-size: 18px;
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
