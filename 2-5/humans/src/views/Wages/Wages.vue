<template>
  <!-- 工资 -->
  <div>
    <div class="box">
      <div class="top">
        <el-card class="box-card">
          <div>
            <div>
              <div class="flex">
                <span>
                  <el-tag size="large" style="font-size: 20px"
                    ><i class="el-icon-info"></i> 本月：入职 离职 调薪
                    未定薪</el-tag
                  >
                </span>
                <span class="shou">
                  <el-button type="danger" @click="$router.push('/setting')"
                    >设置</el-button
                  >
                  <el-button type="primary" @click="$router.push('/statement')"
                    >202003月报表</el-button
                  >
                </span>
              </div>
            </div>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 10px">
          <div class="card">
            <div>
              <b>聘用形式: </b>
              <span style="margin-right: 10px">
                <span>
                  <el-checkbox size="large" /><span class="text">正式</span>
                </span>
                <span>
                  <el-checkbox size="large" /><span class="text">非正式</span>
                </span>
              </span>
            </div>
            <div>
              <b>员工状态: </b>
              <span style="margin-right: 10px">
                <span>
                  <el-checkbox size="large" /><span class="text">在职</span>
                </span>
                <span>
                  <el-checkbox size="large" /><span class="text">离职</span>
                </span>
              </span>
            </div>
            <div>
              <b>部门：</b>
              <span
                class="span"
                v-for="(item, index) in WagesTop"
                :key="item.id"
              >
                <el-checkbox
                  size="large"
                  v-model="item.checked"
                  @change="fliter(item, index)"
                />
                <span class="text">{{ item.name }}</span></span
              >
            </div>
          </div>
        </el-card>
      </div>
      <div class="list">
        <el-card class="box-card" style="height: 100%">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="序号" type="index" width="60px" />
            <el-table-column prop="username" label="姓名" width="100x" />
            <el-table-column prop="mobile" label="手机" width="180" />
            <el-table-column prop="workNumber" label="工号" width="140" />
            <el-table-column
              prop="formOfEmployment"
              label="聘用形式"
              width="180"
            >
              <template slot-scope="scope">
                <span v-if="scope.row.formOfEmployment == 1">正式</span>
                <span v-else>非正式</span>
              </template>
            </el-table-column>
            <el-table-column prop="departmentName" label="部门" width="140" />
            <el-table-column prop="timeOfEntry" label="入职时间" width="140">
              <template slot-scope="scope">
                {{ scope.row.timeOfEntry.slice(0, 10) }}
              </template>
            </el-table-column>
            <el-table-column label="工资基数" width="140">
              <template #default="scope">
                {{ scope.row.currentBasicSalary + scope.row.currentPostWage }}
              </template>
            </el-table-column>
            <el-table-column prop="departmentName" label="津贴方案" width="140"
              >通用方案</el-table-column
            >
            <el-table-column label="操作" width="180">
              <template slot-scope="scope">
                <el-button
                  type="danger"
                  v-if="scope.row.currentBasicSalary == null"
                  style="margin-right: 20px"
                  >定薪</el-button
                >
                <el-button
                  type="primary"
                  v-else
                  style="margin-right: 20px"
                  @click="changeSalary(scope.row.id)"
                  >调薪</el-button
                >
                <el-button
                  type="text"
                  @click="
                    $router.push({
                      name: 'salaryDetails',
                      params: { id: scope.row.id }
                    })
                  "
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            :current-page="params.page"
            :page-size="params.pageSize"
            :page-sizes="[10, 20, 30, 50]"
            layout="total, prev, pager, next"
            :total="params.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-card>
      </div>
    </div>
    <!-- 定薪 -->
    <decidePay v-if="SalaryStatus"></decidePay>
    <!-- 调薪 -->
    <div class="changeSalary">
      <el-dialog title="调薪" :visible.sync="dialogVisible" width="40%">
        <div class="dialog">
          <div class="top" style="display: flex">
            <div class="left">
              <img
                src="http://ihrm.itheima.net/static/img/img.0615818f.jpeg"
                alt=""
                style="width: 200px"
              />
            </div>
            <div class="right" style="padding-top: 100px">
              <div>
                <span>部门：</span>
                <span></span>
              </div>
              <div style="margin-top: 20px">
                <span>入职时间：</span>
                <span>NaN-aN-aN</span>
              </div>
            </div>
          </div>
          <div class="foot">
            <el-form ref="form" :model="Salary" label-width="100px">
              <el-form-item label="调整基本工资">
                <div class="form">
                  <el-input
                    v-model="Salary.currentBasicSalary"
                    disabled
                    style="width: 200px"
                  ></el-input>
                  <span style="margin: 0 20px">-></span>
                  <el-input
                    placeholder="请输入调整后的基本工资"
                    style="width: 200px"
                  ></el-input>
                </div>
              </el-form-item>
              <el-form-item label="调整岗位工资">
                <div class="form">
                  <el-input
                    v-model="Salary.currentPostWage"
                    disabled
                    style="width: 200px"
                  ></el-input>
                  <span style="margin: 0 20px">-></span>
                  <el-input
                    placeholder="请输入调整后的岗位工资"
                    style="width: 200px"
                  ></el-input>
                </div>
              </el-form-item>
              <el-form-item label="工资合计">
                <div class="form">
                  <el-input
                    v-model="Salary.currentBasicSalary"
                    disabled
                    style="width: 200px"
                  ></el-input>
                  <span style="margin: 0 20px">-></span>
                  <el-input
                    disabled
                    placeholder="0"
                    style="width: 200px"
                  ></el-input>
                </div>
              </el-form-item>
              <el-form-item label="调整幅度">
                <div class="form">
                  <el-input
                    v-model="Salary.currentPostWage"
                    disabled
                    style="width: 200px"
                    >-</el-input
                  >
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button size="mini" @click="dialogVisible = false"
            >关 闭</el-button
          >
          <el-button size="mini" type="primary" @click="dialogVisible = false"
            >保 存</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getWagetop, getWagetable, getchangeSalary } from '@/Api/Wages'
import decidePay from './decidePay.vue'
export default {
  components: { decidePay },
  data() {
    return {
      SalaryStatus: false,
      changeStatus: false,
      // 分页
      params: {
        page: 1,
        pageSize: 10,
        total: 0,
        approvalsStateChecks: [],
        approvalsTypeChecks: [],
        departmentChecks: []
      },
      tableData: [], //表格数据
      //备份数据
      // eslint-disable-next-line vue/no-reserved-keys
      _tableData: [],
      WagesTop: [], //头部数据
      checked: false,
      //弹框
      dialogVisible: false,
      Salary: {}
    }
  },
  methods: {
    /**请求头部数据**/
    getWagetop() {
      getWagetop().then((res) => {
        this.WagesTop = res.data.data.depts
        this.WagesTop.forEach((ele) => {
          ele.checked = false
        })
      })
    },
    /**请求表格数据**/
    getWagetable() {
      getWagetable(this.params).then((res) => {
        this.tableData = res.data.data.rows
        this._tableData = res.data.data.rows
        this.params.total = res.data.data.total
      })
    },
    /**分页功能**/
    handleSizeChange(val) {
      this.params.pageSize = val
      this.getWagetable()
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.getWagetable()
    },
    /**过滤筛选**/
    fliter(val, index) {
      this.WagesTop[index].checked = !this.WagesTop[index].checked
      if (val.checked == true) {
        this.tableData = this._tableData.filter(
          (ele) => ele.departmentName == val.name
        )
      } else {
        this.tableData = this._tableData
      }
    },
    /**调薪**/
    changeSalary(id) {
      this.dialogVisible = true
      getchangeSalary(id).then((res) => {
        this.Salary = res.data.data
      })
    }
  },
  created() {
    this.getWagetop()
    this.getWagetable()
  }
}
</script>

<style lang="scss" scoped>
.span {
  margin-right: 15px;
  margin-bottom: 10px;
  display: inline-block;
  font-size: 14px;
}
.card {
  div {
    margin-bottom: 10px;
  }
}
.box {
  padding: 10px;
  background-color: #eceef1;
}
.list {
  margin-top: 10px;
}
.el-table {
  font-size: 20px;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
.el-alert--info.is-light {
  border: 1px solid #439eff;
  background-color: #e6f7ff;
}
.fill {
  background-color: #e6f7ff;
  color: #000;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span:nth-child(2) {
    span {
      margin-right: 20px;
    }
  }
}
.right {
  margin-top: 10px;
}
.shou:hover {
  cursor: pointer;
}
.box-card {
  font-size: 18px;
  .text {
    margin-left: 5px;
  }
  b {
    display: inline-block;
    width: 120px;
  }
  .el-checkbox {
    margin-left: 6px;
  }
}
</style>
