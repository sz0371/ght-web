<template>
	<div class="footer-container">
		<div class="footer-info"></div>
		<div class="footer-link" :span="24">
			<el-row :gutter="20">
				<el-col :gl="3" :xs="12" :sm="8" :md="24" style="text-align: center;">
					<span class="friendship-tips">友情链接</span>
					<span class="friendship-tips">友情链接</span>
					<span class="friendship-tips">友情链接</span>
					<span class="friendship-tips">友情链接</span>
					<span class="friendship-tips">友情链接</span>
					<span class="friendship-tips">友情链接</span>
					<span class="friendship-tips">友情链接</span>
					<span class="friendship-tips">友情链接</span>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				msg: ""
			}
		},
		methods: {
			init() {

			}
		},
		created() {
			this.init()
		}
	}
</script>

<style scoped>
.footer-link{border: 1px solid red;}
.friendship-tips{border: 1px solid red;}
</style>