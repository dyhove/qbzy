<template>
    <div>
        <h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<!-- 路由跳转的replace方法
						作用：控制路由跳转时操作浏览器历史记录的模式
					 -->
					<router-link replace  class="list-group-item" active-class="active" to="/routing/news">  News </router-link>
				</li>
				<li>
					<router-link replace  class="list-group-item" active-class="active" to="/routing/message"> Message </router-link>
				</li>
			</ul>
			<!-- 坑 -->
			<router-view></router-view>
		</div>
    </div>
</template>

<script>
    export default {
        name:'Home'
    }
</script>
