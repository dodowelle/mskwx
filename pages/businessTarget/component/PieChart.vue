<template>
  <view class="charts-box">
    <qiun-data-charts 
      :canvasId="canvasId"
      :canvas2d="true"
      type="ring"
      :opts="opts"
      :chartData="chartData"
    />
  </view>
</template>

<script>
export default {
  props: {
    canvasId: {
      type: String,
      default: 'canvasId01'
    },
    color: {
      type: Array,
      default: () => ["#1890FF","#91CB74"]
    },
    rate: {
      type: Number,
      default: 60
    }
  },
  data() {
    const that = this;
    return {
      chartData: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['ring'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts: {
        rotate: false,
        rotateLock: false,
        color: that.color,
        padding: [5,5,5,5],
        dataLabel: false,
        enableScroll: false,
        title: {
          name: "",
          fontSize: 12,
          color: "#666666",
        },
        subtitle: {
          name: that.rate + "%",
          fontSize: 12,
          color: "#7cb5ec"
        },
        legend: {
          show: false,
          position: "right",
          lineHeight: 25
        },
        extra: {
          ring: {
            ringWidth: 12,
            activeOpacity: 0.5,
            activeRadius: 10,
            offsetAngle: 0,
            labelWidth: 15,
            border: false,
            borderWidth: 3,
            borderColor: "#FFFFFF"
          }
        }
      }
    };
  },
  onReady() {
    this.getServerData();
  },
  methods: {
    getServerData() {
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res = {
          series: [
            {
              data: [{"name":"一班","value":50},{"name":"二班","value":30}]
            }
          ]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 500);
    },
  }
};
</script>

<style scoped>
  /* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
  .charts-box {
    width: 200rpx;
    height: 200rpx;
  }
</style>