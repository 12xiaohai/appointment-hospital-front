<template>
	<view class="homeHead">
		<!-- 状态栏区域 -->
		<view class="statusBar" :style="{ height: getStatusBarHeight() + 'px' }"></view>
		<view class="titleBar" :style="{ height: getTitleBarHeight() + 'px' }">
			中医药馆预约小程序
		</view>
		<!-- 点击整个搜索框外层跳转 -->
		<view @click="navigateToDoctorList">
			<uni-search-bar radius="20" :focus="false" cancel-button="none" placeholder="搜索医生、科室、病症" />
		</view>
	</view>
</template>

<script setup>
	import {
		getStatusBarHeight,
		getTitleBarHeight
	} from "@/utils/system.js";
	import {
		ref
	} from "vue";

	// 搜索关键字
	const searchKeyword = ref("");

	// 跳转到医生列表页面
	const navigateToDoctorList = () => {
		uni.navigateTo({
			url: `/pages/doctorlist/doctorlist`, // 传递搜索框内容
		});
	};
</script>

<style lang="scss">
	.homeHead {
		.titleBar {
			display: flex;
			align-items: center;
			padding-left: 220rpx;
		}
	}
</style>