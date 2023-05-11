<template>
	<!-- 实时看板 -->
	<view>
		

		<!-- <view class="scroll_tab">
			<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
				<view class="tab_wrapper">
					<view :class="['scroll-view-item_H', 'tab_item', activeIndex === index ? 'active':'']" @click="toggle(index)" v-for="(item,index) in tabs" :key="index">{{item}}</view>
				</view>
			</scroll-view>

		</view> -->
		<realRank />
		
		<view class="cbox">
			<view class="c_title">
				<text>走势分析</text>
				<view class="tag-sel">
					<u-button size="mini">指标选择(2)</u-button>
				</view>
				
			</view>
			<view class="charts-box">
				<qiun-data-charts type="line" :canvas2d="true" :opts="opts" :chartData="chartData" />
			</view>
		</view>
	</view>
</template>

<script>
import realRank from "./realRank.vue";
	const opts = {
		color: ["#D92B34","#2A82E4","#FAC858","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
		padding: [15,10,0,15],
		enableScroll: false,
		legend: {},
		xAxis: {
			disableGrid: true
		},
		yAxis: {
			gridType: "dash",
			dashLength: 2
		},
		extra: {
			line: {
				type: "curve",
				width: 2,
				activeType: "hollow"
			}
		}
	}
	
export default {
	components: {
		realRank
	},
	data () {
		return {	
			opts,
			activeInt:0,
			chartData: null,
			activeIndex:0,
			tabs: ['常用指标','营收','流量','订单','活动','活动','利润']
		}
	},
	mounted () {
		setTimeout(() => {
			let res = {
					categories: ["2016","2017","2018","2019","2020","2021"],
					series: [
						{
							name: "商户实收",
							data: [35,36,31,33,13,34]
						},
						{
							name: "到手率",
							data: [18,27,21,24,6,28]
						}
					]
				};
			this.chartData = JSON.parse(JSON.stringify(res));
		}, 200);
	},
	methods: {
		toggle (index) {
			this.activeIndex = index;
		},
		handleDate () {

		},
		chooseType (index) {
			this.activeInt = index
		}
	}
}
	
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
	.cbox {
		padding: 24rpx;
		background-color: #fff;
		border-radius: 16rpx;
		min-height: 200rpx;
		
		.c_title {
			font-size: 36rpx;
			color: rgba(0,0,0,0.85);
			font-weight: 600;
			position: relative;
			padding-left: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 18rpx;
			&::before {
				content: '';
				display: block;
				width: 8rpx;
				height: 32rpx;
				background: $red;
				position: absolute;
				left: 0;
				top: 8rpx;
			}
		}
		
	}

 .charts-box {
		width: 100%;
		height: 300px;
	}
	.tab_wrapper {
	padding: 0 16rpx;
}
.tab_item {
	
	&.active {
		background-color: $red;
		color: #fff;
	}
}

	.scroll_tab {
	background-color: #fff;
}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: fit-content;
		text-align: center;
		font-size: 36rpx;
		height: 56rpx;
		line-height: 56rpx;
		background: #F5F6FA;
		border-radius: 4rpx;
		padding: 0 24rpx;
		margin: 30rpx 8rpx;
		font-size: 28rpx;
		color: #333;
	}
</style>