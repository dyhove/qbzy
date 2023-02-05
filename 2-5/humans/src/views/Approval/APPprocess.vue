<template>
  <div class="APPprocess">
    <div class="pro">
      <div class="bor">
        <el-switch
          v-model="value"
          inactive-text="请假"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
      <div class="bor">
        <el-switch
          v-model="value1"
          inactive-text="加班"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
      <div class="bor">
        <el-switch
          v-model="value2"
          inactive-text="离职"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      value1: true,
      value2: true
    }
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.APPprocess {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.pro {
  width: 30%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bor {
  width: 100px;
  height: 30px;
  border: 2px solid #ccc;
  line-height: 30px;
}
</style>
