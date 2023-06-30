<template>
<!-- 选择门店 -->
  <view class="select_wrapper">
    <u-field @click="show = true" v-model="storeData" 
			:label-width="40"
			input-align="left"
			:border-bottom="false"
			:disabled="true" placeholder="请选择门店"
			right-icon="arrow-down-fill"
			class="u_field"
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
	props: {
		value: {
			type: String,
			default:''
		}
	},
	data () {
		return {
			show: false,
			list:[
				{
					label: '市井婆豆沙牛乳',
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
	watch: {
		value: {
			handler (val) {
				this.storeData = val;
			},
			immediate: true
		}
	},
	methods: {
		handleStore (data) {
			this.storeData = data[0].label
			this.$emit('input', data[0].label)
		}
	}
}

</script>
<style lang="scss" scoped>
:deep(.u-field) {
	padding: 24rpx 0;
}
.select_wrapper {
	display: flex;
	align-items: center;
	padding: 0;
	width: 360rpx;
	margin-left: -20rpx;
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