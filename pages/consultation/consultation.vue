<template>
	<view>
		<!-- 点击整个搜索框外层跳转 -->
		<view @click="navigateToDoctorList">
			<uni-search-bar radius="20" :focus="false" cancel-button="none" placeholder="搜索医生、科室、病症" />
		</view>
	</view>
</template>

<script setup>
	// 跳转到医生列表页面
	const navigateToDoctorList = () => {
		uni.navigateTo({
			url: `/pages/doctorlist/doctorlist`, // 传递搜索框内容
		});
	};
</script>

<style lang="scss">

</style>