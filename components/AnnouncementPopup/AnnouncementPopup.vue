<template>
	<uni-popup ref="popup" type="center">
		<view class="popup-content">
			<view class="popup-title">公告通知</view>
			<view class="popup-text">
				提前3日开始预约。
				<br />
				预约号时段为预计时间，具体就诊时间以现场实际为准。
				<br /><br />
				营业时间：8:00 - 17:30
				<br />
				挂号时间：
				<br />
				（上午）7:45 - 11:45
				<br />
				（下午）13:45 - 17:00
				<br />
				取药时间：8:00 - 19:30
				<br /><br />
				注：
				<br />
				1. 部分专家有现场号，先到先挂，具体情况以现场放号为准。
				<br />
				2. 乔宝璋教授、曹利平教授无现场号。
			</view>
			<view class="popup-footer">
				<button class="popup-button" @click="closePopup">我知道了</button>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
	import {
		ref,
		defineExpose
	} from "vue";

	const popup = ref(null);

	// 打开弹窗
	const open = () => {
		if (popup.value) {
			popup.value.open();
		} else {
			console.error("Popup组件未加载完成！");
		}
	};

	// 关闭弹窗
	const close = () => {
		if (popup.value) {
			popup.value.close();
		}
	};

	// 暴露方法给父组件
	defineExpose({
		open,
	});
</script>

<style lang="scss">
	.popup-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		background-color: #fff;
		border-radius: 10px;
		text-align: center;
	}

	.popup-title {
		font-size: 20px;
		font-weight: bold;
		color: #333;
		margin-bottom: 10px;
	}

	.popup-text {
		font-size: 14px;
		color: #666;
		line-height: 24px;
		margin-bottom: 20px;
	}

	.popup-button {
		width: 100%;
		padding: 10px 0;
		background-color: #f26d3f;
		color: #fff;
		border: none;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
	}

	.popup-button:hover {
		background-color: #e15c2c;
	}
</style>