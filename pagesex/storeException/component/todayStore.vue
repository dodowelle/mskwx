<template>
  <view class="container">
    <view class="select_wrapper">
      <shop-select />
      <panel-select :labelWidth="160" inputAlign="right" />
    </view>
    <view class="cbox">
      <view class="c_title">
        <view>
          <text>异常数据 </text>
          <u-icon
            name="question-circle-fill"
            size="34"
            color="#d8d8d8"
            @click="throttleToast"
          ></u-icon>
          <u-toast ref="questionToast"></u-toast>
        </view>
      </view>
      <view class="card_boxs">
        <view
          class="card_box"
          v-for="item in [
            '异常闭店',
            '当前异常闭店',
            '异常时间占比',
            '店均异常时间',
          ]"
          :key="item"
        >
          <text class="text">{{ item }}</text>
          <view class="count_num">123</view>
        </view>
      </view>
    </view>
    <view class="cbox">
      <view class="c_title">
        <view>
          <text>数据列表</text>
        </view>
      </view>

      <cho-btns :list="tabList" :current="currentTab"></cho-btns>

      <uni-table
        ref="table"
        :loading="loading"
        border
        stripe
        emptyText="暂无更多数据"
      >
        <uni-tr>
          <uni-th width="60" align="center">排行</uni-th>
          <uni-th align="left" width="100">组织架构</uni-th>
          <uni-th width="120" align="center" :sortable="true">异常闭店数</uni-th>
          <uni-th width="120" align="center" :sortable="true">异常时间占比</uni-th>
          <uni-th width="120" align="center" :sortable="true">店均异常时间</uni-th>
        </uni-tr>
      </uni-table>
    </view>
  </view>
</template>
<script>
import {throttle} from '@/utils/index'
export default {
  data() {
    return {
      tabs: [{}, {}, {}, {}],
      tabList: [
        { name: "异常闭店数" },
        { name: "当前异常闭店" },
        { name: "异常时间占比" },
        { name: "店均异常时间" },
      ],
      currentTab: ["异常闭店数"],
      loading: false,
      tableData: [],
    };
  },
  mounted() {
    this.throttleToast = throttle(this.showToast, 1000);
  },
  methods: {
    showToast () {
			console.log('showToast')
			this.$refs.questionToast.show({
				title: '?',
				type: 'default',
				duration: '2000'
			})
		},
  },
};
</script>
<style lang="scss" scoped>
.select_wrapper {
  padding: 0 0 0 24rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cbox {
  margin: 24rpx;
  padding: 24rpx;
  background-color: #fff;
  border-radius: 16rpx;
  min-height: 200rpx;

  .updateTime {
    float: right;
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.45);
    width: fit-content;
    display: flex;
  }
  .text {
    font-size: 24rpx;
  }
}

.card_boxs {
  display: grid;
  grid-template-columns: repeat(2, 337rpx);
  align-items: center;
  flex-wrap: wrap;
  .card_box {
    padding: 24rpx;
    background-color: #fafafc;
    margin-right: 16rpx;
    border-radius: 8rpx 8rpx 8rpx 8rpx;
    margin-top: 16rpx;
    border: 1px solid transparent;
    &.active,
    &:hover {
      background: #fff6f6;
      border: 1px solid #d92b34;
    }
    .text {
      font-size: 24rpx;
      color: rgba(0, 0, 0, 0.45);
      line-height: 1.6;
    }
    .count_num {
      font-size: 32rpx;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.85);
      line-height: 1.8;
    }
  }
  .rate {
    margin-left: 8rpx;
  }
}
</style>