<template>
  <view class="tab_wrapper">
    <view
      v-for="(item, index) in tabs"
      :key="index"
      @click="changeTab(index)"
      :class="['tab_item', activeIndex === index ? 'active' : '']"
    >
      <text class="text">{{ item.name || item }}</text>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },
    current: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    changeTab (index) {
      this.activeIndex = index;
      this.$emit('input:current', index)
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
.toptab {
	background-color: #fff;
	margin-bottom: 24rpx;
}
.tab_wrapper {
	width: 100%;
	height: 88rpx;
	display: flex;
	align-items: center;
	justify-content: space-around;
	border-bottom: 1px solid #eee;
	.tab_item {
		line-height: 88rpx;
		color: rgba(0,0,0,0.45);
		transition: 300ms;
		.text {
			font-size: 28rpx;
			font-weight: 600;
		}
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 4rpx;
      width: 100%;
      background-color: transparent;
    }
		&.active {
			color: $red;
			position: relative;
			&::after {
				content: '';
				display: block;
				position: absolute;
				bottom: 0;
				height: 4rpx;
				width: 100%;
				background-color: $red;
			}
		}
	}
}

</style>