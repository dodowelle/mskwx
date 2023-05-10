<template>
	<view>
		<block v-if="paramData!=undefined">
			<view class="item-box" :style="{'padding-left':(35*parseInt(currentLayer))+'rpx'}"
				@tap="tapItemOne(paramData)">
				<image v-if="paramData[children]!=undefined" :class="paramData.show? 'arrow-down-css':'arrow-right-css'"
					src="./image/arrow.png">
				</image>
				<view>{{paramData[title]}}</view>
				<!-- <image class="image-box" @click.stop="setChecked(paramData)"
					:src="paramData.checked?'../../static/imbox1.png':'../../static/imbox2.png'"></image> -->
			</view>
			<view v-if="paramData[children]!=undefined&&paramData.created" v-show="paramData.show">
				<view v-for="item in paramData[children]">
					<neo-tree-list-item @parentEmit="parentEmit" :parentData="paramData" :layer="(currentLayer+1)"
						:style="{'padding-left':10}" :paramData="item" @tapTitle="tapItemOne">
					</neo-tree-list-item>
				</view>
			</view>
		</block>

	</view>
</template>

<script>
	export default {
		name: "neo-tree-list-item",
		data() {
			return {
				currentLayer: 0, //当前层级
			};
		},
		props: {
			paramData: {
				type: Object,
				default: undefined
			},
			layer: {
				type: [Number, String],
				default: 1
			},
			parentData: {
				type: Object,
				default: undefined
			},
			title: {
				type: String,
				default: 'name'
			},
			children: {
				type: String,
				default: 'children'
			}

		},
		watch: {
			layer: {
				handler(newValue, oldValue) {
					if (oldValue == undefined)
						newValue = parseInt(newValue) - 1
					this.currentLayer = parseInt(newValue) + 1
				},
				immediate: true
			}
		},


		methods: {
			tapItemOne(item_one) {
				if (item_one.children == undefined){
					this.$emit('tapTitle', item_one)
					return
				}
					
				item_one.show = item_one.show == undefined ? true : !item_one.show
				if (item_one.show && (item_one.created == undefined)) {
					item_one.created = true
				}
				this.$forceUpdate()

			},

			parentEmit() {
				if (this.parentData != undefined) {
					let allChecked = true
					this.parentData.children.forEach(item => {
						if (!item.checked)
							allChecked = false

					})
					let parentName = this.parentData.name
					this.parentData.name = ''
					this.parentData.name = parentName
					this.parentData.checked = allChecked
					this.$emit('parentEmit')
				}
			},

			//选中处理
			setChecked(item_one) {
				let name = item_one.name
				item_one.name = ''
				item_one.name = name
				item_one.checked = item_one.checked == undefined ? true : !item_one.checked
				this.recursionChecked(item_one, item_one.checked)
				if (this.parentData != undefined) {
					let allChecked = true
					this.parentData.children.forEach(item => {
						if (!item.checked)
							allChecked = false

					})
					let parentName = this.parentData.name
					this.parentData.name = ''
					this.parentData.name = parentName
					this.parentData.checked = allChecked
					this.$emit('parentEmit')
				}



			},
			recursionChecked(item_one, checked) {
				if (item_one.children == undefined)
					return
				item_one.children.forEach((item, index) => {
					let name = item.name
					item.name = ''
					item.name = name
					item.checked = checked
					this.recursionChecked(item, checked)
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.item-box {
		display: flex;
		align-items: center;
		min-height: 60rpx;
		position: relative;

		.image-box {
			position: absolute;
			right: 15rpx;
			width: 45rpx;
			height: 45rpx;
		}

	}

	.arrow-down-css {
		width: 30rpx;
		height: 30rpx;
		margin-right: 1rpx;
		transform: rotate(90deg);
	}

	.arrow-right-css {
		width: 30rpx;
		height: 30rpx;
		margin-right: 1rpx // transform: rotate(-90deg);
	}
</style>
