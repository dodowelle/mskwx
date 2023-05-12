<template>
  <!-- 营业统计 -->
  <view class="container">
    <page-head title="营业统计"></page-head>
    <view class="toptab">
      
      <view class="select_wrapper">
				<shop-select />
      </view>
      <view class="select_wrapper select2">
       
				<u-field 
					class="selin"
					@click="show1 = true" 
					v-model="panel" 
					:border-bottom="false"
					:disabled="true" :label-width="10" placeholder="请选择平台"
					right-icon="arrow-down-fill"
				>
				</u-field>
				<u-select v-model="show1" mode="single-column" :list="panelItems" @confirm="handleStore"></u-select>
        <view class="gap"></view>
				
				<u-field 
					class="selin"
					@click="show2 = true" 
					v-model="dataScope" 
					:border-bottom="false"
					:disabled="true" :label-width="0" placeholder="请选择时间"
					right-icon="arrow-down-fill"
				>
				</u-field>
				<u-select v-model="show2" mode="single-column" :list="dateItems" @confirm="handleDate"></u-select>
      </view>
    </view>
    <view class="content">
      <real-look />
    </view>
  </view>
</template>

<script>
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
          text: "比昨日",
          value: -1,
        },
        {
          text: "比一周内",
          value: -7,
        },
      ],
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
@import "./businessStatistic.scss";
</style>