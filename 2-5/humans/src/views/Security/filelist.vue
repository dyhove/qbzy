<template>
  <div>
    <div class="text">
      <h2>社区报表</h2>
    </div>
    <div class="headersnoe">
      <ul class="nonelist">
        <li>
          <div class="bule w"></div>
          <div>已离职</div>
        </li>
        <li>
          <div class="green w"></div>
          <div>再入职</div>
        </li>
        <li>
          <div class="pink w"></div>
          <div>公司合计</div>
        </li>
        <li>
          <div class="orange w"></div>
          <div>一级部门</div>
        </li>
        <li>
          <div class="yellow w"></div>
          <div>二级部门</div>
        </li>
      </ul>
      <ul>
        <i class="el-icon-search"></i>
        <button class="btn">导出</button>
      </ul>
    </div>
    <div class="tabls">
      <el-table :data="tableData" style="width: 100%">
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
    </div>
  </div>
</template>

<script>
import { filelist } from '@/Api/Security'
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    getlists() {
      filelist().then((res) => {
        console.log(res)
        this.tableData = res.data.data
      })
    }
  },
  created() {
    this.getlists()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.text {
  width: 150px;
  text-align: center;
  color: #5788fe;
  font-size: 15px;
  border-bottom: 3px solid #5788fe;
  h2 {
    padding: 20px;
  }
}
.headersnoe {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nonelist {
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .w {
      width: 20px;
      height: 20px;
    }
    .bule {
      background-color: #cfeffe;
    }
    .green {
      background-color: #a8f8bb;
    }
    .pink {
      background-color: #fedbd7;
    }
    .orange {
      background-color: #ffe8c9;
    }
    .yellow {
      background-color: #fdfcd5;
    }
  }
}
.btn {
  border: 0;
  width: 50px;
  height: 30px;
  border: 1px solid #098658;
  color: #098658;
}
.tabls {
  height: 440px;
}
</style>
