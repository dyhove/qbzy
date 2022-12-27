<template>
  <div class="home">
    <headers></headers>
    <div class="homelist">
      <div class="left">
        <total></total>
        <age></age>
        <device></device>
        <gender></gender>
        <rider></rider>
        <category></category>
      </div>
      <div class="right">
        <change></change>
        <tabs></tabs>
        <div class="mapsAndanalysis">
          <maps></maps>
          <analysis></analysis>
        </div>
        <div class="trendAndRanking">
          <div>
            <trend></trend>
            <dots></dots>
          </div>
          <ranking></ranking>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "../views/Headers/Headers.vue"
import total from "../views/Total/Total.vue"
import age from "../views/Age/Age.vue"
import device from "../views/Device/Device.vue"
import gender from "../views/Gender/Gender.vue"
import rider from "../views/Rider/Rider.vue"
import category from "../views/Category/Category.vue"
import change from "../views/Change/Change.vue"
import tabs from "../views/Tabs/Tabs.vue"
import maps from "../views/Map/Map.vue"
import analysis from "../views/Analysis/Analysis.vue"
import trend from "../views/Trend/Trend.vue"
import ranking from "../views/Ranking/Ranking.vue"
import dots from "../views/Dot/Dot.vue"
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    headers,
    total,
    age,
    device,
    gender,
    rider,
    category,
    change,
    tabs,
    maps,
    analysis,
    trend,
    ranking,
    dots
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #1c1c1c;
}
.homelist {
  width: 100%;
  display: flex;
  justify-content: space-around;
  .left {
    width: 415px;
    height: 100%;
  }
  .right {
    width: 1410px;
    height: 100%;
    .mapsAndanalysis {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }
    .trendAndRanking {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      margin: 5px 0;
    }
  }
}
</style>
