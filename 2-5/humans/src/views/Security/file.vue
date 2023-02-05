<template>
  <div class="file">
    <div class="header">
      <div class="text">
        <h2>全公司</h2>
      </div>
      <div class="block">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
    </div>
    <div>
      <ul class="lists" v-for="item in num" :key="item.id">
        <li class="ones">
          <div @click="flag = !flag">></div>
          <div>
            <div>社保报表</div>
            <div>社保报表</div>
          </div>
        </li>
        <li>
          <div>企业缴纳</div>
          <div>{{ item.enterprisePayment }}</div>
        </li>
        <li>
          <div>个人缴纳</div>
          <div>{{ item.personalPayment }}</div>
        </li>
        <li>
          <div>合计</div>
          <div>{{ item.total }}</div>
        </li>
      </ul>
    </div>
    <div class="nones" v-if="flag">
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
        <el-table :data="tableData" height="300" style="width: 100%">
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
  </div>
</template>

<script>
import { file, filelist } from '@/Api/Security'
export default {
  data() {
    return {
      value1: '',
      num: [],
      tableData: [],
      flag: false
    }
  },
  methods: {
    getlist() {
      // 发起请求
      file().then((res) => {
        console.log(res)
        this.num = res.data.data
        console.log(this.num)
      })
    },
    getlists() {
      filelist().then((res) => {
        console.log(res)
        this.tableData = res.data.data
      })
    }
  },
  created() {
    // console.log(this.value1)
    this.getlist()
    this.getlists()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.file {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 30px;
  border-bottom: 1px solid #ebeef5;
  .text {
    h2 {
      width: 100px;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      color: #409eff;
      padding-bottom: 10px;
      border-bottom: 1px solid #409eff;
    }
  }
  .block {
    width: 200px;
  }
}
.lists {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 30px;
  border-bottom: 1px solid #ebeef5;
  li {
    width: 20%;
    text-align: center;
    flex-wrap: wrap;
    border-right: 1px solid #8c8e93;
    padding-right: 20px;
    div {
      text-align: center;
      font-size: 20px;
      font-weight: 400;
    }
  }
  .ones {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
