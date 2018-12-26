<template>
	<div class="home-container">
		{{msg}}
		<div class="home-swiper">
			<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiper-slide><img src="../assets/img/ght-banner-1.png" alt="" /></swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination " slot="pagination"></div>
				<div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
				<div class="swiper-button-next swiper-button-black" slot="button-next"></div>
				<!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
			</swiper>
		</div>
		<div class="home-info">
			<div class="home-info-origin">
				<div class="origin-icon">
					<img src="../assets/img/ght-icon-origin.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ContactUs from './contactUs'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data() {
			return {
				msg: "内容页面",
				swiperOption: {
					notNextTick: true,
					//循环
					loop: true,
					//设定初始化时slide的索引
					initialSlide: 0,
					//自动播放
					autoplay: true,
					// autoplay: {
					//     delay: 3000,
					//     stopOnLastSlide: false,
					//     disableOnInteraction: true,
					// },
					// 设置轮播
					effect: 'coverflow',
					//滑动速度
					speed: 800,
					//滑动方向
					direction: 'horizontal',
					//小手掌抓取滑动
					// grabCursor : true,
					//滑动之后回调函数
					on: {
						slideChangeTransitionEnd: function() {
							// console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
						},
					},
					//左右点击
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					//分页器设置         
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				},
				swiperSlides: [1, 2, 3, 4]
			}

		},
		components: {
			ContactUs,
			swiper,
			swiperSlide
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
			//			console.log('this is current swiper instance object', this.swiper);
		},
		computed: {
			//			swiper() {
			//				return this.$refs.mySwiper.swiper;
			//			}
		}
	}
</script>

<style scoped>
	img {width: 100%;height: 300px;cursor: pointer;}
	.home-container .home-info .home-info-origin .origin-icon img {height: 55px;width: 165px;margin: auto;}
	.home-container .home-info .home-info-origin{width: 100%;text-align: center;}
</style>