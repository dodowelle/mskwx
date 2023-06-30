<template>
  <!-- 实时门店排行榜 -->
  <view>
    <view class="rank_top">
      <view class="date_update">
        <text class="text">数据更新时间：</text>
        <text class="date_num">2022-12-24 20:45</text>
      </view>
      <view class="scroll_tab">
        <scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
          <view class="tab_wrapper">
            <view
              :class="[
                'scroll-view-item_H',
                'tab_item',
                activeIndex === index ? 'active' : '',
              ]"
              @click="toggle(index)"
              v-for="(item, index) in tabs"
              :key="index"
              >{{ item }}</view
            >
          </view>
        </scroll-view>
      </view>
    </view>
    <view class="uni-container">
      <uni-table
        ref="table"
        :loading="loading"
        border
        stripe
        emptyText="暂无更多数据"
      >
        <uni-tr>
          <uni-th width="60" align="center">排行</uni-th>
          <uni-th align="left">门店</uni-th>
          <uni-th width="100" align="center" :sortable="true">商户实收</uni-th>
          <uni-th width="90" align="center" :sortable="true">环比</uni-th>
          <uni-th width="150" align="center" :sortable="true"
            >单均商户实收</uni-th
          >
          <!-- <uni-th width="204" align="center">操作</uni-th> -->
        </uni-tr>
        <uni-tr v-for="(item, index) in tableData" :key="index">
          <uni-td>{{ item.date }}</uni-td>
          <uni-td>
            <view class="name">{{ item.name }}</view>
          </uni-td>
          <uni-td align="center">{{ item.address }}</uni-td>
          <uni-td align="center">{{ item.address }}</uni-td>
          <uni-td align="center">{{ item.address }}</uni-td>
        </uni-tr>
        <empty-state slot="empty"/>
      </uni-table>
    </view>
  </view>
</template>

<script>
import emptyState from '../../../components/empty-state/empty-state.vue';
export default {
  components: { emptyState },
  data() {
    return {
      loading: false,
      tabs: ["商户实收", "有效订单", "客单价(原价)", "单均商户实收"],
      activeIndex: 0,
      tableData: [],
    };
  },
  methods: {
    toggle(index) {
      this.loading = true;
      this.activeIndex = index;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    getChange() {},
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variable.scss";
.cbox {
  margin: 24rpx;
  padding: 24rpx;
  background-color: #fff;
  border-radius: 16rpx;
  min-height: 200rpx;
}
.rank_top {
  background-color: #fff;
}
.date_update {
  padding: 24rpx 24rpx 0;
}
.date_num {
  color: $black;
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
  margin: 30rpx 8rpx;
  font-size: 28rpx;
  color: #333;
}
.tab_wrapper {
  padding: 0 16rpx;
}
.tab_item {
  &.active {
    background-color: $red;
    color: #fff;
  }
}
</style>