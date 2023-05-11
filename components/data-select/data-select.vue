<template>
  <view class="select_wrapper">
    <u-field @click="show = true" v-model="choose" 
			:label-width="1"
			:border-bottom="false"
			:disabled="true" placeholder="按时间"
			right-icon="arrow-down-fill"
			>
		</u-field>
		<u-select v-model="show" mode="single-column" :list="list" @confirm="handleSelect"></u-select>
  </view>
</template>
<script>
export default {
	data () {
		return {
			show: false,
			list:[
				{
					label: '比昨天',
					value: '0'
				}
			],
			choose: ''
		}
	},
	methods: {
		handleSelect (data) {
			console.log(data)
			this.choose = data[0].label
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
	width: 180rpx;
	:deep(.selected-item) {
		.text-color {
			font-size: 28rpx;
			font-weight: 600;
		}
	}
}
</style>