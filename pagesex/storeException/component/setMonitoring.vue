<template>
  <view class="container">
    <view class="select_wrapper">
      <shop-select />
      <panel-select :labelWidth="160" inputAlign="right" />
      
    </view>
     
      <view class="tips">
        <text class="iconfont icon-warningfill"></text><text class="desc">{{description}}</text>
      </view>
      <view class="sel_wrap2">
        <data-select ref="ystarget" placeholder="营收指标"></data-select>
        <data-select ref="stats" placeholder="监控状态"></data-select>
      </view>
    <view class="cbox">
      <uni-table
        ref="table"
        :loading="loading"
        border
        stripe
        emptyText="暂无更多数据"
      >
        <uni-tr>
          <uni-th width="100" align="center">门店名称</uni-th>
          <uni-th align="left" width="120">上次操作人</uni-th>
          <uni-th width="140" align="center" :sortable="true">上次操作时间</uni-th>
          <uni-th width="140" align="center" :sortable="true">当前监控状态</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td>{{ item.store }}</uni-td>
					<uni-td>
						<view class="name">{{ item.name }}</view>
					</uni-td>
					<uni-td align="center">{{ item.time }}</uni-td>
					<uni-td>
						<view class="uni-group">
							<button class="uni-button" size="mini" type="primary">修改</button>
						</view>
					</uni-td>
				</uni-tr>
      </uni-table>
    </view>
  </view>
</template>
<script>
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
      description: '当前共16家门店，其中0家已关闭监控门店，系统不...'
    };
  },
};
</script>
<style lang="scss" scoped>
.select_wrapper {
  padding: 0 0 0 24rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.sel_wrap2 {
  display: flex;
  background-color: #fff;
  align-content: center;
  justify-content: space-around;
}
.tips {
  padding: 20rpx 28rpx;
  background: #E9F8FF;
  font-size: 28rpx;
}
.icon-warningfill {
  color: #2A82E4;
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
      font-size: 32rpx;
      color: rgba(0, 0, 0, 0.45);
      line-height: 1.6;
    }
    .count_num {
      font-size: 48rpx;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.85);
      line-height: 1.8;
    }
  }
  .rate {
    margin-left: 8rpx;
  }
}

.u-alert-tips {
  border-radius: 0;
}
</style>