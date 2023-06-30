<template>
  <view class="container">
    <page-head title="平台账号管理2"></page-head>
		<view class="search_top">
			<uni-search-bar @confirm="search" placeholder="搜索账号或店铺名" radius="20" bgColor="#F5F6FA" clearButton="auto" cancelButton="none"></uni-search-bar>
      <view class="sel_groups">
        <view class="sel_item" style="width: 180rpx;"><data-select ref="authorizationStatus" placeholder="已授权" /></view>
        <view class="sel_item" style="width: 220rpx"><data-select ref="authorizationAPI" placeholder="API授权" /></view>
        <view class="sel_item" style="width: 220rpx"><data-select ref="accountType" placeholder="账号类型" /></view>
        <view class="sel_item" style="width: 150rpx"><data-select ref="panels" placeholder="平台" input-align="right" /></view>
        
      </view>
		</view>
    <view class="tip">
      <view class="tip_top">
        <text class="iconfont"></text>
        <text class="text">提示</text>
        <button class="tipbtn">刷新授权状态</button>
      </view>
      <view class="desc">
        <view class="desc_line">
          [插件授权失效]会影响CPC自动投放、流量数据获取，当前有0个账号插件授权失效。
        </view>
        <view class="desc_line">
          [API授权异常]会影响美团新店进入系统，当前有0个账号授权异常。
        </view>
      </view>
    </view>
    <view class="cbox" v-for="item in 3" :key="item">
      <view class="box_head">
				<image src="@/static/images/elm.png" mode="aspectFit" style="width: 32rpx;height:32rpx;vertical-align:middle;"></image>
        <text class="storename">市井婆西南分公司</text>
        <text class="status">连锁账号</text>
      </view>
      <view class="box_body">
        <view class="body_item">
          <text class="b_text">账号：</text>
          <text class="b_val">账号hcyyw</text>
        </view>
        <view class="body_item">
          <text class="b_text">账号创建时间：</text>
          <text class="b_val">12/24 13:32</text>
        </view>
        <view class="body_item">
          <text class="b_text">插件授权状态：</text>
          <text class="b_val"><text class="stats">已授权</text> 12/24 13:32</text>
        </view>
        <view class="body_item">
          <text class="b_text">API状态状态：</text>
          <text class="b_val"><text class="stats">未授权</text> 12/24 13:32</text>
        </view>
        <view class="body_item">
          <text class="b_text">门店数：</text>
          <text class="b_val">22</text>
        </view>
        <view class="body_item">
          <text class="b_text">已删除门店数：</text>
          <text class="b_val">0</text>
        </view>
      </view>
      <view class="box_footer">
        <navigator url="/"><text class="edit_txt">编辑</text> </navigator>
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
.container {
  padding-bottom: 24rpx;
}
.search_top {
  background-color: #fff;
}
.sel_groups {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 0 24rpx 0 0;
}
::v-deep .sel_item .u-field {
  padding: 20rpx 0;
  width: fit-content;
}
::v-deep .sel_item .u-label {
  width: fit-content;
}
.tip {
  background: #F1FAFF;
  border-radius: 16rpx 16rpx 16rpx 16rpx;
  opacity: 1;
  border: 2rpx solid #2A82E4;
  padding: 20rpx;
  margin: 24rpx;
  position: relative;
}
.tipbtn {
  width: 192rpx;
  height: 48rpx;
  padding: 8rpx;
  box-sizing: border-box;
  background: #FFFFFF;
  float: right;
  font-size: 24rpx;
  font-family: Noto Sans SC-Regular, Noto Sans SC;
  font-weight: 400;
  color: rgba(0,0,0,0.65);
  line-height: 30rpx;
  &::after {
    border-radius: 8rpx;
  }
}
.desc_line {margin-top: 16rpx;}

.cbox {
  margin: 24rpx;
  padding: 24rpx 0 ;
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
  padding:0 24rpx 24rpx;
}
.box_body {
  padding: 0 24rpx;
}
.box_footer {
  padding: 24rpx 24rpx 0;
  border-top: 1px solid #eeeeee;
  margin-top: 24rpx;
  display: flex;
  flex-direction: row-reverse;
}
.edit_txt {
  font-size: 28rpx;
  font-weight: 400;
  color: rgba(0,0,0,0.45);
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