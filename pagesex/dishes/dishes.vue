<template>
  <view class="container">
    <page-head title="菜品监控"></page-head>
    <view class="select_wrapper">
      <shop-select />
      <view class="cho_wrap">
        <panel-select ref="panel" inputAlign="right" placeholder="按平台" style="width: 280rpx" />
        <data-select ref="date" inputAlign="right" placeholder="按时间" style="width: 350rpx"/>
       
      </view>
    </view>
    <view class="gap__20"></view>
    <view class="list">
      <view class="list_item">
        <text class="list_item_title">设置高峰时段</text>
        <text class="iconfont icon-arrow-right"></text>
      </view>
      <view class="list_item">
        <text class="list_item_title">设置核心菜品</text>
        <text class="iconfont icon-arrow-right"></text>
      </view>
      <view class="list_item">
        <text class="list_item_title">设置监控门店</text>
        <text class="iconfont icon-arrow-right"></text>
      </view>
    </view>

     <view class="footerbar">
      <view class="footerbar_btn" @click="exportDetail">导出明细报表</view>
      <view class="footerbar_btn active" @click="exportPost">导出汇总报表</view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    exportDetail () {

    },
    exportPost () {

    }
  }
}
</script>
<style lang="scss" scoped>
.select_wrapper {
  padding: 0 24rpx;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #fff;
}
.cho_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list {
  background: #FFFFFF;
}
.list_item {
  width: 750rpx;
  height: 88rpx;
  border-radius: 0rpx 0rpx 0rpx 0rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  padding: 0 32rpx;
}
.list_item_title {
  font-size: 28rpx;
  font-weight: 400;
  color: rgba(0,0,0,0.85);
}


</style>