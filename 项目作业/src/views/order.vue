<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名">
              <span>
                {{ props.row.basket.group.name }}
              </span>
            </el-form-item>
            <el-form-item label="店铺名称">
              <span>{{ props.row.restaurant_name }}</span>
            </el-form-item>
            <el-form-item label="收获地址">
              <span>{{ props.row.restaurant_name }}</span>
            </el-form-item>
            <el-form-item label="店铺ID">
              <span>{{ props.row.restaurant_id }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.restaurant_name }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="订单ID" prop="unique_id"> </el-table-column>
      <el-table-column label="总价格" prop="total_amount"> </el-table-column>
      <el-table-column label="订单状态" prop="status_bar.title">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      restaurant_id: "",
      offset: 0,
      limit: 20,
      total: 3214,
    };
  },
  methods: {
    tabs() {
      this.$axios
        .get("http://elm.cangdu.org/bos/orders?", {
          params: {
            offset: this.offset,
            limit: this.limit,
            restaurant_id: this.restaurant_id,
          },
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data;
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.limit = val;
      this.tabs();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.offset = val;
      this.tabs();
    },
  },
  created() {
    this.tabs();
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
