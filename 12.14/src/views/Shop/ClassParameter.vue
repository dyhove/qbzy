<template>
  <div class="params">
    <header class="warn"><i class="el-icon-warning"></i> 注意：只允许为第三级分类设置相关参数</header>
    <div>
      选择商品分类:
      <el-cascader
        v-model="value"
        :options="options"
        :props="{ label: 'cat_name', value: 'cat_id' }"
        @change="selectType"
      ></el-cascader>
    </div>
    <div class="tabs">
      <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="动态参数" name="only">
          <el-table>
            <el-table-column></el-table-column>
            <el-table-column label="#"></el-table-column>
            <el-table-column label="参数名称"></el-table-column>
            <el-table-column label="操作"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态属性" name="many">
          <el-table>
            <el-table-column></el-table-column>
            <el-table-column label="#"></el-table-column>
            <el-table-column label="参数名称"></el-table-column>
            <el-table-column label="操作"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { GetShopType } from "@/API/httpApi"
export default {
  data() {
    return {
      value: "",
      options: [],
      params: {
        type: [1, 2, 3],
        pagesize: 2,
        pagenum: 1
      },
      activeName: "only"
    }
  },
  created() {
    this.getParams()
  },
  methods: {
    getCates() {},
    // 获取分类参数
    getParams() {
      GetShopType().then((res) => {
        console.log(res)
        this.options = res.data.data.result
      })
    },
    handleClick() {
      this.getParams()
    },
    selectType() {
      if (this.value.length === 3) {
        this.getParams()
      } else {
        this.$message({
          message: "注意：只允许为第三级分类设置相关参数",
          type: "warning"
        })
      }
    },

    addParams() {}
  }
}
</script>

<style lang="scss" scoped>
.params {
  margin: 20px;
  padding: 20px;
  background: #fff;
}

.warn {
  color: #fff;
  background-color: #dba651;
  line-height: 40px;
  border-radius: 6px;
  padding-left: 20px;
  margin-bottom: 20px;
}

.tabs {
  margin-top: 20px;
}
</style>
