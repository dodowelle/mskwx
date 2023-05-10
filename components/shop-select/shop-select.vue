<template>
  <view class="select_wrapper">
    <image class="store_icon" src="@/assets/images/store.png" mode="aspectFill"></image>
    <uni-data-picker v-model="storeData" :localdata="items" popup-title="请选择门店" @change="handleStore"
      :border="false"></uni-data-picker>
  </view>
</template>
<script setup>
import { ref } from 'vue';

const items = ref([{
  text: '一级组织',
  value: '0',
  children: [{
    text: '二级组织',
    value: '1',
  }]
}])
const storeData = ref([]);
const handleStore = () => {

}

defineExpose({
  storeData
})
</script>
<style lang="scss" scoped>
.select_wrapper {
	margin-top: 20rpx;
	display: flex;
	align-items: center;
	padding: 0 24rpx;
	width: 400rpx;
	.store_icon {
		width: 34rpx;
		height: 34rpx;
	}
	:deep(.selected-item) {
		.text-color {
			font-size: 28rpx;
			font-weight: 600;
		}
	}
}
</style>