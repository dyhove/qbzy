<template>
  <div>
    <button @click="handlerClick">这是一个按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handlerClick() {
      this.$emit("son", "子组件传递的数据");
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
