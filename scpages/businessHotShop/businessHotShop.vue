<template>
  <!-- 门店风云榜 -->
  <view class="container">
    <page-head title="门店风云榜"></page-head>
    <view class="toptab">
      <view class="tab_wrapper">
        <view
          v-for="(item, index) in tabs"
          :key="index"
          @click="changeTab(index)"
          :class="['tab_item', activeIndex === index ? 'active' : '']"
        >
          <text class="text">{{ item }}</text>
        </view>
      </view>
      <view class="select_wrapper">
				<shop-select />
      </view>
      <view class="select_wrapper select2">
			
        <panel-select class="selin" :list="panelItems" placeholder="按平台"></panel-select>
				
				<data-select class="selin" :list="dateItems"></data-select>
      </view>
		
    </view>
    <view class="content">
      <real-rank/>
    </view>
  </view>
</template>

<script>
import ShopSelect from '../../components/shop-select/shop-select.vue';
import realRank from "./component/realRank.vue";

export default {
  components: {
    realRank,
    ShopSelect,
  },
  data() {
    return {
			show1: false,
			show2: false,
      tabs: ["门店排行榜", "城市排行榜", '组织排行榜'],
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
      panel: '全部平台',
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
    },
    handleStore(val) {
      console.log(val);
    },
    handlePanel (val) {
      console.log(val);
			this.panel = val[0].label
    },
		handleDate (val) {
			console.log(val);
			this.dataScope = val[0].label
		}
  },
};
</script>

<style lang="scss" scoped>
@import "./businessHotShop.scss";
</style>