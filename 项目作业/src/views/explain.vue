<template>
  <div>
    <div class="explain">
      <p>node-elm后台管理系统</p>
      <p>第一次登录的用户自动注册成为普通管理员</p>
      <p>普通管理员可以添加，修改信息</p>
      <p>超级管理员可以删除信息</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
.explain {
  width: 100%;
  font-size: 25px;
  p {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
