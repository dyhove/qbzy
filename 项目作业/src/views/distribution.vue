<template>
  <div>
    <div id="main" :style="{ width: '1500px', height: '600px' }"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "用户分布",
        subtext: "Fake Data",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 4935, name: "深圳" },
            { value: 42659, name: "其他" },
            { value: 2754, name: "杭州" },
            { value: 9588, name: "北京" },
            { value: 4560, name: "上海" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
