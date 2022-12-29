<template>
  <div class="rightTop">
    <ul>
      <li>
        <div>
          <img src="@/assets/1.png" alt="" />
        </div>
        <div>
          <div class="title">今日销售额</div>
          <div class="small">Today's payed Users</div>
          <h3 class="big">99,999,999</h3>
        </div>
      </li>
      <li>
        <div>
          <img src="@/assets/2.png" alt="" />
        </div>
        <div>
          <div class="title">今日订单量</div>
          <div class="small">Today's payed Users</div>
          <h3 class="big">381,022</h3>
        </div>
      </li>
      <li>
        <div>
          <img src="@/assets/3.png" alt="" />
        </div>
        <div>
          <div class="title">今日交易用户数</div>
          <div class="small">Today's payed Users</div>
          <h3 class="big">13,220,495</h3>
        </div>
      </li>
      <li>
        <div>
          <img src="@/assets/4.png" alt="" />
        </div>
        <div>
          <div class="title">今日新增用户数</div>
          <div class="small">Today's payed Users</div>
          <h3 class="big">441,572</h3>
        </div>
      </li>
      <li>
        <div class="box">
          <img class="images" src="@/assets/dui.png" alt="" />
          <div class="lv">转化率</div>
          <div class="shu">10.14%</div>
        </div>
      </li>
      <li>
        <div class="box">
          <img class="images" src="@/assets/heng.png" alt="" />
          <div class="lv">退单率</div>
          <div class="shu">5.14%</div>
        </div>
      </li>
    </ul>
    <ul class="ul">
      <li>ALL</li>
      <li>北京</li>
      <li>上海</li>
      <li>深圳</li>
      <li>杭州</li>
      <li>南京</li>
      <li>武汉</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.rightTop {
  width: 99.2%;
  height: 70px;
  background-color: #424446;
}
.rightTop ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}
.rightTop ul li {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 5px;
}

img {
  width: 70px;
  height: 60px;
}
.title {
  font-size: 12px;
  font-weight: 900;
}
.small {
  font-size: 10px;
  transform: scale(0.8); // 缩放0.8
}
.big {
  margin: 0;
  font-size: 22px;
  font-family: DIN;
}
.images {
  width: 40px;
  height: 25px;
}
.lv {
  font-size: 10px;
  transform: scale(0.8); // 缩放0.8
}
.shu {
  font-size: 10px;
  transform: scale(0.8); // 缩放0.8
  font-weight: 900;
}
.ul {
  font-size: 12px;
  font-weight: 900;
  background-color: #353941;
}
</style>
