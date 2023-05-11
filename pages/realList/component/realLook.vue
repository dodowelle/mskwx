<template>
	<!-- 实时看板 -->
	<view>
		<view class="cbox">
			<view class="c_title">
				<text>实时看板</text> 
				<view class="updateTime">
					<text class="text">数据更新时间：</text> 
					<text class="datetime">2022-12-24 20:45</text>
				</view> 
			</view>
			<view class="card_boxs">
				<div class="card_box" v-for="item in ['商户实收', '营业额', '有效订单', '单均商户实收', '到手率']" :key="item">
					<text class="text">{{item}}</text>
					<view class="count_num">789.56</view>
					<view><text class="text">环比 </text>
						<text class="rate"> <text class="iconfont icon-bottom"
								style="color: #08AB6F; font-weight: bold;"></text>10.45%</text>
					</view>
				</div>
			</view>
		</view>
		
		<view class="cbox">
			<view class="c_title">
				<text>商户实收</text>
				<view class="switch">
					<div :class="['switch-item', activeInt === index ? 'active':'']" v-for="(item, index) in ['分时', '累计']"
						:key="index" @click="chooseType(index)">{{item}}</div>
				</view>
				
			</view>
			<view class="charts-box">
				<qiun-data-charts type="line" :canvas2d="true" :opts="opts" :chartData="chartData" />
			</view>
		</view>
	</view>
</template>

<script>
	const opts = {
		color: ["#D92B34","#D8D8D8","#FAC858","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
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
	data () {
		return {	
			opts,
			activeInt:0,
			chartData: null,
		}
	},
	mounted () {
		setTimeout(() => {
			let res = {
					categories: ["2016","2017","2018","2019","2020","2021"],
					series: [
						{
							name: "今日",
							lineType: "dash",
							data: [35,36,31,33,13,34]
						},
						{
							name: "昨日",
							data: [18,27,21,24,6,28]
						}
					]
				};
			this.chartData = JSON.parse(JSON.stringify(res));
		}, 200);
	},
	methods: {
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
		margin: 24rpx;
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
		.updateTime {
			float: right;
			font-size: 24rpx;
			font-weight: 400;
			color: rgba(0,0,0,0.45);
			width: fit-content;
			display: flex;
		}
		.text {
			font-size: 24rpx;
		}
	}
	
	.card_boxs {
		display: grid;
		grid-template-columns: repeat(2, 337rpx);
		align-items: center;
		flex-wrap: wrap;
		.card_box {
			padding: 24rpx;
			background-color: #FAFAFC;
			margin-right: 16rpx;
			margin-top: 16rpx;
			&.active {
				background-color: #FFF6F6;
			}
			.text {
				font-size: 32rpx;color: rgba(0,0,0,0.45);
				line-height: 1.6;
			}
			.count_num {font-size: 48rpx;font-weight: 600; color: rgba(0,0,0,0.85);line-height: 1.8;}
		}
		
	}
	
	
	.switch {
		width: 200rpx;
		height: 56rpx;
		background: #FAFAFC;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		position: absolute;
		right: 0;
		display: flex;
		align-content: center;
		align-items: center;
		padding: 4rpx;
		.switch-item {
			width: 100rpx;
			height: 56rpx;
			background: #FAFAFC;
			text-align: center;
			font-size: 24rpx;
			line-height: 54rpx;
			position: relative;
			z-index: 1;
			&::after {
				content: '';
				display: block;
				width: 90rpx;
				height: 48rpx;
				background: transparent;
				border-radius: 8rpx;
				border: 1rpx solid #E5E5E5;
				position: absolute;
				top: 3rpx;
				left: 3rpx;
				transition: all 300ms;
				pointer-events: none;
				z-index: -1;
				opacity: 0;
			}
			&.active {
				&::after {
					opacity: 1;
					background: rgba(255,255,255,1);
				}
			}
		}
	}
	
 .charts-box {
		width: 100%;
		height: 300px;
	}
</style>