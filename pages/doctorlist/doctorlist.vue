<template>
	<view class="doctorList">
		<!-- 搜索框 -->
		<uni-search-bar radius="20" v-model="searchKeyword" @confirm="handleSearch" cancel-button="none"
			placeholder="搜索医生、科室、病症" :focus="true" />

	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from "vue";
	import {
		onLoad
	} from "@dcloudio/uni-app";


	// 搜索关键字
	const searchKeyword = ref("");

	// 页面加载时获取路由参数
	onLoad((options) => {
		if (options.keyword) {
			searchKeyword.value = decodeURIComponent(options.keyword); // 设置搜索框默认值
		}
	});
</script>

<style lang="scss">

</style>