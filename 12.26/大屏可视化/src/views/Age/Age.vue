<template>
  <div class="Age">
    <div class="age">
      <div class="one">
        <div class="oneLeft">
          <p>慕课外卖用户年龄分布&平均年龄</p>
          <h6>Distribution Of Age</h6>
        </div>
        <div class="oneRight">30.08<span>岁</span></div>
      </div>
      <div class="center"><img src="../../assets/age.png" /></div>
      <div class="bottom">
        <div class="one-tow">
          <h3>304,378</h3>
          <div class="ages"><span class="a"></span>0-20</div>
        </div>
        <div class="one-tow">
          <h3>505,391</h3>
          <div class="ages"><span class="b"></span>20-30</div>
        </div>
        <div class="one-tow">
          <h3>725,216</h3>
          <div class="ages"><span class="c"></span>30-50</div>
        </div>
        <div class="one-tow">
          <h3>204,934</h3>
          <div class="ages"><span class="d"></span>>50</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.Age {
  width: 425px;
  height: 120px;
  background-color: chartreuse;
  margin: 10px 0;
}
.age {
  width: 100%;
  box-sizing: border-box;

  .one {
    display: flex;

    .oneLeft {
      p {
        font-size: 13px;
        font-weight: 700;
      }

      h6 {
        font-size: 10px;
      }
    }

    .oneRight {
      font-size: 35px;
      font-weight: 700;
      margin-left: 13px;

      span {
        font-weight: 400;
        font-size: 12px;
      }
    }
  }

  .center {
    width: 425px;
    img {
      width: 100%;
    }
  }

  .bottom {
    display: flex;

    .one-tow {
      flex: 1;

      text-align: center;

      h3 {
        font-size: 16px;
      }

      .ages {
        line-height: 12px;

        .a {
          line-height: 12px;
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background-color: #52c41a;
          margin-right: 3px;
        }

        .b {
          line-height: 12px;
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background-color: #c4ef76;
          margin-right: 3px;
        }

        .c {
          line-height: 12px;
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background-color: #c9f192;
          margin-right: 3px;
        }

        .d {
          line-height: 12px;
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background-color: #f9fb9d;
          margin-right: 3px;
        }

        text-align: center;
        font-size: 12px;
      }
    }
  }
}
</style>
