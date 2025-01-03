<template>
	<!-- 轮番图 -->
	<view class="swipper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="picture">
			<swiper-item>
				<image src="/static/images/医院图片1.jpg" mode="aspectFill" style="width: 100%;height: 100%;"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/images/医院图片2.jpg" mode="aspectFill" style="width: 100%;height: 100%;"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	defineProps({
		banners: {
			type: Array,
			default: () => [],
		},
	});
</script>

<style lang="scss">
	.swipper {
		height: 320rpx;
	}
</style>