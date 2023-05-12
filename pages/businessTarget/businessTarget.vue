<template>
  <view class="container">
    <page-head title="目标看板"></page-head>
    <view class="toptab">
      <shop-select></shop-select>
      <view class="select_wrapper select2">
        <panel-select class="selin"></panel-select>
        <data-select class="selin"></data-select>
        <org-select class="selin"></org-select>
      </view>
    </view>
    <view class="content">
      <view class="switch_gap">
        <text class="switch_label">过滤无数据门店目标 </text>
        <u-switch v-model="checked"></u-switch>
        
      </view>
      <view class="cbox">
        <view class="c_title">
          <view class="c_inner">
            <text>本月目标达成情况 </text>
            <u-icon name="question-circle-fill" color="#2979ff" size="28" @click="showToast"></u-icon>
          </view>
        </view>
				<view class="c_tip flex_c_b">
					<text class="text"><text class="red">· </text> 时间进度 <text class="tnum">23.55%</text> </text>
					<text class="text"><text class="black">· </text>	 还剩 <text class="tnum">12天</text></text>
				</view>

				<month-target />
      </view>
      <view class="cbox">
        <view class="c_title">
          <text>数据列表</text>
        </view>
        <view class="select_wrapper">
          <view class="selin">
            <u-field
              v-model="showtb"
              @click="showSelect1 = true"
              :disabled="true"
              :label-width="1"
              placeholder="显示同比数据"
              right-icon="arrow-down-fill"
            >
            </u-field>

          </view>
          <view class="selin">
            <u-field
              v-model="showtbr"
              @click="showSelect1 = true"
              :disabled="true"
              :label-width="1"
              placeholder="显示同比增长率"
              right-icon="arrow-down-fill"
            >
            </u-field>

          </view>
          <u-select v-model="showSelect1" mode="single-column" :list="list" @confirm="handleSelect"></u-select>
        </view>

        <view class="target-choose">
          <view :class="['target-item', activetypeIndex === index ?'active':'']" v-for="(item, index) in ['目标营业额','目标商户实收','目标有效订单']" :key="item" @click="handleChoose(index)">{{item}}</view>
        </view>

        <data-list />

      </view>
    </view>
		<u-toast ref="toast" />
  </view>
</template>

<script>
import MonthTarget from "./component/MonthTarget.vue";
import DataList from "./component/DataList.vue";
export default {
  components: {
    MonthTarget,
    DataList
  },
  data () {
    return {
      panel:'',
      dataScope: '',
      orgIds: '',
      showtb: '',
      showtbr: '',
      showSelect1: false,
      showSelect2: false,
      list: [{
        label: 'quanbu',
        value: 0
      }],
      panelItems: [
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
      ],
      dateTypeItems: '',
      orgItems: '',
      activetypeIndex: 0,
      checked: false
    }
  },
  methods: {
    handlePanel () {},
    handleDate () {},
    handleOrg () {},
    handleSelect () {},
    handleChoose (index) {
      this.activetypeIndex = index
    },
    showToast () {
      this.$refs.toast.show({
        text: '提示信息'
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  background-color: #FAFAFC;
}
.toptab  {
  background-color: #fff;
  padding: 0 20rpx;
}
.num {
  line-height: 3;
}
.cbox {
  margin-bottom: 24rpx;
}

.target-choose {
  display: flex;
  align-content: center;
  justify-content: space-around;
  margin: 24rpx 0;
}

.target-item {
  width: 216rpx;
  height: 56rpx;
  background: #F5F6FA;
  border-radius: 4rpx;
  line-height: 56rpx;
  text-align: center;
  &.active  {
    background-color: #D92B34;
    color: #fff;
  }
}

.select2 {
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  position: relative;
  .selin {
    margin-right: 10rpx;
  }
  &:after {
    content:'';
    width: 2rpx;
    height: 40rpx;
    background-color: #efefef;
    display: inline-block;
    position: absolute;
    left: 252rpx;
  }
  :deep(.uni-select) {
    border: none;
    padding-left: 0;
  }
}

.select_wrapper {
  display: flex;
  justify-content: space-between;

  .selin {
    width: 320rpx;
  }
}

.content {
  background-color: #f5f6fa;
}

.switch_gap {
  padding: 28rpx 24rpx;
  display: flex;
  align-items: center;
}

.switch_label {margin-right: 12rpx;}

.c_tip {
	width: 670rpx;
	height: 64rpx;
	background: #FAFAFC;
	line-height: 64rpx;
	padding: 0 16rpx;
	.red {
		color: #D92B34;
		font-weight: bold;
    margin-right: 4rpx;
	}
	.black {
    color: #000;
		font-weight: bold;
    margin-right: 4rpx;
	}
	.tnum {
		color: rgba(0,0,0,0.85);
	}
}
</style>
