<template>
  <div>
    <h1>数据统计</h1>
    <ul>
      <li class="day">当日数据：</li>
      <li><span class="big">5</span>新增用户</li>
      <li><span class="big">1</span>新增订单</li>
      <li><span class="big">50</span>新增管理员</li>
    </ul>
    <ul>
      <li class="all">总数据：</li>
      <li><span class="big">69841</span>注册用户</li>
      <li><span class="big">32676</span>订单</li>
      <li><span class="big">124615</span>管理员</li>
    </ul>
    <div>
      <div id="main" :style="{ width: '1500px', height: '600px' }"></div>
    </div>
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
        text: "走势图",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          dataView: { readOnly: false },
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "2022-11-16",
          "2022-11-17",
          "2022-11-18",
          "2022-11-19",
          "2022-11-20",
          "2022-11-21",
          "2022-11-22 ",
        ],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}",
        },
      },
      series: [
        {
          name: "新注册用户",
          type: "line",
          data: [10, 11, 13, 11, 12, 12, 9],
          markPoint: {
            data: [
              { type: "max", name: "Max" },
              { type: "min", name: "Min" },
            ],
          },
          markLine: {
            data: [{ type: "average", name: "Avg" }],
          },
        },
        {
          name: "新增订单",
          type: "line",
          data: [1, 2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [{ name: "周最低", value: 0, xAxis: 1, yAxis: -1.5 }],
          },
          markLine: {
            data: [
              { type: "average", name: "Avg" },
              [
                {
                  symbol: "none",
                  x: "90%",
                  yAxis: "max",
                },
                {
                  symbol: "circle",
                  label: {
                    position: "start",
                    formatter: "Max",
                  },
                  type: "max",
                  name: "最高点",
                },
              ],
            ],
          },

        },
        {
          name:"新增管理员",
          type:"line",
          data:[1, 15, 11, 15, 14, 2, 9],
          markPoint:{
            data:[
              {type:"max",name:"Max"},
              {type:"min",name:"Min"}
            ]
          },
          markLine:{
            data:[
              {type:"average",name:"Avg"}
            ]
          }
        }
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
h1 {
  text-align: center;
  font-size: 30px;
}
ul {
  margin-top: 20px;
  display: flex;
  width: 800px;
  justify-content: space-around;
  align-items: center;
}
li {
  width: 150px;
  height: 50px;
  line-height: 50px;

  background-color: #f5f5f5;
  text-align: center;
  .big {
    font-weight: bold;
    font-size: 25px;
    margin-right: 10px;
  }
}
.day {
  background-color: #ff9800;
  color: white;
  font-size: 25px;
}
.all {
  font-size: 25px;
  color: white;
  background-color: #20a0ff;
}
</style>
