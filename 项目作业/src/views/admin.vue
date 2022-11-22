<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="user_name" label="姓名"> </el-table-column>
      <el-table-column prop="create_time" label="注册日期"> </el-table-column>
      <el-table-column prop="city" label="注册地址"> </el-table-column>
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
      offset: 0,
      limit: 20,
      total: 124615,
    };
  },
  methods: {
    tabs() {
      this.$axios
        .get("https://elm.cangdu.org/admin/all", {
          params: {
            offset: this.offset,
            limit: this.limit,
          },
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.data;
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
</style>
