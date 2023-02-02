<template>
  <div>
    <refchild ref="child"></refchild>
  </div>
</template>

<script>
import refchild from "../components/refchild.vue";
export default {
  mounted() {
    const child = this.$refs.child;
    console.log(child.name);
    child.someMethod("调用了子组件的方法");
  },
  components: { refchild },
};
</script>

<style lang='scss' scoped>
</style>
