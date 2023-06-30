<template>
  <view class="container">
    <view class="select_wrapper">
      <shop-select />
      <date-type-select style="align-self: stretch;">
        <panel-select :labelWidth="160" inputAlign="right" />
      </date-type-select>
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
            {label:'异常闭店', value: 123 },
            {label: '异常时间占比', value: '12.32%' },
            {label: '店均异常时间', value: '1.65min'},
            {label: '店均营业时长', value: '11.45h'},
            {label: '店均营业时长环比', value: '11.45%'},
            {label: '预估损失', value: '5026.56'},
          ]"
          :key="item"
        >
          <text class="text">{{ item.label }}</text>
          <view class="count_num">{{item.value}}</view>
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
          <uni-th width="100" align="left">组织架构</uni-th>
          <uni-th width="100" align="center" :sortable="true">异常闭店数</uni-th>
          <uni-th width="120" align="center" :sortable="true">异常时间占比</uni-th>
          <uni-th width="120" align="center" :sortable="true">店均异常时间</uni-th>
        </uni-tr>
      </uni-table>
    </view>
  </view>
</template>
<script>
import dateTypeSelect from '../../../components/date-type-select/date-type-select.vue';
import {throttle} from '@/utils/index'
export default {
  components: { dateTypeSelect },
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
  created() {
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
  padding: 0 24rpx;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #fff;
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
  grid-template-columns: repeat(3, 220rpx);
  align-items: center;
  flex-wrap: wrap;
  .card_box {
    padding: 24rpx 0;
    // background-color: #fafafc;
    margin-right: 16rpx;
    border-radius: 8rpx 8rpx 8rpx 8rpx;
    margin-top: 16rpx;
    border: 1px solid transparent;
    text-align: center;
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