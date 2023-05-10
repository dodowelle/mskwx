<template>
  <view class="container">
    <page-head title="目标看板"></page-head>
    <view class="toptab">
      <shop-select></shop-select>
      <view class="select_wrapper select2">
        <uni-data-select
          class="selin"
          v-model="panel"
          :localdata="panelItems"
          placeholder="按平台"
          @change="handlePanel"
          :clear="false"
        />
        <view class="gap"></view>
        <uni-data-select
          class="selin"
          v-model="dataScope"
          :localdata="dateTypeItems"
          placeholder="按时间"
          @change="handleDate"
          :clear="false"
        />
        <uni-data-select
          class="selin"
          v-model="orgIds"
          :localdata="orgItems"
          placeholder="按组织"
          @change="handleOrg"
          :clear="false"
        />
      </view>
    </view>
    <view class="content">
      <view class="switch_gap">
        <text class="text">过滤无数据门店目标 </text>
        <fui-switch :scaleRatio="0.8" :checked="checked" :color="'#D92B34'"
          >test</fui-switch
        >
      </view>
      <view class="cbox">
        <view class="c_title">
          <view class="c_inner">
            <text class="text">本月目标达成情况 </text>
            <fui-icon name="help" :size="32" color="#ccc" @click="showToast"></fui-icon>
          </view>
        </view>
				<view class="c_tip flex_c_b">
					<text class="text"><text class="red">·</text> 时间进度 <text class="num">23.55%</text> </text>
					<text class="text"><text class="black">·</text>	 还剩 <text class="num">12天</text></text>
				</view>

				<month-target />
      </view>
    </view>
		<fui-toast ref="toast"></fui-toast>
  </view>
</template>

<script setup>
import { ref } from "vue";
import MonthTarget from "./component/MonthTarget.vue";
import MonthTarget from "./component/MonthTarget.vue";
const toast = ref(null);
const panel = ref("");
const dataScope = ref("");
const orgIds = ref("");
const panelItems = ref([
  {
    text: "全部平台",
    value: "0",
  },
  {
    text: "美团",
    value: "1",
  },
  {
    text: "饿了么",
    value: "2",
  },
]);
const dateTypeItems = ref([]);
const orgItems = ref([]);

const handlePanel = () => {};
const handleDate = () => {};
const handleOrg = () => {};

const checked = ref(true);

const showToast = () => {
	toast.value.show({
		text: '提示信息'
	})
}
</script>

<style lang="scss" scoped>
.select2 {
  width: 700rpx;
  justify-content: center;
  display: flex;
  align-items: center;
  .selin {
    width: 180rpx;
  }
  :deep(.uni-select) {
    border: none;
    padding-left: 0;
  }
}
.gap {
  width: 2rpx;
  height: 40rpx;
  background-color: #ccc;
  display: inline-block;
  margin: 0 24rpx;
}
.content {
  background-color: #f5f6fa;
}

.switch_gap {
  padding: 28rpx 24rpx;
  display: flex;
  .text {
    margin-right: 12rpx;
  }
}

.c_tip {
	width: 670rpx;
	height: 64rpx;
	background: #FAFAFC;
	line-height: 64rpx;
	padding: 0 16rpx;
	.red {
		color: #D92B34;
		font-weight: bold;
	}
	.black {
		color: #000;
		font-weight: bold;
	}
	.num {
		color: rgba(0,0,0,0.85);
	}
}
</style>
