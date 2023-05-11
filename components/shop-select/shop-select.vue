<template>
  <view class="select_wrapper">
    <u-field @click="show = true" v-model="storeData" 
			:label-width="80"
			:border-bottom="false"
			:disabled="true" placeholder="请选择门店"
			right-icon="arrow-down-fill"
			>
			<image
				slot="icon"
				class="store_icon"
				src="@/static/images/store.png"
				mode="aspectFill"
			></image>
		</u-field>
		<u-select v-model="show" mode="single-column" :list="list" @confirm="handleStore"></u-select>
  </view>
</template>
<script>
export default {
	data () {
		return {
			show: false,
			list:[
				{
					label: '一级组织',
					value: '0',
					children: [{
						text: '二级组织',
						value: '1',
					}]
				}
			],
			storeData: ''
		}
	},
	methods: {
		handleStore (data) {
			console.log(data)
			this.storeData = data[0].label
		}
	}
}

</script>
<style lang="scss" scoped>

.select_wrapper {
	margin-top: 0;
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