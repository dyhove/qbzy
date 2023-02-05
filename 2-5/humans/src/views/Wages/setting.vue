<!-- 工资设置 -->
<template>
  <div class="setting">
    <el-card class="card">
      <el-tabs v-model="activeName">
        <el-tab-pane label="计薪设置" name="first">
          <div class="box">
            <div style="margin-bottom: 6px">
              <span>对应社保自然月</span>
              <el-select
                v-model="value"
                placeholder="请选择"
                style="width: 270px"
              >
                <el-option label="本月" value="benyue"></el-option>
                <el-option label="次月" value="ciyue"></el-option>
              </el-select>
            </div>
            <div>
              <span>社保数据来源</span>
              <el-input class="input" v-model="input" type="text" disabled />
            </div>
            <div>
              <span>考勤数据来源</span>
              <el-input class="input" v-model="input1" type="text" disabled />
            </div>
          </div>
          <div class="btn">
            <el-button size="mini" type="primary">提交</el-button>
            <el-button size="mini">重置</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="津贴设置" name="second">
          <div class="form">
            <el-form ref="form" :model="setting" label-width="100px">
              <el-form-item label="通用方案">
                <el-input
                  v-model="setting.subsidyName"
                  style="width: 400px"
                ></el-input>
              </el-form-item>
              <el-form-item label="备注">
                <el-input
                  v-model="setting.subsidyRemark"
                  style="width: 400px"
                ></el-input>
              </el-form-item>
              <el-form-item label="津贴名称">
                <div class="list">
                  <el-input
                    v-model="name1"
                    style="width: 230px"
                    disabled
                  ></el-input>
                  <el-select
                    v-model="value1"
                    placeholder="请选择"
                    style="width: 270px; margin-left: 6px"
                  >
                    <el-option label="每出勤日" value="benyue"></el-option>
                    <el-option label="每月固定" value="ciyue"></el-option>
                  </el-select>
                  <i class="el-icon-question"></i>
                  <el-input
                    v-model="setting.transportationSubsidyAmount"
                    style="width: 230px"
                  ></el-input>
                </div>
                <div class="list">
                  <el-input
                    v-model="name2"
                    style="width: 230px"
                    disabled
                  ></el-input>
                  <el-select
                    v-model="value1"
                    placeholder="请选择"
                    style="width: 270px; margin-left: 6px"
                  >
                    <el-option label="每出勤日" value="benyue"></el-option>
                    <el-option label="每月固定" value="ciyue"></el-option>
                  </el-select>
                  <i class="el-icon-question"></i>
                  <el-input
                    v-model="setting.communicationSubsidyAmount"
                    style="width: 230px"
                  ></el-input>
                </div>
                <div class="list">
                  <el-input
                    v-model="name3"
                    style="width: 230px"
                    disabled
                  ></el-input>
                  <el-select
                    v-model="value1"
                    placeholder="请选择"
                    style="width: 270px; margin-left: 6px"
                  >
                    <el-option label="每出勤日" value="benyue"></el-option>
                    <el-option label="每月固定" value="ciyue"></el-option>
                  </el-select>
                  <i class="el-icon-question"></i>
                  <el-input
                    v-model="setting.lunchAllowanceAmount"
                    style="width: 230px"
                  ></el-input>
                </div>
                <div class="list">
                  <el-input
                    v-model="name4"
                    style="width: 230px"
                    disabled
                  ></el-input>
                  <el-select
                    v-model="value1"
                    placeholder="请选择"
                    style="width: 270px; margin-left: 6px"
                  >
                    <el-option label="每出勤日" value="benyue"></el-option>
                    <el-option label="每月固定" value="ciyue"></el-option>
                  </el-select>
                  <i class="el-icon-question"></i>
                  <el-input
                    v-model="setting.housingSubsidyAmount"
                    style="width: 230px"
                  ></el-input>
                </div>
              </el-form-item>
              <el-form-item label="通用计税方式">
                <el-radio v-model="radio" label="1">税前</el-radio>
                <el-radio v-model="radio" label="2">税后</el-radio>
              </el-form-item>
            </el-form>
          </div>
          <div class="btn">
            <el-button size="mini" type="primary">提交</el-button>
            <el-button size="mini">重置</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import { getsetting } from '@/Api/Wages'
export default {
  data() {
    return {
      activeName: 'first',
      input: '社保模块',
      input1: '考勤模块',
      value: '次月',
      value1: '每月固定',
      radio: '2',
      setting: {},
      name1: '交通补贴',
      name2: '通讯补贴',
      name3: '午餐补贴',
      name4: '住房补贴'
    }
  },
  created() {
    getsetting().then((res) => {
      console.log(res)
      this.setting = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
.setting {
  padding: 10px;

  .card {
    padding: 10px;

    .el-tab-pane {
      padding: 30px 40px;

      .box {
        div {
          margin-bottom: 15px;
          font-size: 14px;

          span {
            display: inline-block;
            width: 130px;
          }

          .input {
            width: 270px;
            height: 25px;
          }
        }
      }

      .btn {
        margin-left: 130px;
      }

      .form {
        width: 700px;

        .list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;

          .el-icon-question {
            margin: 0 6px;
          }
        }
      }
    }
  }
}
</style>
