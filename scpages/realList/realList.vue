<template>
  <!-- 实时看板 -->
  <view class="container">
    <page-head title="实时看板"></page-head>
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
       
        <view class="selin">
          <panel-select :list="panelItems" v-model="panel"></panel-select>
        </view>
        <view class="gap"></view>
        <view class="selin">
				  <data-select :list="dateItems" v-model="dataScope"></data-select>
        </view>
			
      </view>
    </view>
    <view class="content">
      <real-look v-if="activeIndex === 0" />

      <!-- 门店排行 -->
      <real-rank v-else />
    </view>
  </view>
</template>

<script>
import ShopSelect from '../../components/shop-select/shop-select.vue';
import realLook from "./component/realLook.vue";
import realRank from "./component/realRank.vue";

export default {
  components: {
    realLook,
    realRank,
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
          value: 0,
        },
        {
          label: "美团",
          value: 1,
        },
        {
          label: "饿了么",
          value: 2,
        },
      ],
			dateItems: [
				{
					label: '比昨日',
					value: 0,
				},
        {
					label: '比前日',
					value: 1,
				}
			]
    };
  },
  methods: {
    changeTab (index) {
      this.activeIndex = index;
    },
    handlePanel (val) {
			this.panel = val[0].label
    },
		handleDate (val) {
			this.dataScope = val[0].label
		}
  },
};
</script>

<style lang="scss" scoped>
@import "./realList.scss";
</style>