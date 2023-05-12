<template>
	<view>
		<page-head title="批量设置目标" :isPrev="true"></page-head>
		<view class="cbox center">
			<view class="filed_set">
				<text class="text">上传目标月份：</text> 
				<u-input right-icon="arrow-down-fill" style="width:260rpx;" v-model="datetime" type="select" :disabled="true" :border="true" @click="show=true" placeholder="请选择日期" />
				<u-calendar v-model="show" :mode="mode" @change="change"></u-calendar>
			</view>
			<div class="gap"></div>
			<upload-file></upload-file>
		</view>
		<view class="cbox p24">
			<view class="_title">操作说明：</view>
			<view class="desc">1、请下载<text class="alink">批量设置目标模版</text>，并按模版要求进行填写</view>
			<view class="desc">2、只可对目标列进行编辑</view>
			<view class="desc">3、新店无法补齐当月数据，会导致整体完成率降低，请根据入驻时间填写目标值</view>
		</view>
	</view>
</template>

<script>
import uField from '../../uview/components/u-field/u-field.vue';
	export default {
  components: { uField },
		data() {
			return {
				datetime: '',
				show: false,
				mode: 'date',
				excelFile: ''
			}
		},
		methods: {
			change (e) {
				console.log(e)
				this.datetime = e.result;
			},
			
		}
	}
</script>

<style lang="scss" scoped>
.cbox {
	margin: 24rpx;
	padding: 60rpx;
	
}
.center {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.p24 {
	padding: 24rpx;
}
._title {
	font-size: 28rpx;
	font-family: Noto Sans SC-Regular, Noto Sans SC;
	font-weight: 400;
	color: rgba(0,0,0,0.85);
	line-height: 2;
	margin-bottom: 12rpx;
}
.alink {
	color: #2A82E4;
}
.desc {font-size: 24rpx;line-height: 1.8;}
.filed_set {display: flex;align-items: center; justify-content: center;}
.exportbtn {width: 258rpx;}
.gap {width: 100%;height: 40rpx;}


</style>
