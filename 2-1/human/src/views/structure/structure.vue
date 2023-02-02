<template>
  <div style="padding: 10px; margin: 10px; background: #fff; padding-left: 100px; padding-right: 100px">
    <p style="width: 100%; display: flex; justify-content: space-between">
      <span> 传智教育 </span>
      <span> 负责人 操作 </span>
    </p>
    <el-tree :data="list" :props="defaultProps">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }} </span>
        <span>
          <span> {{ data.manager }}</span>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link"> 操作<i class="el-icon-arrow-down el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="composeValue('a', data)">添加子部门</el-dropdown-item>
              <el-dropdown-item :command="composeValue('b', data)">编辑部门</el-dropdown-item>
              <el-dropdown-item :command="composeValue('c', data)">删除部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
import { getlist, dellist } from "@/Api/structure"
export default {
  data() {
    return {
      lists: [],
      list: [],
      defaultProps: {
        children: "children", //指定孩子节点的标签
        label: "name" //指定孩子节点的数据变量名，根据返回的数据进行更改
      }
    }
  },
  methods: {
    handleCommand(command) {
      console.log(command)
      if (command.button == "c") {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            })
            dellist(command.data.id).then(() => {
              this.getdata()
            })
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            })
          })
      }
    },
    composeValue(item, id) {
      return {
        button: item,
        data: id
      }
    },
    getdata() {
      this.list = []
      getlist().then((res) => {
        this.lists = res.data.data.depts
        res.data.data.depts.forEach((item) => {
          if (item.pid == "") {
            this.list.push(item)
            this.list.forEach((item) => {
              item.children = []
              this.lists.forEach((ele) => {
                if (item.id == ele.pid) {
                  item.children.push(ele)
                }
              })
            })
          }
        })
      })
    }
  },
  created() {
    this.getdata()
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss">
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
