<template>
	<div class="contact-container">
		{{msg}}
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				msg: "内容部分"
			}
		},
		methods: {
			init() {
				this.axios.get('/services/blogroll/List.json').then(   
					response => {
						let data = response.data.rows
						this.link = data.map(v => ({
							name: v.name,
							link: v.address
						}))
					},
					response => {
						// error callback
					}
				)
			}
		},
		created() {
			this.init()
		}
	}
</script>

<style scoped >

</style>