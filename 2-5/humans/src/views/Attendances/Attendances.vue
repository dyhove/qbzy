<template>
  <div>
    <div class="header">
      <div class="text">有0条考勤审批尚未处理</div>
      <div>
        <el-button size="small" type="danger">导入</el-button>
        <el-button size="small" type="warning">提醒</el-button>
        <el-button size="small" type="primary">设置</el-button>
        <el-button size="small" @click="tohistory">历史归档</el-button>
        <el-button size="small" type="primary" @click="tobaobiao"
          >202303报表</el-button
        >
      </div>
    </div>
    <div class="bum">
      <h4>部门：</h4>
      <div class="bumens">
        <div v-for="item in attlist" :key="item.id" class="checkboxs">
          <input type="checkbox" />
          <div>{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="bum">
      <h4>考勤状态：</h4>
      <div class="bumens">
        <div v-for="items in state" :key="items.id" class="checkboxs">
          <input type="radio" />
          <div>{{ items.name }}</div>
        </div>
      </div>
    </div>
    <el-table :data="tableData" height="500" border style="width: 100%">
      <el-table-column prop="username" fixed label="姓名"> </el-table-column>
      <el-table-column prop="workNumber" label="工号"> </el-table-column>
      <el-table-column prop="departmentName" label="部门"> </el-table-column>
      <el-table-column prop="mobile" label="手机"> </el-table-column>
      <el-table-column prop="timeOfEntry" label="3/1"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/2"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/3"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/4"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/5"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/6"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/7"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/8"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/9"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/10"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/11"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/12"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/13"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/14"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/15"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/16"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/17"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/18"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/19"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/20"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/21"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/22"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/23"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/24"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/25"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/26"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/27"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/28"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/29"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/30"> 旷工</el-table-column>
      <el-table-column prop="timeOfEntry" label="3/31"> 旷工</el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="params.page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="params.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="params.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { attlist, atttable } from '@/Api/Attendance'
export default {
  data() {
    return {
      attlist: [],
      tableData: [],
      params: {
        page: 1,
        pagesize: 10,
        total: 0
      },
      state: [
        {
          id: 1,
          name: '正常'
        },
        {
          id: 2,
          name: '矿工'
        },
        {
          id: 3,
          name: '事假'
        },
        {
          id: 4,
          name: '调休'
        },
        {
          id: 5,
          name: '迟到'
        },
        {
          id: 6,
          name: '早退'
        }
      ]
    }
  },
  methods: {
    attlists() {
      attlist().then((res) => {
        console.log(res)
        this.attlist = res.data.data.depts
      })
    },
    atttables() {
      atttable(this.params).then((res) => {
        console.log(res)
        this.tableData = res.data.data.data.rows
        this.params.total = res.data.data.data.total
      })
    },
    handleSizeChange(val) {
      this.params.pagesize = val
      this.atttables()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.atttables()
      console.log(`当前页: ${val}`)
    },
    tohistory() {
      this.$router.push('/Atthistory')
    },
    tobaobiao() {
      this.$router.push('/ReportForm')
    }
  },
  created() {
    this.attlists()
    this.atttables()
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
  .text {
    font-size: 16px;
    color: #333;
  }
}
.bumens {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .checkboxs {
    display: flex;
    align-items: center;
    margin: 10px 20px;
    input {
      margin-right: 5px;
    }
  }
}
h4 {
  width: 200px;
  height: 40px;
  line-height: 40px;
}
.bum {
  display: flex;
}
</style>
