<template>
	<view v-if="!item.hidden" :class="['nav_wrap', isActive ? 'active':'']" >
		<view :class="['nav_item', isActiveItem ? 'active_item':'']">
			<template v-if="hasShowingChild(item.children, item)">
				<view @click="handClick(item)">
					<text :class="['iconfont', item.meta.icon ||'', isActive ? 'icon_active':''] "></text> {{item.meta.title}}
					<text class="iconfont arro">{{isActive ? '&#xe62d;':'&#xe631;'}}</text>
				</view>
			</template>
			<view v-else @click="handClick2(item)">
				<text :class="['iconfont', item.meta.icon ||'', isActive ? 'icon_active':''] "></text> {{item.meta.title}}
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		props: {
			item: {
				type: Object,
				required: true
			},
			activeIndex: {
				type: String
			},
			
		},
		data () {
			return {
				active: ''
			}
		},
		computed : {
			isActive () {
				return this.$store.state.clickedNav == this.item.meta.title
			},
			isActiveItem () {
				return this.$store.state.activeItem == this.item.meta.title
			}
		},
		methods: {
			handClick (item) {
				if(this.$store.state.clickedNav === item.meta.title) {
					this.$store.commit('setClickedNav','')
				} else {
					this.$store.commit('setClickedNav', item.meta.title)
				}
			},
			handClick2 (item) {
				this.$store.commit('setActiveItem', item.meta.title)
				uni.navigateTo({
					url:item.path
				}) 
			},
			hasShowingChild(children = [], parent) {
				if (!children) {
					children = [];
				}
				const showingChildren = children.filter(item => {
					return !item.hidden
				})

				// When there is only one child router, the child router is displayed by default
				if (showingChildren.length > 0) {
					return true
				}
				
				return false
			},
		}
	}
</script>

<style lang="scss" scoped>
	$active_color: #D92B34;
	.nav_item {
		margin: 0;
		font-size: 28rpx;
		height: 80rpx;
		line-height: 80rpx;
		color: #333;
		padding: 0 20rpx 0 60rpx;
		position: relative;
		&.active {
			color: $active_color;
		}
	}
	
	.arro {
		position: absolute;
		right: 20rpx;
	}
	
	.active_item {
		background-color: $active_color;
		color: #fff;
		border-radius: 8rpx;
	}
	
	.nav_item .iconfont {font-size: 32rpx;}
	
	
	
	.icon_active {
		color: $active_color;
	}
	
	.nav_wrap {
		padding: 0;
		font-size: 28rpx;
		&.active {
			background: #FFF6F6;
			border-radius: 16rpx;
		}
	}
	
</style>