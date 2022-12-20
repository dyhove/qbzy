<template>
  <div class="home">
    <div class="header">
      <h1>大数据可视化系统数据</h1>
      <div class="TextRight">{{ times.timeText }}</div>
    </div>
    <div id="main"></div>
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
    var option
    option = {
      grid: {
        left: "22%",
        top: "10%",
        bottom: "10%"
        // containLabel: true
      },
      xAxis: {
        show: false
        // type: 'value',
        // boundaryGap: [0, 0.01]
      },
      yAxis: [
        {
          type: "category",
          data: ["字段1", "字段2", "字段3", "字段4", "字段5", "字段6", "字段7", "字段8", "字段9"],
          axisLine: {
            //不显示y轴线条
            show: false
          },
          axisTick: {
            //不显示刻度
            show: false
          },
          axisLabel: {
            //修改刻度标签里面的文字颜色设置为白色
            color: "#fff"
          }
        },
        {
          data: ["1514", "1619", "1623", "1968", "2158", "2456", "3506", "4664", "8390"],
          axisLine: {
            //不显示y轴线条
            show: false
          },
          axisTick: {
            //不显示刻度
            show: false
          },
          axisLabel: {
            //修改刻度标签里面的文字颜色设置为白色
            color: "#fff"
          }
        }
      ],
      series: [
        {
          name: "条",
          type: "bar",
          data: [25, 30, 34, 40, 43, 48, 52, 56, 70],

          yAxisIndex: 0,

          itemStyle: {
            //修改第一组柱子的圆角
            barBorderRadius: 20,
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              {
                offset: 0,
                color: "#03C794"
              },
              {
                offset: 1,
                color: "#0094F9"
              }
            ])
          },
          //柱子之间的距离
          barCategoryGap: 50,
          //柱子的宽度
          barWidth: 10,
          //显示柱子内的文字
          label: {
            show: true,
            //图形内显示百分比
            position: "right",
            //{c}会自动的解析为数据 data里面的数据
            formatter: "{c}%"
          }
        },
        {
          name: "框",
          type: "bar",
          barCategoryGap: 50,
          barWidth: 15,
          yAxisIndex: 1,
          data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
          itemStyle: {
            //修改第一组柱子的圆角
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
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
