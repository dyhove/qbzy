<template>
  <div>
    <h1>v-model</h1>
    <childs v-model="value"></childs>
  </div>
</template>

<script>
import childs from "../components/childs.vue";
export default {
  data() {
    return {
      value: "父组件传递的数据",
    };
  },
  methods: {},
  components: {
    childs,
  },
};
</script>

<style lang='scss' scoped>
</style>
