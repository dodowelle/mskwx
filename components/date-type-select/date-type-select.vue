<template>
  <view class="container">
    <view class="scroll_tab">
      <scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
        <view class="tab_wrapper">
          <view
            v-for="(item, index) in dateTypes"
            :key="index"
            :class="[
              'scroll-view-item_H',
              'tab_item',
              activeIndex === index ? 'tab_item_active' : '',
            ]"
            @click="toggle(index, item)"
            >{{ item.label }}</view>
        </view>
      </scroll-view>
    </view>
    <view class="cho">
      <view class="date">
        <text class="iconfont icon-date"></text>
        <text class="dateText"> {{showTime}}</text>
      </view>
      <view class="slot">
        <slot></slot>
      </view>
    </view>
    <u-calendar v-model="showCalendar" mode="range" @change="handleCalendar"></u-calendar>
  </view>

</template>
<script>
import {parseTime} from '@/utils/index.js'
export default {
  props: {
    dateTypes: {
      type: Array,
      default: () => [
        { label: "昨天", value: -1 },
        { label: "近7天", value: -7 },
        { label: "近30天", value: -30 },
        { label: "自定义", value: null },
      ],
    }
  },
  data () {
    return {
      activeIndex: [],
      datePicker: [new Date()],
      showCalendar: false
    }
  },
  computed: {
    showTime: {
      get () {
        console.log('get ----')
        if(this.datePicker.constructor === Array) {
          return this.datePicker.map(i => parseTime(i, '{y}/{m}/{d}')).join(' - ')
        } else {
          return parseTime(this.datePicker,'{y}/{m}/{d}')
        }
      },
      set (val) {}
    }
  },
  methods: {
    handleCalendar (e) {
      if(e.endDate) {
        this.datePicker = [e.startDate, e.endDate]
      }
    },
    toggle (index, item) {
      this.activeIndex = index
      this.handleDtype(item.value)
    },
    handleDtype(val) {
      const date = new Date();

      if (val === null) {
        // 自定义
        this.showCalendar = true;
        return;
      }
      if(val < -1) {
        date.setTime(date.getTime() + 3600 * 1000 * 24 * val);
        this.datePicker = [date, new Date()];
        
        return;
      }

      switch (val) {
        case -1:
          date.setTime(date.getTime() + 3600 * 1000 * 24 * val);
          this.datePicker = [date];
          
          break;
        case 0:
        case 1:
          date.setTime(date.getTime() + 3600 * 1000 * 24 * val);
            // this.queryParams.datePicker = [new Date(), date];
          this.datePicker = [date];
          
          break;
        default:
          date.setTime(date.getTime() + 3600 * 1000 * 24 * val);
          this.datePicker = [new Date(), date];
      
          break;
      }
    },
   
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';
.container {
  display: block;
  width: 100%;
}
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
  margin: 14rpx 24rpx 14rpx 0;
  font-size: 28rpx;
  color: #333;
}
.tab_wrapper {
  padding: 0 16rpx;
}
.tab_item {
  border: 1px solid transparent;
}
.tab_item_active {
  background-color: #FFF2F2;
  color: $red;
  border: 1px solid $red;
}

.cho {
  margin-top: 14rpx;
  height: 80rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dateText {
  white-space: nowrap;
}
</style>