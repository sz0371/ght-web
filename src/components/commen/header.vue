<template>
	<div class="header-container">
		<div class="">
			<div class="line"></div>
			<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
				<el-menu-item index="1">
           	 		<router-link class="tab-link" to="/">首页</router-link>
				</el-menu-item>
				<el-menu-item index="2">
					<router-link class="tab-link" to="/about">关于贡和</router-link>
				</el-menu-item>
				<el-menu-item index="3">
					<router-link class="tab-link" to="/about">平台优势</router-link>
				</el-menu-item>
				<el-menu-item index="4">
					<router-link class="tab-link" to="/about">招商加盟</router-link>
				</el-menu-item>
				<!--<el-submenu index="2">
					<template slot="title">关于贡和</template>
					<el-menu-item index="2-1">选项1</el-menu-item>
					<el-menu-item index="2-2">选项2</el-menu-item>
					<el-menu-item index="2-3">选项3</el-menu-item>
					<el-submenu index="2-4">
						<template slot="title">选项4</template>
						<el-menu-item index="2-4-1">选项1</el-menu-item>
						<el-menu-item index="2-4-2">选项2</el-menu-item>
						<el-menu-item index="2-4-3">选项3</el-menu-item>
					</el-submenu>
				</el-submenu>-->
				<el-menu-item index="5">
					<!--<a href="https://www.ele.me" target="_blank">联系我们</a>-->
					<router-link class="tab-link" to="/contactUs">联系我们</router-link>
				</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "",
				activeIndex: '1',
				activeIndex2: '1'
			}
		},
		methods: {
			init() {

			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		created() {
			this.init()
		}
	}
</script>

<style scoped>
	a{
		text-decoration: none;
	}

</style>