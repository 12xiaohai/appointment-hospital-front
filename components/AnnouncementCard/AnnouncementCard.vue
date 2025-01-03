<template>
	<!-- 公告卡片 -->
	<view class="announcement" @click="showPopup">
		<view class="announcement-title">公告</view>
		<view class="announcement-content">
			提前3日开始预约。预约号时段为预计时间，具体就诊时间以现场实际为准…
		</view>
	</view>

</template>

<script setup>
	const emit = defineEmits(["showPopup"]);

	const onClick = () => {
		emit("showPopup"); // 触发 showPopup 事件通知父组件
	};
</script>

<style lang="scss">
	.announcement {
		display: flex;
		align-items: center;
		background-color: #fff8e1;
		padding: 10px 15px;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}

	.announcement-title {
		font-size: 16px;
		font-weight: bold;
		color: #a96b2c;
		margin-right: 10px;
	}

	.announcement-content {
		flex: 1;
		font-size: 14px;
		line-height: 20px;
		color: #8b5e3c;
	}
</style>