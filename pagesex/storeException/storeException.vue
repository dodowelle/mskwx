<template>
  <view class="container">
    <page-head title="门店监控"></page-head>

    <view>
      <u-tabs-swiper
        ref="uTabs"
        :list="list"
				:height="88"
				:font-size="28"
        :current="swiperCurrent"
        @change="tabsChange"
        :is-scroll="false"
        swiperWidth="750"
        active-color="#D92B34"
        :bar-style="{
          width: '6em',
          'margin-left': '-2.3em',
        }"
      ></u-tabs-swiper>

    </view>
    
    <today-store v-show="swiperCurrent === 0" />
    <monitoring-report v-show="swiperCurrent === 1" />
    <handle-exception v-show="swiperCurrent === 2" />
    <set-monitoring v-show="swiperCurrent === 3" />

  </view>
</template>

<script>
import ChoBtns from '../../components/cho-btns/cho-btns.vue';
import panelSelect from "../../components/panel-select/panel-select.vue";
import HandleException from './component/handleException.vue';
import MonitoringReport from './component/monitoringReport.vue';
import SetMonitoring from './component/setMonitoring.vue';
import todayStore from './component/todayStore.vue';
export default {
  components: { panelSelect, ChoBtns,todayStore, MonitoringReport, HandleException, SetMonitoring },
  data() {
    return {
      list: [
        {
          name: "今日门店异常",
        },
        {
          name: "门店监控报表",
        },
        {
          name: "门店处理异常",
        },
        {
          name: "设置监控门店",
        },
      ],
      // 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
      current: 0, // tabs组件的current值，表示当前活动的tab选项
      swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
      tabs: [{}, {}, {}, {}],
			tabList: [
				{name: '异常闭店数'},
				{name: '当前异常闭店'},
				{name: '异常时间占比'},
				{name: '店均异常时间'},
			],
			currentTab: ['异常闭店数'],
			loading: false,
			tableData: [],
    };
  },
  methods: {
    // tabs通知swiper切换
    tabsChange(index) {
      console.log("index", index);
      this.swiperCurrent = index;
    },
    // swiper-item左右移动，通知tabs的滑块跟随移动
    transition(e) {
      let dx = e.detail.dx;
      this.$refs.uTabs.setDx(dx);
    },
    // 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
    // swiper滑动结束，分别设置tabs和swiper的状态
    animationfinish(e) {
      let current = e.detail.current;
      this.$refs.uTabs.setFinishCurrent(current);
      this.swiperCurrent = current;
      this.current = current;
    },
    // scroll-view到底部加载更多
    onreachBottom() {},
  },
};
</script>

<style lang="scss" scoped>

</style>
