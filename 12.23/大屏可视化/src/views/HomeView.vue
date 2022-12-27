<template>
  <div class="home">
    <div class="header">
      <h1>大数据可视化系统数据</h1>
      <div class="TextRight">{{ times.timeText }}</div>
    </div>
    <div>
      <div>
        <div id="main"></div>
        <div id="main1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts"
import { formatDate } from "../untils/times"
// import * as echarts from 'echarts';
export default {
  filters: {},
  data() {
    return {
      times: ""
    }
  },
  methods: {
    // 获取当前时间
    getTimes() {
      this.times = setInterval(() => {
        this.times = formatDate(new Date())
      }, 1000)
    }
  },
  created() {
    this.times = formatDate(new Date())
    this.getTimes()
  },
  mounted() {
    var chartDom = document.getElementById("main")
    var myChart = echarts.init(chartDom)
    var option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // Use axis to trigger tooltip
          type: "shadow" // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {},
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value"
      },
      yAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      series: [
        {
          name: "Direct",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: "Mail Ad",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "Affiliate Ad",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "Video Ad",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: "Search Engine",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    }
    option && myChart.setOption(option)
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
#main {
  width: 400px;
  height: 300px;
  background-color: #032463;
}
.home {
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat;
  .header {
    width: 100%;
    height: 100px;
    background: url(../assets/head_bg.png) no-repeat;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 30px;
      color: #fff;
      text-align: center;
      line-height: 100px;
      flex: 1;
    }
    .TextRight {
      font-size: 20px;
      color: #fff;
      line-height: 100px;
      padding-right: 20px;
    }
  }
}
</style>
