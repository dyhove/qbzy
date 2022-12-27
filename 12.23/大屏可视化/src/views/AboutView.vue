<template>
  <div>
    <LeftTop id="demo" height="400px" :option="ChartTestData"></LeftTop>
  </div>
</template>

<script>
//引入组件 略去
import LeftTop from "@/components/LeftTop"
export default {
  components: {
    LeftTop
  },

  data() {
    return {
      ChartTestData: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [3, 2, 5, 1, 5, 6, 2],
            type: "line"
          }
        ]
      }
    }
  }
}
</script>
