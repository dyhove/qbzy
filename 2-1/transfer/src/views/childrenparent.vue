<template>
  <div>
    <h1>父组件</h1>
    <h-child></h-child>
  </div>
</template>
  <script>
// 引入子组件
import HChild from "../components/parentchild.vue";
export default {
  name: "Parent",
  components: {
    HChild,
  },
  data() {
    return {
      msg: "这是父组件的数据",
    };
  },
  methods: {
    fun() {
      console.log("parent fun");
    },
  },
};
</script>
  