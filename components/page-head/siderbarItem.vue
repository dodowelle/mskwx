<template>
	<view v-if="!item.hidden" :class="['nav_wrap', isActive ? 'active':'']" >
		<view :class="['nav_item', isActiveItem ? 'active_item':'']">
			<template v-if="hasShowingChild(item.children, item)">
				<view @click="handClick(item)">
					<text :class="['iconfont', item.style.icon ||'', isActive ? 'icon_active':''] "></text> {{item.style.navigationBarTitleText}}
					<text class="iconfont arro">{{isActive ? '&#xe62d;':'&#xe631;'}}</text>
				</view>
			</template>
			<view v-else @click="handClick2(item)">
				<text :class="['iconfont', item.style.icon ||'', isActive ? 'icon_active':''] "></text> {{item.style.navigationBarTitleText}}
			</view>
		</view>
		<template v-if="item.children && isActive">
			<child-item 
				v-for="(child, ind) in item.children"
				:key="ind"
				:item="child"
				class="nest-menu"
			 />
		</template>
		
	</view>
</template>

<script>
	import ChildItem from './child-item.vue';
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
		components: {
			ChildItem
		},
		data () {
			return {
				active: ''
			}
		},
		computed : {
			isActive () {
				return this.$store.state.clickedNav === this.item.style.navigationBarTitleText
			},
			isActiveItem () {
				return this.$store.state.activeItem === this.item.style.navigationBarTitleText
			}
		},
		methods: {
			handClick (item) {
				if(this.$store.state.clickedNav === item.style.navigationBarTitleText) {
					this.$store.commit('setClickedNav', '')
				} else {
					this.$store.commit('setClickedNav',item.style.navigationBarTitleText)
				}
			},
			handClick2 (item) {
				if(this.$store.state.activeItem === this.item.style.navigationBarTitleText) {
					
				} else {
					this.$store.commit('setActiveItem', item.style.navigationBarTitleText)
					uni.redirectTo({
						url:item.path
					}) 
				}
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
		padding: 0 20rpx;
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
	
	.nest-menu {
		padding-left: 40rpx;
	}
	
	.icon_active {
		color: $active_color;
		
	}
	
	.nav_wrap {
		padding: 20rpx;
		font-size: 28rpx;
		&.active {
			background: #FFF6F6;
			border-radius: 16rpx;
		}
	}
</style>