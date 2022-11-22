<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/">
            <i :class="index.icon"></i>
            <span slot="title">{{ index.name }}</span>
          </el-menu-item>
          <el-submenu
            :index="item.id + ''"
            v-for="item in menus"
            :key="item.id"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="obj.path + ''"
                v-for="obj in item.children"
                :key="obj.id"
                >{{ obj.title }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-breadcrumb separator="">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.meta.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: {
        name: "首页",
        path: "/",
        icon: "el-icon-menu",
        id: "00",
      },
      menus: [
        {
          name: "数据管理",
          path: "/management",
          icon: "el-icon-document-copy",
          id: "01",
          children: [
            {
              title: "用户列表",
              id: "0",
              path: "/user",
            },
            {
              title: "商家列表",
              id: "1",
              path: "/shop",
            },
            {
              title: "食品列表",
              id: "2",
              path: "/food",
            },
            {
              title: "订单列表",
              id: "3",
              path: "/order",
            },
            {
              title: "管理员列表",
              id: "4",
              path: "/admin",
            },
          ],
        },
        {
          name: "添加数据",
          icon: "el-icon-plus",
          id: "02",
          children: [
            {
              title: "添加店铺",
              id: "11",
              path: "/addshop",
            },
            {
              title: "添加商品",
              id: "22",
              path: "/addfood",
            },
          ],
        },
        {
          name: "图表",
          icon: "el-icon-star-on",
          id: "03",
          children: [
            {
              title: "用户分布",
              id: "33",
              path: "/distribution",
            },
          ],
        },
        {
          name: "编辑",
          icon: "el-icon-edit",
          id: "04",
          children: [
            {
              title: "文本编辑",
              id: "44",
              path: "/edit",
            },
          ],
        },
        {
          name: "设置",
          icon: "el-icon-s-tools",
          id: "05",
          children: [
            {
              title: "管理员设置",
              id: "55",
              path: "/admintools",
            },
          ],
        },
        {
          name: "说明",
          icon: "el-icon-warning-outline",
          id: "06",
          children: [
            {
              title: "说明",
              id: "66",
              path: "/explain",
            },
          ],
        },
      ],
    };
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-breadcrumb {
  margin-top: 22.5px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  min-height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  margin: 0;
  padding: 0;
}
</style>
