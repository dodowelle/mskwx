<template>
	<!-- 实时门店排行榜 -->
	<view class="cbox">
		<view class="c_title">
				<text>运营概览</text> 
			
			</view>
			<view class="updateTime">
				<text class="text">商户实收 = 有效订单 * 客单价 * 到手率</text> 
			</view> 
			<view class="card_boxs">
				<div class="card_box" v-for="item in ['有效订单', '客单价(原价)', '到手率']" :key="item">
					<text class="text">{{item}}</text>
					<view class="count_num">789.56</view>

					<view class="flex_c_c">
						<text class="text">环比 </text>
						<text class="rate"> 
							<text class="iconfont icon-top up"
						style="font-weight: bold;"></text>10.45%</text>
					</view>
				</div>
			</view>
		<view class="rank_top">
			
			<view class="scroll_tab">
				<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
					<view class="tab_wrapper">
						<view :class="['scroll-view-item_H', 'tab_item', activeIndex === index ? 'active':'']" @click="toggle(index)" v-for="(item,index) in tabs" :key="index">{{item}}</view>
					</view>
				</scroll-view>

			</view>
		</view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe customEmpty>
				<uni-tr>
					<uni-th width="60" align="center">排行</uni-th>
					<uni-th width="100" align="center">本期值</uni-th>
					<uni-th width="100" align="center" :sortable="true">美团</uni-th>
					<uni-th width="100" align="center" :sortable="true">饿了么</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td>{{ item.date }}</uni-td>
					<uni-td>
						<view class="name">{{ item.name }}</view>
					</uni-td>
					<uni-td align="center">{{ item.address }}</uni-td>
					<uni-td align="center">{{ item.address }}</uni-td>
					<uni-td align="center">{{ item.address }}</uni-td>
					
				</uni-tr>
				<empty-state slot="empty" />
			</uni-table>
			
		</view>

	</view>
</template>

<script>
import EmptyState from '@/components/empty-state/empty-state.vue'
export default {
	components: {
		EmptyState
	},
	data () {
		return {
			loading: false,
			tabs: ['常用指标', '营收','流量','订单','活动','利息'],
			activeIndex: 0,
			tableData: [],

		}
	},
	methods: {
		toggle (index) {
			this.loading = true;
			this.activeIndex = index
			setTimeout(() => {
				this.loading = false
			}, 500)
		},
		getChange () {}
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
}
.updateTime {
			font-size: 24rpx;
			font-weight: 400;
			color: rgba(0,0,0,0.45);
			width: fit-content;
			display: flex;
			margin-bottom: 16rpx;
		}
		.text {
			font-size: 24rpx;
		}
.card_boxs {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(3, 33%);
		align-items: center;
		flex-wrap: wrap;
		.card_box {
			padding: 24rpx;
			background-color: #FAFAFC;
			margin-right: 12rpx;
			margin-top: 16rpx;
			text-align: center;
			&:last-child {
				margin-right: 0;
			}
			&.active {
				background-color: #FFF6F6;
			}
			.text {
				font-size: 24rpx;color: rgba(0,0,0,0.45);
				line-height: 1.6;
			}
			.count_num {font-size: 32rpx;font-weight: 600; color: rgba(0,0,0,0.85);line-height: 1.8;}
		}
		
	}
	.text {font-size: 24rpx;}
	.rate {
		font-size: 24rpx;

	}
	.iconfont.icon-top {
		font-size: 24rpx;
	}
	
.rank_top {
	background-color: #fff;
}
.date_update {
	padding: 24rpx 24rpx 0;
}
.date_num {
	color: $black;
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
.tab_wrapper {
	padding: 0 16rpx;
}
.tab_item {
	
	&.active {
		background-color: $red;
		color: #fff;
	}
}
</style>