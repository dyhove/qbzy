<template>
	<div class="container">
		<Categoryss title="游戏" >
			<template scope="jojo">
				<ul>
					<li v-for="(item,index) in jojo.games" :key="index">{{item}}</li>
				</ul>
			</template>
		</Categoryss>

		<Categoryss title="游戏" >
			<template scope="jojo">
				<ol>
					<li v-for="(item,index) in jojo.games" :key="index">{{item}}</li>
				</ol>
			</template>
		</Categoryss>

		<Categoryss title="游戏" >
			<template scope="jojo">
				<h4 v-for="(item,index) in jojo.games" :key="index">{{item}}</h4>
			</template>
		</Categoryss>
	</div>
</template>

<script>
import mock from "../../mock/data.json"
import Categoryss from '../components/Categoryss'
	export default {
		components:{Categoryss},
        data() {
            return {
                games: mock.games
            }
        },
	}
</script>

<style>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>
