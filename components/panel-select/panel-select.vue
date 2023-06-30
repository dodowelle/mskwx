<template>
<!-- 选择平台 -->
  <view class="select_wrapper_p">
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
		value: {
			type: String,
			default: ''
		},
		list: {
			type: Array,
			default: [{label: '全部平台',value: '0'}, {label: '饿了么', value: '1'},{label: '美团', value: '2'}]
		},
		placeholder: {
			type: String,
			default: '按平台'
		},
		labelWidth: {
			type: [String, Number],
			default: 20
		},
		inputAlign: {
			type: String,
			default: 'left'
		}
	},
	data () {
		return {
			show: false,
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
			this.choose = data[0].label;
			this.$emit('input', data[0].label)
		}
	}
}

</script>
<style lang="scss" scoped>

.select_wrapper_p {
	margin-top: 0;
	display: flex;
	align-items: center;
	padding: 0;
	// min-width: 180rpx;
	width: 100%;
	:deep(.selected-item) {
		.text-color {
			font-size: 28rpx;
			font-weight: 600;
		}
	}
}
</style>