<template>
  <view class="select_wrapper">
    <u-field @click="show = true" v-model="choose" 
			:label-width="40"
			input-align="inputAlign"
			:border-bottom="false"
			:disabled="true" placeholder="按组织"
			right-icon="arrow-down"
			>
		</u-field>
		<u-select v-model="show" mode="single-column" :list="list" @confirm="handleSelect"></u-select>
  </view>
</template>
<script>
export default {
	props: {
		value: {
			type:String,
			default: ''
		},
		inputAlign: {
			type: String,
			default: 'left'
		}
	},
	data () {
		return {
			show: false,
			list:[
				{
					label: '全部',
					value: '0'
				}
			],
			choose: ''
		}
	},
	watch: {
		value: {
			handler (val) {
				this.choose = val;
			},
			immediate: true
		}
	},
	methods: {
		handleSelect (data) {
			console.log(data)
			this.choose = data[0].label
			this.$emit('input', data[0].label)
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
	width: 100%;
	// width: 200rpx;
	:deep(.selected-item) {
		.text-color {
			font-size: 28rpx;
			font-weight: 600;
		}
	}
}
</style>