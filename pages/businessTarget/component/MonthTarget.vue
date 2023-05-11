<template>
  <view class="wrapper">
    <view class="charts">
      <view class="chart_item">
        <qiun-data-chart
          canvasId="yyechart"
          :chartData="chartData1"
          type="ring"
          :opts="opts"
        />
        <view class="text">营业额</view>
        <view class="num">¥1,323.95</view>
      </view>
      <view class="chart_item">
        <qiun-data-chart
          canvasId="shsschart"
          :chartData="chartData1"
          type="ring"
          :opts="opts"
        />
        <view class="text">商户实收</view>
        <view class="num">¥1,323.95</view>
      </view>
      <view class="chart_item">
        <qiun-data-chart
          canvasId="yxddchart"
          :chartData="chartData1"
          type="ring"
          :opts="opts"
        />
        <view class="text">有效订单</view>
        <view class="num">¥1,323.95</view>
      </view>
    </view>
    <view class="btns">
      <view class="def_btn" size="mini">导出数据</view>
      <view class="def_btn" size="mini">录入目标</view>
      <view class="def_btn" size="mini">指标选择</view>
    </view>

  </view>
</template>
<script>
const opts = {
  color: [
    "#D92B34",
    "#D8D8D8",
    "#FAC858",
    "#73C0DE",
    "#3CA272",
    "#FC8452",
    "#9A60B4",
    "#ea7ccc",
  ],
  rotate: false,
  rotateLock: false,
  padding: [5, 5, 5, 5],
  dataLabel: true,
  enableScroll: false,
  legend: {
    show: true,
    position: "right",
    lineHeight: 25,
  },
  title: {
    name: "收益率",
    fontSize: 15,
    color: "#666666",
  },
  subtitle: {
    name: "70%",
    fontSize: 25,
    color: "#7cb5ec",
  },
  extra: {
    ring: {
      ringWidth: 60,
      activeOpacity: 0.5,
      activeRadius: 10,
      offsetAngle: 0,
      labelWidth: 15,
      border: false,
      borderWidth: 3,
      borderColor: "#FFFFFF",
    },
  },
};
export default {
  data() {
    return {
      opts,
      chartData1: {},
      chartData2: {},
      chartData3: {}
    };
  },
  mounted() {
    this.initcharts()
  },
  methods: {
    initcharts () {
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res = {
          series: [
            {
              data: [{"name":"一班","value":50},{"name":"二班","value":30},{"name":"三班","value":20},{"name":"四班","value":18},{"name":"五班","value":8}]
            }
          ]
        };
        this.chartData1 = JSON.parse(JSON.stringify(res));
        this.chartData2 = JSON.parse(JSON.stringify(res));
        this.chartData3 = JSON.parse(JSON.stringify(res));
      }, 500);
    }
  }
};
</script>
<style lang="scss" scoped>
.btns {
  display: flex;
  flex-direction: row-reverse;
}
.def_btn {
  margin-left: 16rpx;
  width: 160rpx;
  height: 64rpx;
  line-height: 64rpx;
  background: #F5F6FA;
  border-radius: 4rpx;
  text-align: center;
  font-size: 28rpx;
  color: rgba(0,0,0,0.65);
}

.charts {
  padding: 24rpx 0;
  display: grid; // grid 排列组件使用，不需要显示外部grid。这是 vue-cli 生成的项目中的限制。 （grid-template-columns/rows 可以使用任何方法，但不要引用 <template repeat> 或者 <slot>） 任何内容都可以使用 <template repeat> 。 （如果你的项目中没有外部grid，请不要引用 <div>，而是使用 <view> 或者 <slot
  grid-template-columns: repeat(3, 33%); // 行数 （每行都会显示） （每一行的最
}
.chart_item {
  width: 200rpx;
  height: 150rpx;
  box-shadow: 0 0 2rpx 1px #FAFAFC;
  background: #FAFAFC;
  text-align: center;
  padding: 20rpx;

}


</style>
