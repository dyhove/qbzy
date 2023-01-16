<!-- 社保月报表  -->
<template>
  <div class="SecMonreport">
    <div class="box">
      <el-card class="box-card">
        <!-- 顶部 -->
        <template #header>
          <div class="card-header">
            <span class="paddTit">社保报表</span>
          </div>
        </template>
        <!-- 中间部分 -->
        <div class="card-header">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
            "
          >
            <div style="display: flex; align-items: center">
              <span
                style="display: flex; align-items: center; margin-right: 20px"
              >
                <span class="color" style="background-color: #cfeffe"></span
                >已离职
              </span>
              <span
                style="display: flex; align-items: center; margin-right: 20px"
              >
                <span class="color" style="background-color: #a8f8bb"></span
                >再入职
              </span>
              <span
                style="display: flex; align-items: center; margin-right: 20px"
              >
                <span class="color" style="background-color: #fedbd7"></span
                >公司合计
              </span>
              <span
                style="display: flex; align-items: center; margin-right: 20px"
              >
                <span class="color" style="background-color: #ffe8c9"></span
                >一级部门
              </span>
              <span style="display: flex; align-items: center">
                <span class="color" style="background-color: #fdfcd5"></span
                >二级部门
              </span>
            </div>
            <div>
              <el-button size="small" type="primary">导出</el-button>
            </div>
          </div>
        </div>
        <!-- 表格 -->
        <el-table
          border
          :data="tableData.tableData"
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column type="index" label="序号" width="60" />
          <el-table-column prop="username" label="姓名" />
          <el-table-column prop="timeOfEntry" label="入职时间" width="160" />
          <el-table-column prop="mobile" label="手机号" />
          <el-table-column prop="idNumber" label="身份证号码" width="150" />
          <el-table-column prop="theHighestDegreeOfEducation" label="学历" />
          <el-table-column prop="address" label="开户行" />
          <el-table-column prop="firstLevelDepartment" label="一级部门" />
          <el-table-column prop="address" label="二级部门" />
          <el-table-column prop="address" label="工作城市" />
          <el-table-column
            prop="socialSecurityComputerNumber"
            label="社保电脑号"
          />
          <el-table-column prop="address" label="公积金账号" />
          <el-table-column prop="address" label="离职时间" />
          <el-table-column prop="address" label="户籍类型" />
          <el-table-column prop="providentFundCity" label="参保城市" />
          <el-table-column prop="socialSecurityMonth" label="社保月份" />
          <el-table-column prop="socialSecurityBase" label="社保基数" />
          <el-table-column prop="socialSecurity" label="社保合计" />
          <el-table-column prop="socialSecurityEnterprise" label="社保企业" />
          <el-table-column prop="socialSecurityIndividual" label="社保个人" />
          <el-table-column prop="providentFundCity" label="公积金城市" />
          <el-table-column prop="socialSecurityMonth" label="公积金月份" />
          <el-table-column prop="providentFundBase" label="公积金基数" />
          <el-table-column prop="providentFundBase" label="公积金企业基数" />
          <el-table-column
            prop="personalRatioOfProvidentFund"
            label="公积金企业比例"
          />
          <el-table-column prop="providentFundBase" label="公积金个人基数" />
          <el-table-column
            prop="personalRatioOfProvidentFund"
            label="公积金个人比例"
          />
          <el-table-column prop="totalProvidentFund" label="公积金合计" />
          <el-table-column prop="providentFundEnterprises" label="公积金企业" />
          <el-table-column prop="providentFundIndividual" label="公积金个人" />
          <el-table-column prop="address" label="养老企业基数" />
          <el-table-column prop="address" label="养老企业比例" />
          <el-table-column prop="address" label="养老企业" />
          <el-table-column prop="address" label="养老个人基数" />
          <el-table-column prop="address" label="养老个人比例" />
          <el-table-column prop="address" label="养老个人" />
          <el-table-column prop="address" label="失业企业基数" />
          <el-table-column prop="address" label="失业企业比例" />
          <el-table-column prop="address" label="失业企业" />
          <el-table-column prop="address" label="失业个人基数" />
          <el-table-column prop="address" label="失业个人比例" />
          <el-table-column prop="address" label="失业个人" />
          <el-table-column prop="address" label="医疗企业基数" />
          <el-table-column prop="address" label="医疗企业比例" />
          <el-table-column prop="address" label="医疗企业" />
          <el-table-column prop="address" label="医疗个人基数" />
          <el-table-column prop="address" label="医疗个人比例" />
          <el-table-column prop="address" label="医疗个人" />
          <el-table-column prop="address" label="工伤企业基数" />
          <el-table-column prop="address" label="工伤企业比例" />
          <el-table-column prop="address" label="工伤企业" />
          <el-table-column prop="address" label="生育企业基数" />
          <el-table-column prop="address" label="生育企业比例" />
          <el-table-column prop="address" label="生育企业" />
          <el-table-column prop="address" label="大病企业基数" />
          <el-table-column prop="address" label="大病企业比例" />
          <el-table-column prop="address" label="大病企业" />
          <el-table-column prop="address" label="大病个人基数" />
          <el-table-column prop="address" label="大病个人比例" />
          <el-table-column prop="address" label="大病个人" />
          <el-table-column prop="providentFundNotes" label="公积金备注" />
          <el-table-column prop="socialSecurityNotes" label="社保备注" />
        </el-table>
        <!-- 底部 -->
        <div class="footer" style="margin-top: 20px; text-align: center">
          <el-button type="primary">归档01月份报表</el-button>
          <el-button type="primary">新建报表</el-button>
          <el-button type="info">取消</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { getMonreport } from '@/api/Security'
let tableData: Array<object> = reactive({
  tableData: []
})
/*请求数据*/
getMonreport().then((res) => {
  console.log(res)
  tableData.tableData = res.data.data
})
</script>

<style lang="scss" scoped>
.SecMonreport {
  height: 100%;
}
.box {
  background-color: #eaecef;
  padding: 15px;
}
.paddTit {
  padding: 0 20px 16px;
  font-weight: 900;
  color: #409eff;
  border-bottom: 3px solid #409eff;
}
.color {
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 1px solid transparent;
  margin-right: 5px;
}

</style>
