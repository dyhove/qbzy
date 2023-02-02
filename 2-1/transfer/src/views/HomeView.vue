<template>
  <div>
    <h1>父传子</h1>
    <child :msg="msg"></child>
  </div>
</template>

<script>
import child from "../components/child.vue";
export default {
  data() {
    return {};
  },
  methods: {
    // 父组件传递的数据
    msg() {
      return "父组件传递的数据";
    },
  },
  created() {},
  mounted() {},
  components: {
    child,
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
