<template>
  <div>
    <h5>孙组件</h5>
    <span>名称：{{ obj.name }}</span> | <span>作者：{{ developer }}</span> |
    <span>诞生于：{{ year }}</span> |
    <span>最后更新于：{{ this.app.update }}</span>
  </div>
</template>
   
  <script>
export default {
  computed: {
    developer() {
      return this.developerFn();
    },
  },
  inject: ["obj", "developerFn", "year", "app"],
};
</script>
  