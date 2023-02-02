<template>
  <div>
    {{ value }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {},
  created() {
    console.log("这是本地存储的数据", localStorage.getItem("name"));
    this.value = localStorage.getItem("name");
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
