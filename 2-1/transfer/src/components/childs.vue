<template>
  <div>
    <input :value="value" @input="handlerChange" />
  </div>
</template>

<script>
export default {
  props: ["value"],
  // 可以修改事件名，默认为 input
  model: {
    event: "updateValue",
  },
  methods: {
    handlerChange(e) {
      this.$emit("input", e.target.value);
      // 如果有上面的重命名就是这样
      this.$emit("updateValue", e.target.value);
    },
  },
};
</script>

<style lang='scss' scoped>
</style>
