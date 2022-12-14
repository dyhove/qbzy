<template>
  <div>
    <!-- <h1>订单管理</h1 -->
    <el-card class="box-card">
      <el-input style="width: 500px" placeholder="请输入内容" v-model="value" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-table :data="orderslist" style="width: 100%">
        <el-table-column label="#" width="60" type="index"> </el-table-column>
        <el-table-column label="订单编号" prop="order_number"> </el-table-column>
        <el-table-column label="订单价格" prop="order_price"> </el-table-column>
        <el-table-column label="是否付款" prop="pay_status">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" v-if="scope.row.pay_status == 0">未付款</el-button>
            <el-button type="primary" size="mini" v-else>已付款</el-button>
          </template>
        </el-table-column>
        <el-table-column label="是否发货" prop="is_send"> </el-table-column>
        <el-table-column label="下单时间" prop="create_time">
          <template slot-scope="scope">
            {{ scope.row.create_time | formatTime }}
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
          <el-button type="success" size="mini" icon="el-icon-location"></el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderslist: [],
      progressDialogVisible: false,
      progressInfo: [],
      value: ""
    }
  },
  filters: {
    formatTime(time) {
      let date = new Date(time * 1000)
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? "0" + m : m
      let d = date.getDate()
      d = d < 10 ? "0" + d : d
      let h = date.getHours()
      let minute = date.getMinutes()
      minute = minute < 10 ? "0" + minute : minute
      return y + "-" + m + "-" + d + " " + h + ":" + minute
    }
  },
  methods: {},
  created() {
    this.$http.send("/orders").then((res) => {
      console.log(res)
      this.orderslist = res.data.data.goods
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
