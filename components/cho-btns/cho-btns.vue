<template>
  <view class="scroll_tab">
    <scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
      <view class="tab_wrapper">
        <view
          v-for="(item, index) in list"
          :key="index"
          :class="[
            'scroll-view-item_H',
            'tab_item',
            activeIndexs.includes(item.name || item) ? 'tab_item_active' : '',
          ]"
          @click="toggle(item)"
          >{{ item.name || item }}</view
        >
      </view>
    </scroll-view>
  </view>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    current: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      activeIndexs: []
    }
  },
  methods: {
    toggle(item) {
      const index = item.name ||　item;
      if(this.activeIndexs.includes(index)) {
        this.activeIndexs.splice(this.activeIndexs.indexOf(index), 1)
      } else {
        this.activeIndexs.push(index);
      }
      this.$emit('input:current', this.activeIndexs)
    },

  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
.scroll_tab {
  background-color: #fff;
}

.scroll-view_H {
  white-space: nowrap;
  width: 100%;
}
.scroll-view-item {
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  font-size: 36rpx;
}
.scroll-view-item_H {
  display: inline-block;
  width: fit-content;
  text-align: center;
  font-size: 36rpx;
  height: 56rpx;
  line-height: 56rpx;
  background: #f5f6fa;
  border-radius: 4rpx;
  padding: 0 24rpx;
  margin: 30rpx 8rpx;
  font-size: 28rpx;
  color: #333;
}
.tab_wrapper {
  padding: 0 16rpx;
}
.tab_item_active {
    background-color: $red;
    color: #fff;
}
</style>