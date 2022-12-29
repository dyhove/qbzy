<template>
  <div class="userAge">
    <div class="header">
      <div class="left">
        <div class="top">慕课外卖用户年龄分布&平均年龄</div>
        <div class="bottom">Takeaway of Age</div>
        <div></div>
      </div>
      <div class="right"><span>30.24</span>岁</div>
    </div>
    <div class="bottomcen">
      <img src="12.jpg" alt="" />
    </div>
    <div class="num">
      <span>0</span>
      <span>500000</span>
      <span>1,000,000</span>
      <span>1,500,000</span>
      <span>2,000,000</span>
    </div>
    <div class="bom">
      <div class="botlist">
        <span class="topsize">374,457</span>
        <p><span class="botsize"></span>0-28</p>
      </div>

      <div class="botlist">
        <span class="topsize">575,847</span>
        <p><span class="botsize"></span>26-30</p>
      </div>

      <div class="botlist">
        <span class="topsize">795,422</span>
        <p><span class="botsize"></span>30-50</p>
      </div>

      <div class="botlist">
        <span class="topsize">274,950</span>
        <p><span class="botsize"></span>-28</p>
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
.userAge {
  padding: 5px 20px 0 20px;
  background: #2a2b2d;
  margin-top: 1px;
  margin-bottom: 1px;
  .header {
    display: flex;
    color: white;
    .left {
      .top {
        font-size: 15px;
      }
      .bottom {
        font-size: 2px;
      }
    }
    .right {
      padding-left: 20px;
      span {
        font-size: 28px;
        font-weight: bold;
      }
    }
  }
}
.bottomcen {
  img {
    margin-left: 20px;
    width: 300px;
    height: 10px;
    margin-right: 20px;
  }
}
.num {
  color: #ccc;
  span {
    margin-left: 20px;
    font-size: 12px;
  }
}
.bom {
  display: flex;
  color: #fff;
  align-items: center;
  margin-top: 10px;
  .botlist {
    margin-left: 22px;
    text-align: center;
    p {
      position: relative;
      font-size: 12px;
    }
    .botsize {
      display: inline-block;
      width: 5px;
      height: 5px;
      position: absolute;
      top: 6px;
      left: 0px;
      background: #e1ff84;
      border-radius: 50%;
    }
  }
}
</style>
