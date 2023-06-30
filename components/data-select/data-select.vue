<template>
  <view class="select_wrapper">
    <u-field @click="show = true" v-model="choose" 
			:label-width="labelWidth"
			:input-align="inputAlign"
			:border-bottom="false"
			:disabled="true" :placeholder="placeholder"
			right-icon="arrow-down"
			>
		</u-field>
		<u-select v-model="show" mode="single-column" :list="list" @confirm="handleSelect"></u-select>
  </view>
</template>
<script>
export default {
	props: {
		placeholder: {
			type:String,
			default: '按时间'
		},
		inputAlign: {
			type: String,
			default: 'left'
		},
		labelWidth: {
			type: [String, Number],
			default: 30
		},
		list: {
			type: Array,
			default: [
				{
					label: '比昨天',
					value: '0'
				}
			]
		}
	},
	data () {
		return {
			show: false,
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
	padding: 0;
	width: 100%;
	:deep(.selected-item) {
		.text-color {
			font-size: 28rpx;
			font-weight: 600;
		}
	}
}
</style>