<template>
  <view class="empty">
    <image class="no_img" src="@/static/images/empty.png" mode="aspectFill"></image>
    <view v-if="description" class="text">{{description}}</view>
  </view>
</template>
<script>
	export default {
		props: {
			description:{
				type: String,
				default: ''
			}
		}
	}
</script>
<style scoped>
	.empty {
		text-align: center;
		padding: 24rpx;
    display: table-row;
    height: 220rpx;
	}
  .no_img {
    width: 200rpx;
    height: 200rpx;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .text {
    font-size: 24rpx;
  }
</style>