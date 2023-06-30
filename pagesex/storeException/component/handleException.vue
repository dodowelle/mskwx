<template>
  <view class="container">
    <view class="select_wrapper">
      <shop-select />
      <view class="cho_wrap">
        <panel-select ref="panel" placeholder="按平台" />
        <data-select ref="date" />
        <data-select
          ref="section"
          :list="situations"
          placeholder="处理情况"
        ></data-select>
      </view>
    </view>
    <view class="cbox" v-for="item in 3" :key="item">
      <view class="box_head">
				<image src="../../../static/images/elm.png" mode="aspectFit" style="width: 32rpx;height:32rpx;vertical-align:middle;"></image>
        <text class="storename">老长沙湘菜馆（湘府路店）</text>
        <text class="status">未处理</text>
      </view>
      <view class="box_body">
        <view class="body_item">
          <text class="b_text">异常开始时间/异常结束时间：</text>
          <text class="b_val">5.65%</text>
        </view>
        <view class="body_item">
          <text class="b_text">异常持续时间：</text>
          <text class="b_val">40.23min</text>
        </view>
        <view class="body_item">
          <text class="b_text">闭店原因：</text>
          <text class="b_val">营业不佳</text>
        </view>
        <view class="body_item">
          <text class="b_text">处理人：</text>
          <text class="b_val">陈迪</text>
        </view>
        <view class="body_item">
          <text class="b_text">处理时间：</text>
          <text class="b_val">2022-12-24 12:24</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import DataSelect from "../../../components/data-select/data-select.vue";
import panelSelect from "../../../components/panel-select/panel-select.vue";
export default {
  components: { panelSelect },
  data() {
    DataSelect;
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
      situations: [
        { label: "已处理", value: 1 },
        { label: "未处理", value: 2 },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding-bottom: 24rpx;
}
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
.cbox {
  margin: 24rpx;
  padding: 24rpx;
  background-color: #fff;
  border-radius: 16rpx;
  min-height: 200rpx;
}

.box_head {
  box-shadow: inset 0rpx -1rpx 0rpx 0rpx #eeeeee;
  border-radius: 0rpx 0rpx 0rpx 0rpx;
  position: relative;
  padding-bottom: 24rpx;
	vertical-align: middle;
}

.body_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16rpx;
}

.storename {
  font-size: 28rpx;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
}
.status {
  font-size: 24rpx;
  font-weight: 400;
  color: #d92b34;
  float: right;
}

.b_text {
  font-size: 24rpx;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
}

.b_val {
  font-size: 24rpx;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
}
</style>