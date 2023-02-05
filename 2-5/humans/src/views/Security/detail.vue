<template>
  <div class="Secdetail">
    <el-card class="card">
      <!-- 头部 -->
      <div class="box">
        <div class="left">
          <div class="img">
            <img src="@/assets/Apple.png" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="top">
            <span class="span1">{{ userInfo.username }}</span>
            <span class="span2" v-if="userInfo.enableState == 1">在职</span>
            <span class="span3" v-else>离职</span>
          </div>
          <div class="con">
            <span class="span">最新工资基数</span>
            <span class="span"
              >入职时间：<span>{{
                userInfo.timeOfEntry ? userInfo.timeOfEntry.slice(0, 10) : ''
              }}</span></span
            >
            <span class="span"
              >联系电话：<span>{{ userInfo.mobile }}</span></span
            >
          </div>
          <div class="foot">
            <span
              >本月不缴纳社保
              <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch
            ></span>
            <span
              >本月不缴纳公积金
              <el-switch
                v-model="value1"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch
            ></span>
          </div>
        </div>
      </div>
      <!-- 表单1 -->
      <div class="form">
        <el-form :model="userSecurity" label-width="80px" size="mini">
          <el-form-item label="参保城市">
            <el-select
              v-model="userSecurity.participatingInTheCity"
              placeholder="请选择"
            >
              <el-option label="北京" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="社保类型">
            <el-select v-model="name" placeholder="请选择">
              <el-option label="首次开户" value="shoucikaihu"></el-option>
              <el-option label="非首次开户" value="feishoucikaihui"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="户籍类型">
            <el-select v-model="name1" placeholder="请选择">
              <el-option label="本市城镇" value="benshichengzhen"></el-option>
              <el-option label="本市农村" value="benshinongcun"></el-option>
              <el-option label="外埠城镇" value="waibuchengzhen"></el-option>
              <el-option label="外埠农村" value="waibunongcun"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="社保基数">
            <div class="input">
              <el-input v-model="userSecurity.providentFundBase"></el-input>
              <span>（基数范围是3387 ~ 25401）</span>
            </div>
          </el-form-item>
          <el-form-item label="工伤比例">
            <div class="input">
              <el-input v-model="userSecurity.industrialInjuryRatio"></el-input>
              <span>（比例范围是0.2％ ~ 3％，推荐0.2％）</span>
            </div>
          </el-form-item>
          <el-form-item label="社保缴纳">
            <div class="input">
              <div>
                <span style="font-size: 14px; font-weight: 900">个人：</span>
                <el-input
                  v-model="userSecurity.socialSecurityType"
                  disabled
                  style="width: 160px"
                ></el-input>
              </div>
              <div>
                <span
                  style="font-size: 14px; font-weight: 900; margin-left: 10px"
                  >公司：</span
                >
                <el-input
                  v-model="userSecurity.socialSecurityType"
                  disabled
                  style="width: 160px"
                ></el-input>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <!-- 表格 -->
      <div class="table">
        <el-table :data="tableData" style="width: 90%">
          <el-table-column prop="name" label="缴费项目"> </el-table-column>
          <el-table-column prop="switchCompany" label="企业基数">
            <template slot-scope="scope">
              {{ scope.row.switchCompany == true ? '10000' : 'switchCompany' }}
            </template>
          </el-table-column>
          <el-table-column prop="scaleCompany" label="企业比例">
            <template slot-scope="scope">
              {{ scope.row.scaleCompany + '%' }}
            </template>
          </el-table-column>
          <el-table-column label="企业缴纳">
            <template>
              <el-input v-model="input" disabled></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="" label="个人基数"> </el-table-column>
          <el-table-column prop="scalePersonal" label="个人比例">
            <template slot-scope="scope">
              {{ scope.row.scalePersonal + '%' }}
            </template>
          </el-table-column>
          <el-table-column label="个人缴纳">
            <template>
              <el-input v-model="input1" disabled></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 底部表单 -->
      <div class="foot">
        <div class="form">
          <el-form :model="userSecurity" label-width="100px" size="mini">
            <el-form-item label="社保备注">
              <el-input
                v-model="userSecurity.socialSecurityNotes"
                type="textarea"
                style="width: 400px"
              ></el-input>
            </el-form-item>
            <el-form-item label="公积金城市">
              <el-select
                v-model="userSecurity.providentFundCity"
                placeholder="请选择"
              >
                <el-option label="北京" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公积金基数">
              <div class="input">
                <el-input v-model="userSecurity.providentFundBase"></el-input>
                <span>（基数范围是2273 ~ 25401）</span>
              </div>
            </el-form-item>
            <el-form-item label="企业比例">
              <div class="input">
                <el-input
                  v-model="userSecurity.enterpriseProportion"
                ></el-input>
                <span>（比例范围是5％ ~ 12％，推荐12％）</span>
              </div>
            </el-form-item>
            <el-form-item label="个人比例">
              <div class="input">
                <el-input v-model="userSecurity.personalProportion"></el-input>
                <span>（比例范围是5％ ~ 12％，推荐12％）</span>
              </div>
            </el-form-item>
            <el-form-item label="公积金缴纳">
              <div class="input">
                <div>
                  <span style="font-size: 14px; font-weight: 900">个人：</span>
                  <el-input
                    style="width: 160px"
                    v-model="userSecurity.personalProvidentFundPayment"
                  ></el-input>
                </div>
                <div>
                  <span
                    style="font-size: 14px; font-weight: 900; margin-left: 10px"
                    >公司：</span
                  >
                  <el-input
                    style="width: 160px"
                    v-model="userSecurity.enterpriseProvidentFundPayment"
                  ></el-input>
                </div>
                <span>（为自动测算结果，可手动调整）</span>
              </div>
            </el-form-item>
            <el-form-item label="公积金备注">
              <el-input
                type="textarea"
                style="width: 400px"
                v-model="userSecurity.providentFundNotes"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="btn">
        <el-button size="mini" type="primary">保存</el-button>
        <el-button size="mini">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getDetail, getDetailinfo } from '@/Api/Security'
export default {
  data() {
    return {
      value: false,
      value1: false,
      tableData: [],
      input: '1600.00',
      input1: '800.00',
      userInfo: {},
      userSecurity: {},
      name: '首次开户',
      name1: '本市农村'
    }
  },
  methods: {
    /*获取表格数据*/
    dateilTable() {
      getDetail().then((res) => {
        console.log(res)
        this.tableData = res.data.data
      })
    },
    /*获取个人信息*/
    detailinfo() {
      getDetailinfo(this.$route.params.id).then((res) => {
        console.log(res)
        this.userInfo = res.data.data.user
        this.userSecurity = res.data.data.userSocialSecurity
      })
    }
  },
  created() {
    this.dateilTable() //调用
    this.detailinfo()
  }
}
</script>

<style lang="scss" scoped>
.Secdetail {
  padding: 10px;
  .card {
    padding: 0 20px;
    // 头部样式
    .box {
      display: flex;
      .left {
        .img {
          width: 90px;
          height: 90px;
          border-radius: 100px;
          box-shadow: 0 2px 3px 0 #ccc;
          overflow: hidden;
          position: relative;
          img {
            width: 80px;
            height: 80px;
            text-align: center;
            position: absolute;
            left: 6px;
            top: 12px;
          }
        }
      }
      .right {
        margin-left: 30px;
        .top {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 900;
          .span2 {
            margin-left: 6px;
            font-size: 12px;
            font-weight: normal;
            padding: 2px 4px;
            color: #fff;
            background-color: #67c23a;
            border-radius: 4px;
          }
          .span3 {
            margin-left: 6px;
            font-size: 12px;
            font-weight: normal;
            padding: 2px 4px;
            color: #fff;
            background-color: #f56c6c;
            border-radius: 4px;
          }
        }
        .con {
          display: flex;
          align-items: center;
          font-size: 14px;
          margin: 10px 0 20px;
          .span {
            margin-right: 10px;
          }
        }
        .foot {
          font-size: 14px;
          display: flex;
          align-items: center;
          span {
            margin-right: 10px;
          }
        }
      }
    }
    // 表单样式
    .form {
      margin-top: 40px;
      width: 800px;
      margin-left: 30px;
      .input {
        display: flex;
        align-items: center;
        .el-input {
          width: 400px;
        }
      }
    }
    // 表格样式
    .table {
      margin-top: 40px;
      margin-left: 100px;
    }
    .btn {
      margin-left: 150px;
      margin-top: 20px;
    }
  }
}
</style>
