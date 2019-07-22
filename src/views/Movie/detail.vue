<template>
	<div id="detailContainer" class="slide-enter-active">

		<Header title="影片详情">
			<i class="iconfont icon-right" @touchstart="handleToBack"></i>
		</Header>
		<div id="content" class="contentDetail">
			<div class="detail_list">
				<div class="detail_list_bg"></div>
				<div class="detail_list_filter"></div>
				<div class="detail_list_content">
					<div class="detail_list_img">
						<img src="/images/movie_1.jpg" alt="">
					</div>
					<div class="detail_list_info">
						<h2>无名之辈</h2>
						<p>A Cool Fish</p>
						<p>9.2</p>
						<p>剧情,喜剧,犯罪</p>
						<p>中国大陆 / 108分钟</p>
						<p>2018-11-16大陆上映</p>
					</div>
				</div>
			</div>
			<div class="detail_intro">
				<p>在一座山间小城中，一对低配劫匪、一个落魄的泼皮保安、一个身体残疾却性格彪悍的残毒舌女以及一系列生活在社会不同轨迹上的小人物，在一个貌似平常的日子里，因为一把丢失的老枪和一桩当天发生在城中的乌龙劫案，从而被阴差阳错地拧到一起，发生的一幕幕令人啼笑皆非的荒诞喜剧。
				</p>
			</div>
			<div class="detail_player swiper-container">
				<ul class="swiper-wrapper">
					<li class="swiper-slide">
						<div>
							<img src="/images/person_1.webp" alt="">
						</div>
						<p>陈建斌</p>
						<p>马先勇</p>
					</li>
					<li class="swiper-slide">
						<div>
							<img src="/images/person_1.webp" alt="">
						</div>
						<p>陈建斌</p>
						<p>马先勇</p>
					</li>
					<li class="swiper-slide">
						<div>
							<img src="/images/person_1.webp" alt="">
						</div>
						<p>陈建斌</p>
						<p>马先勇</p>
					</li>
					<li class="swiper-slide">
						<div>
							<img src="/images/person_1.webp" alt="">
						</div>
						<p>陈建斌</p>
						<p>马先勇</p>
					</li>
					<li class="swiper-slide">
						<div>
							<img src="/images/person_1.webp" alt="">
						</div>
						<p>陈建斌</p>
						<p>马先勇</p>
					</li>
					<li class="swiper-slide">
						<div>
							<img src="/images/person_1.webp" alt="">
						</div>
						<p>陈建斌</p>
						<p>马先勇</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>



<script>
	import Header from '@/components/Header';
	export default {
		name: 'Detail',
		components: {
			Header
		},
		props:['movieId'],
		methods: {
			handleToBack() {
				this.$router.back();
			}
		},
		mounted(){
			console.log(this.movieId)
		}
	}
</script>

<style scoped>
	#detailContainer {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 100;
		width: 100%;
		min-height: 100%;
		background: white;
	}

	#detailContainer.slide-enter-active{
		animation: 0.3s slideMove;
	}
	@keyframes slideMove{
		0%{
			transform: translateX(100%);
		}
		100%{
			transform: translateX(0);
		}
	}

	#content.contentDetail {
		display: block;
		margin-bottom: 0;
	}

	#content .detail_list {
		height: 200px;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.detail_list .detail_list_bg {
		width: 100%;
		height: 100%;
		background: url(/images/movie_1.jpg) 0 40%;
		filter: blur(20px);
		background-size: cover;
		position: absolute;
		left: 0;
		top: 0;
	}

	.detail_list .detail_list_filter {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #40454d;
		opacity: .55;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}

	.detail_list .detail_list_content {
		display: flex;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
	}

	.detail_list .detail_list_img {
		width: 108px;
		height: 150px;
		border: solid 1px #f0f2f3;
		margin: 20px;
	}

	.detail_list .detail_list_img img {
		width: 100%;
		height: 100%;
	}

	.detail_list .detail_list_info {
		margin-top: 20px;
	}

	.detail_list .detail_list_info h2 {
		font-size: 20px;
		color: white;
		font-weight: normal;
		line-height: 40px;
	}

	.detail_list .detail_list_info p {
		color: white;
		line-height: 20px;
		font-size: 14px;
		color: #ccc;
	}
</style>