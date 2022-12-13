<template>
  <div class="orders">
    <!-- <h1>订单管理</h1 -->
    <el-card class="box-card">
      <el-input style="width: 500px" placeholder="请输入内容" v-model="params.query" class="input-with-select">
        <el-button @click="seach" slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-table :data="orderslist" style="width: 100%">
        <el-table-column label="#" width="60" type="index"> </el-table-column>
        <el-table-column label="订单编号" prop="order_number"> </el-table-column>
        <el-table-column label="订单价格" prop="order_price"> </el-table-column>
        <el-table-column label="是否付款" prop="pay_status">
          <template slot-scope="scope">
            <el-tag :type="scope.pay_status == '1' ? '' : 'danger'" effect="dark">
              {{ scope.pay_status == "1" ? "已付款" : "未付款" }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="是否发货" prop="is_send"> </el-table-column>
        <el-table-column label="下单时间" prop="create_time"> </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="logistics(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[2, 3, 5, 10]"
        :page-size="2"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { GetOrders } from "@/API/httpApi"
export default {
  data() {
    return {
      orderslist: [],
      params: {
        query: "",
        pagenum: "",
        pagesize: "",
        user_id: "",
        pay_status: "",
        is_send: "",
        order_fapiao_title: "",
        order_fapiao_company: "",
        order_fapiao_content: "",
        consignee_addr: ""
      },
      total: 1
    }
  },
  methods: {
    /**获取列表数据 */
    getlist() {
      GetOrders(this.params).then((res) => {
        this.orderslist = res.data.data.goods
        this.total = res.data.data.total
      })
    },
    /**搜索 */
    seach() {
      this.getlist()
    },
    /**每页几条数据 */
    handleSizeChange(val) {
      this.params.pagesize = val
      this.getlist()
    },
    /**当前第几页 */
    handleCurrentChange(val) {
      this.params.pagenum = val
      this.getlist()
    },
    /**查看物流信息 */
    logistics() {}
  },
  created() {
    this.getlist()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.orders {
  margin: 20px;
}
</style>
