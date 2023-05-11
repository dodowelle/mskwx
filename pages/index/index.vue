<template>
	<view class="container">
		<page-head title="营业统计"></page-head>
		<view style="padding: 12rpx;">
			<uni-search-bar @confirm="search" placeholder="输入门店名称" radius="20" bgColor="#F5F6FA" clearButton="auto" cancelButton="none"></uni-search-bar>
		</view>
		<view class="list">
			<view class="list_item" v-for="(item, index) in orgList" :key="index">
				<view class="flex_c_c">
					<image class="org_icon" src="@/static/images/org_icon.png" mode="aspectFit"></image>
					<text class="org_name">{{item}}</text>
				</view>
				<view>
					<button class="org_btn" @click="shoDrawer">查看下级</button>
					<button class="org_btn active">选择</button>
				</view>
			</view>
		</view>
		<uni-drawer ref="showRight" mode="right" :width="screenWidth" :mask-click="true">
			<view>
				<next-orgit />
				<view class="footerbar">
					<view class="footerbar_btn" @click="selectAll">全部门店</view>	
					<view class="footerbar_btn" @click="goBack">返回上级</view>	
				</view>
			</view>
		</uni-drawer>
	</view>
</template>

<script>

export default {
	data () {
		return {
			screenWidth: uni.getWindowInfo().screenWidth,
			orgList: ['运营组一','运营组二','运营组三','运营组四']
		}
	},
	methods: {
		search: (val) => {
			console.log('search', val)
		},
		shoDrawer () {
			this.$refs['showRight'].open()
		},
		selectAll(){
			this.$refs['showRight'].close()
		},
		goBack() {
			this.$refs['showRight'].close()
		}
	}
}

</script>

<style lang="scss">
	.container {
		padding: 0;
		font-size: 14rpx;
		line-height: 24rpx;
		background-color: #fff;
		height: 100vh;
	}
	.list {
		.list_item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 24rpx;
		}
		.org_icon {
			width: 36rpx;
			height: 36rpx;
		}
		.org_name {
			font-size: 28rpx;
			margin-left: 8rpx;
		}
		.org_btn {
			width: fit-content;
			display: inline-block;
			height: 48rpx;
			line-height: 44rpx;
			border-radius: 4rpx;
			opacity: 1;
			border: 1rpx solid rgba(0,0,0,0.45);
			color: rgba(0,0,0,0.45);
			background-color: #fff;
			font-size: 24rpx;
			padding: 0 24rpx;
			margin-left: 16rpx;
			&.active {
				border-color: #D92B34;
				color: #D92B34;
			}
			&::after {
				border: none;
			}
		}
	}
	.footerbar {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 108rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -8rpx 16rpx 0rpx rgba(204,204,204,0.2);
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.footerbar_btn {
		width: 331rpx;
		height: 80rpx;
		background: #F2F2F2;
		border-radius: 4rpx 4rpx 4rpx 4rpx;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
</style>
