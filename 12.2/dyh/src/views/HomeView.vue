<template>
  <div class="container">
		<Category title="美食" >
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
		</Category>

		<Category title="游戏" >
			<ul>
				<li v-for="(item, index) in games" :key="index">{{item.title}}</li>
			</ul>
		</Category>

		<Category title="电影">
			<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
		</Category>
	</div>
</template>

<script>
import mock from "../../mock/data.json"
import Category from '../components/Category'
export default {
  components: {Category},
  data() {
    return {
      games: mock.games
    }
  },
}
</script>

<style lang="scss" scoped>
.container{
	display: flex;
	justify-content: space-around;
}
</style>
