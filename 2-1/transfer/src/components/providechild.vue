<template>
  <div class="wrap">
    <h4>子组件（只做中转）</h4>
    <child></child>
  </div>
</template>
  
  <script>
import child from "./childss.vue";
export default {
  components: {
    child,
  },
};
</script>
  