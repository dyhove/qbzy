<template>
  <div class="Security">
    <div class="header">
      <div>本月：社保在缴 公积金 增员 减员 入职 离职</div>
      <div>
        <el-button size="small" type="danger" @click="tofile"
          >历史归档</el-button
        >
        <el-button size="small" type="primary" @click="tofilelist"
          >202003报表</el-button
        >
      </div>
    </div>
    <div class="departmentlist">
      <h4>部门</h4>
      <div v-for="item in names" :key="item.id" class="department">
        <div class="inputs">
          <input type="checkbox" /> <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="departmentlists">
      <h4>社保城市</h4>
      <div class="inputs"><input type="checkbox" /> <span>北京</span></div>
    </div>
    <div class="departmentlists">
      <h4>公积金城市</h4>
      <div class="inputs"><input type="checkbox" /> <span>北京</span></div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column prop="username" label="姓名"> </el-table-column>
      <el-table-column prop="mobile" label="手机"> </el-table-column>
      <el-table-column prop="workNumber" label="工号"> </el-table-column>
      <el-table-column prop="departmentName" label="部门"> </el-table-column>
      <el-table-column prop="timeOfEntry" label="入职时间"> </el-table-column>
      <el-table-column prop="timeOfEntrys" label="离职世界"> </el-table-column>
      <el-table-column prop="participatingInTheCity" label="社保城市">
      </el-table-column>
      <el-table-column prop="providentFundCity" label="公积金城市">
      </el-table-column>
      <el-table-column prop="socialSecurityBase" label="社保基数">
      </el-table-column>
      <el-table-column prop="providentFundBase" label="公积金基数">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看详情</el-button
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
      :total="params.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { Security, Securitylist } from '@/Api/Security'
export default {
  data() {
    return {
      names: [],
      tableData: [],
      params: {
        pageSize: 10,
        page: 1,
        total: 0
      }
    }
  },
  methods: {
    // 获取权限列表
    getList() {
      Security().then((res) => {
        console.log(res)
        this.names = res.data.data.depts
      })
    },
    getilists() {
      Securitylist(this.params).then((res) => {
        console.log(res)
        this.tableData = res.data.data.rows
        this.params.total = res.data.data.total
      })
    },
    handleSizeChange(val) {
      this.params.pageSize = val
      this.getilists()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.getilists()
      console.log(`当前页: ${val}`)
    },
    tofile() {
      this.$router.push({ path: '/file' })
    },
    tofilelist() {
      this.$router.push({ path: '/filelist' })
    },
    handleClick(val) {
      console.log(val)
      this.$router.push({
        path: '/detail',
        query: {
          id: val.id
        }
      })
    }
  },
  created() {
    this.getList()
    this.getilists()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.departmentlists {
  width: 200px;
  display: flex;
  font-size: 13px;
  padding: 10px;
}
.Security {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.department {
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 13px;
}
.departmentlist {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
</style>
