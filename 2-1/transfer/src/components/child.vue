<template>
  <div></div>
</template>

<script>
export default {
  // 写法一 用数组接收
  props: ["msg"],
  mounted() {
    console.log(this.msg);
  },
};
</script>

<style lang='scss' scoped>
</style>

