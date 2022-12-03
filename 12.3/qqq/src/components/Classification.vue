<template>
  <div class="class">
    <div v-for="item in list" :key="item.id" class="divs">
      <h1>{{ item.title }}</h1>
      <ul>
        <li v-for="obj in item.chi" :key="obj.id">
          {{ obj.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.class {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.divs {
  width: 30%;
  height: 600px;
  background-color: #85cbe5;
}
h1 {
  background-color: #f8a106;
  text-align: center;
}
</style>
