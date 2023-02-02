<template>
  <div>
    <h1>本地存储</h1>
    <Locals />
  </div>
</template>

<script>
import Locals from "../components/Locals.vue";
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {},
  created() {
    localStorage.setItem("name", "七七");
  },
  mounted() {},
  components: {
    Locals,
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
