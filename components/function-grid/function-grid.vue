<template>
	<view class="function">
		<uni-grid :column="4" :highlight="true" :showBorder="false" :square="false">
			<uni-grid-item v-for="(item, index) in gridItems" :index="index" :key="index" @click="handleClick(index)">
				<view class="grid-item-box">
					<image :src="item.icon" class="icon" />
					<text class="text">{{ item.name }}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	// 模块数据
	const gridItems = ref([{
			icon: '/static/icons/doctor.png',
			name: '查找医生',
			path: '/pages/doctorlist/doctorlist'
		},
		{
			icon: '/static/icons/doctor.png',
			name: '门诊预约',
			path: '/pages/appointment/appointment'
		},
		{
			icon: '/static/icons/doctor.png',
			name: '在线商城',
			path: '/pages/store/store'
		},
		{
			icon: '/static/icons/doctor.png',
			name: '在线咨询',
			path: '/pages/consultation/consultation'
		},
		{
			icon: '/static/icons/doctor.png',
			name: '养生知识',
			path: '/pages/health/health'
		},
		{
			icon: '/static/icons/doctor.png',
			name: '药材介绍',
			path: '/pages/herb/herb'
		},
		{
			icon: '/static/icons/doctor.png',
			name: 'AI大模型',
			path: ''
		}, // 示例，未定义路径
		{
			icon: '/static/icons/doctor.png',
			name: '课程报名',
			path: '/pages/course/course'
		}
	]);


	// 点击事件处理
	const handleClick = (index) => {
		const selectedItem = gridItems.value[index];
		console.log('跳转路径:', selectedItem.path); // 调试日志，检查是否获取到了正确的路径

		if (selectedItem && selectedItem.path) {
			uni.navigateTo({
				url: selectedItem.path // 普通页面跳转
			});
		} else {
			uni.showToast({
				title: '功能尚未开放！',
				icon: 'none'
			});
			console.warn(`未定义跳转路径: ${selectedItem?.name || '未知模块'}`);
		}
	};
</script>

<style lang="scss">
	.function {
		margin-top: 20px;
		padding: 0 10px;
	}

	.grid-item-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.icon {
		width: 40px;
		height: 40px;
		margin-bottom: 5px;
	}

	.text {
		font-size: 14px;
		color: #333;
		text-align: center;
	}
</style>