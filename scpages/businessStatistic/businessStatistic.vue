<template>
  <!-- 营业统计 -->
  <view class="container">
    <page-head title="营业统计"></page-head>
    <view class="toptab">
      
      <view class="select_wrapper">
				<shop-select />
      </view>
      <view class="select_wrapper select2">
        <view class="selin">
          <panel-select :list="panelItems"></panel-select>
        </view>
        <view class="gap"></view>
        <view class="selin">
          <data-select :list="dateItems"></data-select>
        </view>
				
      </view>
    </view>
    <view class="content">
      <real-look />
    </view>
  </view>
</template>

<script>
import PanelSelect from '../../components/panel-select/panel-select.vue';
import ShopSelect from '../../components/shop-select/shop-select.vue';
import realLook from "./component/realLook.vue";


export default {
  components: {
    realLook,
    ShopSelect,
  },
  data() {
    return {
			show1: false,
			show2: false,
      tabs: ["实时看板", "实时门店排行榜"],
      items: [
        {
          label: "一级组织",
          value: "0",
          children: [
            {
              label: "二级组织",
              value: "1",
            },
          ],
        },
      ],
      activeIndex: 0,
      storeData: '',
      panel: '全部',
      dataScope: '比昨日',
      dateTypeItems: [
        {
          label: "比昨日",
          value: -1,
        },
        {
          label: "比一周内",
          value: -7,
        },
      ],
      panelItems: [
        {
          label: "全部平台",
          value: "0",
        },
        {
          label: "美团",
          value: "1",
        },
        {
          label: "饿了么",
          value: "2",
        },
      ],
			dateItems: [
				{
					label: '比昨日',
					value: 0,
				}
			]
    };
  },
  methods: {
		confirm (e) {
			console.log(e)
		},
    changeTab (index) {
      this.activeIndex = index;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./businessStatistic.scss";
</style>