<template>
  <div>
    <h1>子传父</h1>
    <son @son="son"></son>
    {{ value }}
  </div>
</template>

<script>
import son from "../components/son.vue";
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    son(value) {
      console.log("这是子组件传递的数据", value);
      this.value = value;
    },
  },
  created() {},
  mounted() {},
  components: {
    son,
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
