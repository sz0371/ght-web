<template>
	<div class="contact-container">
		{{msg}}
		<div id="baiduMap">
			<baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" ak="V3xUDrbBHV5uR0Zkn06NiWix181ZVFML">
              <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            </baidu-map>
		</div>
	</div>
</template>

<script>
	import { BaiduMap, BmNavigation } from 'vue-baidu-map'
	export default {
		components: {
		    BaiduMap,
		    BmNavigation
		},
		data() {
			return {
				msg: "关于我们的内容",
				center: {lng: 0, lat: 0},  
      			zoom: 3　
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
			},
			handler ({BMap, map}) {
		      //console.log(BMap, map)
		      this.center.lng = 116.404
		      this.center.lat = 39.915
		      this.zoom = 16
		   },
		},
		created() {
			this.init()
		}
	}
</script>

<style scoped >
    .bm-view{
    	height: 500px;
    	width: 100%;
    }
     
</style>
