<template>
	<div class="layout-container">
		<div class="layout-header">
			<Header></Header>
		</div>
		<div class="layout-content">
			<router-view/>
		</div>
		<div class="layout-footer">
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
	import Footer from './commen/footer'
	import Header from './commen/header'
	//import Home from './home'
	export default {
		data() {
			return {
				msg: ""
			}
		},
		components: {
			Footer,
			Header
		},
		methods: {
			init() {let postData = {
        params: {
          status: 1,
          functionId: '30deb9b1c6e94fb79946794ba8c7d5dd'
        }
      }
      this.axios.get('/services/goodfocus/getlist.json', postData).then(
        response => {
        	console.log(response) ; 
         	this.productData = response.data.data.data ; 
        },
        response => {
          // error callback
        }
      )},
			
		},
		created() {
			this.init()
		}
	}
</script>

<style scoped>

</style>