<template>
  <div class="about">
    <div class="container">
      <Categorys title="美食">
        <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
        <a slot="footer" href="http://www.atguigu.com">更多美食</a>
      </Categorys>

      <Categorys title="游戏">
        <ul slot="center">
          <li v-for="(item, index) in games" :key="index">{{ item.title }}</li>
        </ul>
        <div class="foot" slot="footer">
          <a href="http://www.atguigu.com">单机游戏</a>
          <a href="http://www.atguigu.com">网络游戏</a>
        </div>
      </Categorys>

      <Categorys title="电影">
        <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" ></video>
        <template v-slot:footer>
          <div class="foot">
            <a href="http://www.atguigu.com">经典</a>
            <a href="http://www.atguigu.com">热门</a>
            <a href="http://www.atguigu.com">推荐</a>
          </div>
          <h4>欢迎前来观影</h4>
        </template>
      </Categorys>
    </div>
  </div>
</template>

<script>
import mock from "../../mock/data.json"
import Categorys from '../components/Categorys'
export default {
  components:{Categorys},
  data() {
    return {
      games: mock.games
    }
  },
}
</script>

<style lang="scss" scoped>
.container,.foot{
	display: flex;
	justify-content: space-around;
}
h4{
	text-align: center;
}
</style>