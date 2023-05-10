<template>
	<view class="container">
		<page-head title="营业统计"></page-head>
		<view style="padding: 12rpx;">
			<uni-search-bar @confirm="search" placeholder="输入门店名称" radius="20" bgColor="#F5F6FA" clearButton="auto" cancelButton="none"></uni-search-bar>
		</view>
		<view class="list">
			<view class="list_item" v-for="(item, index) in orgList" :key="index">
				<view class="flex_c_c">
					<image class="org_icon" src="../../assets/images/org_icon.png" mode="aspectFit"></image>
					<text class="org_name">{{item}}</text>
				</view>
				<view>
					<button class="org_btn">查看下级</button>
					<button class="org_btn active">选择</button>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script setup>

import {ref} from 'vue';
const orgList = ref(['运营组一','运营组二','运营组三','运营组四']);
const search = (val) => {
	console.log('search', val)
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
</style>
