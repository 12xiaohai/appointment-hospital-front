<template>
	<view class="container">
		<view class="head">
			<home-head>
	
			</home-head>

		</view>
		<view class="body">
			<!-- 轮番图 -->
			<SwiperBanner></SwiperBanner>
			<!-- 公告卡片 -->
			<AnnouncementCard @showPopup="onShowPopup" />
			<!-- 弹窗组件 -->
			<AnnouncementPopup ref="announcementPopup" />
			<!-- 功能图标区域 -->
			<function-grid></function-grid>
		</view>

	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const announcementPopup = ref(null);

	const onShowPopup = () => {
		if (announcementPopup.value) {
			announcementPopup.value.open(); // 调用弹窗组件的 open 方法
		} else {
			console.error("AnnouncementPopup 组件未加载！");
		}
	};
</script>

<style lang="scss">
	.container {
		height: 100vh;
		background-color: #d36b46;
		display: flex;
		flex-direction: column;

		.head {
			height: 300rpx;
		}

		.body {
			flex: 1;
			background-color: #fff;
		}
	}
</style>