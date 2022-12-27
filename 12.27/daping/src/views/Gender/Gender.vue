<template>
	<div>
		<div class="box">
			<div class="left">
				<div class="leftimg">
					<img src="sex.png" alt="">
				</div>
				<div class="leftright">
					<p>男性用户人数</p>
					<p class="six">nuadkeo so siiw fdm</p>
					<p>1,047,252<span>万人</span></p>
				</div>
			</div>


			<div class="left">
				<div class="leftimg">
					<img src="sex.png" alt="">
				</div>
				<div class="leftright">
					<p>女性用户人数</p>
					<p  class="six">nuadkeo so siiw fdm</p>
					<p>1,046,581<span>万人</span></p>
				</div>
			</div>
		</div>
 </div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods: {

	},
	created () {

	},
	mounted () {

	},
	components: {

	},
	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
	.box{
		display: flex;
		background: #2a2b2d;
		margin-top: 1px;
		color: #Fff;
		height: 80px;
		span{
			font-size: 12px;
		}
		.six{
			font-size: 12px;
		}
		.left{
			width: 50%;
			display: flex;
			margin-top: 15px;
			justify-content: center;
			.leftimg{
				img{
					width: 30px;
				height: 30px;
				margin-right: 10px;
				}
			}
		}
	}
</style>
