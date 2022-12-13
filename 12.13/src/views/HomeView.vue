<template>
  <div>
    <el-container>
      <el-aside :width="flag ? '68px' : '200px'">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          :collapse="flag"
        >
          <div class="title">电商后台管理系统</div>
          <el-submenu :index="item.path + ''" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item :index="objs.path + ''" v-for="objs in item.children" :key="objs.id">{{
              objs.authName
            }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span @click="flag = !flag" class="span">|||</span>
          <el-button type="info" @click="eqit">退出</el-button>
        </el-header>
        <el-main
          ><el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{
              item
            }}</el-breadcrumb-item> </el-breadcrumb
          ><router-view></router-view
        ></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false, // 侧边栏收缩
      menuList: []
    }
  },
  methods: {
    eqit() {
      this.$router.push("/")
    }
  },
  created() {
    this.$http.send("/menus", {}, "get").then((res) => {
      // console.log(res)
      this.menuList = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #0a0f2f;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .span {
    cursor: pointer;
  }
}

.el-aside {
  background-color: #333744;
  color: #333;
  text-align: center;
  height: 100vh;
  .title {
    color: #fff;
    font-size: 20px;
    line-height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.el-main {
  background-color: #eaedf1;
  margin: 0;
  padding: 0;
}
</style>
