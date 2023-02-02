<template>
  <section>
    <p>子组件收到</p>
    <p>父的名字：{{ name }}</p>
    <children v-bind="$attrs" v-on="$listeners"></children>
  </section>
</template>
  
  <script>
import Children from "./Children";
export default {
  components: {
    Children,
  },
  // 父组件接收了name,所以name值是不会传到子组件的
  props: ["name"],
};
</script>
  