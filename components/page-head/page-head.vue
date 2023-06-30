<template name="page-head">
	<view class="pagehead">
		<uni-nav-bar backgroundColor="#D92B34" color="#ffffff" leftWidth="620rpx" :height="customBar">
			<template v-slot:left>
				<view :style="{'paddingTop': statusBar+'px'}">
					<view v-if="isPrev" class="nav_menu" @click="goBack">
						<uni-icons type="arrow-left" :size="20" color="#ffffff"></uni-icons>
						<text class="nav_title">{{title}}</text>
					</view>
					<view v-else class="nav_menu" @click="toggle">
						<uni-icons type="bars" :size="20" color="#ffffff"></uni-icons>
						<text class="nav_title">{{title}}</text>
					</view>
				</view>
			</template>
		</uni-nav-bar>
		<uni-drawer ref="navLeft" :width="280">
			<view class="nav_wrapper">
				<view class="nav_logo">
					<image class="nav_logo_img" src="@/static/logo/msk_logo_48.png" mode="aspectFit"></image>
					<text class="nav_logo_text">每时开外卖工具箱</text>
				</view>
				<view class="nav_inner">
					<siderbarItem v-for="(route, index) in getSideRouter" :key="index" :item="route" />
				</view>
			</view>
		</uni-drawer>
	</view>
</template>
<script>
	import routes from './routes.js'
	import siderbarItem from './siderbarItem.vue'
	import { mapGetters } from 'vuex'
	export default {
		name: "page-head",
		components: {
			siderbarItem
		},
		props: {
			title: {
				type: String,
				default: ""
			},
			isPrev: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				routes,
				customBar: 88,
				statusBar: 0,
				activeIndex: '',
				activeItem: '门店选择1'
			}
		},
		computed: {
			...mapGetters(['getSideRouter'])
		},
		created() {
			const that = this;
			uni.getSystemInfo({
				success(e) {
					that.statusBar = e.statusBarHeight;
					that.customBar = e.statusBarHeight + 48
				}
			})
		},
		
		methods: {
			goBack () {
				uni.navigateBack()
			},
			toggle() {
				this.$refs.navLeft.open()
			},
			updateActiveItem(val) {
				this.activeItem = val;
			}
		}
	}
</script>
<style scoped>
	.pagehead {
		z-index: 999;
	}
	.nav_menu {
		display: flex;
		align-items: center;
	}

	.nav_title {
		font-size: 28rpx;
		margin-left: 6px;
		font-weight: 600;
		line-height: 44rpx;
	}

	.nav_wrapper {
		padding: 0;
	}

	.nav_logo {
		display: flex;
		padding: 48rpx;
		margin-top: 40rpx;
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0,0,0,0.08);
	}

	.nav_logo_img {
		width: 80rpx;
		height: 80rpx;
	}

	.nav_logo_text {
		font-size: 36rpx;
		margin-left: 20rpx;
		line-height: 80rpx;
	}

	.nav_inner {
		padding: 32rpx 48rpx;
		max-height: 100vh;
		overflow: scroll;
	}
</style>