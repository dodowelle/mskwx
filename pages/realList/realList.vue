<template>
	<!-- 实时看板 -->
	<view class="container">
		<page-head title="实时看板"></page-head>
		<view class="tab_wrapper">
			<view v-for="(item, index) in tabs" :key="index" @click="changeTab(index)"
				:class="['tab_item', activeIndex === index ?'active':'']">
				<text>{{item}}</text>
			</view>
		</view>
		<view class="select_wrapper">
			<image class="store_icon" src="@/assets/images/store.png" mode="aspectFill"></image>
			<uni-data-picker v-model="storeData" :localdata="items" popup-title="请选择门店" @change="handleStore"
				:border="false"></uni-data-picker>
		</view>
		<view class="select_wrapper select2">
			<uni-data-select class="selin" v-model="panel" :localdata="panelItems" placeholder="请选择平台" @change="handlePanel"
				:clear="false" />
			<view class="gap"></view>
			<uni-data-select class="selin" v-model="dataScope" :localdata="dateTypeItems" placeholder="请选择时间"
				@change="handleDate" :clear="false" />
			<!-- <uni-datetime-picker type="date" class="selin" v-model="dataScope" :localdata="items" popup-title="请选择时间" @change="handleDate" :border="false" /> -->
		</view>
		<view class="content">
			<view class="cbox">
				<view class="c_title"><text>实时看板</text> <text class="updateTime">数据更新时间：<text class="datetime">2022-12-24
							20:45</text></text> </view>
				<view class="card_boxs">
					<div class="card_box" v-for="item in ['商户实收', '营业额', '有效订单', '单均商户实收', '到手率']" :key="item">
						<text class="text">{{item}}</text>
						<view class="count_num">789.56</view>
						<view><text class="text">环比 </text>
							<text class="rate"> <text class="iconfont icon-bottom"
									style="color: #08AB6F; font-weight: bold;"></text>10.45%</text>
						</view>
					</div>
				</view>
			</view>

			<view class="cbox">
				<view class="c_title">
					<text>商户实收</text>
					<view class="switch">
						<div :class="['switch-item', activeInt === index ? 'active':'']" v-for="(item, index) in ['分时', '累计']"
							:key="index" @click="chooseType(index)">{{item}}</div>
					</view>
					
				</view>
				<view class="charts-box">
					<qiun-data-charts type="column" :chartData="chartData" />
				</view>
			</view>

		</view>
	</view>
</template>

<script setup>
	import {
		ref, onMounted
	} from 'vue';

	const tabs = ['实时看板', '实时门店排行榜'];
	const items = ref([{
		text: '一级组织',
		value: '0',
		children: [{
			text: '二级组织',
			value: '1',
		}]
	}])
	const activeIndex = ref(0);
	const storeData = ref([]);
	const panel = ref('0');
	const dataScope = ref(-1);
	const dateTypeItems = ref([{
			text: '比昨日',
			value: -1
		},
		{
			text: '比一周内',
			value: -7
		},
	])

	const panelItems = ref([{
			text: '全部平台',
			value: '0'
		},
		{
			text: '美团',
			value: '1'
		},
		{
			text: '饿了么',
			value: '2'
		},
	])
	const changeTab = (index) => {
		activeIndex.value = index;
	}
	const handleStore = (val) => {
		console.log(val)
	}
	const handlePanel = (val) => {
		console.log(val)
	}

	const handleDate = (val) => {}
	const activeInt = ref(0)
	const chooseType = (index) => {
		activeInt.value = index
	}
	
	
	const chartData = ref({});
	onMounted(() => {
		setTimeout(() => {
			let res = {
					categories: ["2016","2017","2018","2019","2020","2021"],
					series: [
						{
							name: "目标值",
							data: [35,36,31,33,13,34]
						},
						{
							name: "完成量",
							data: [18,27,21,24,6,28]
						}
					]
				};
			chartData.value = JSON.parse(JSON.stringify(res));
		}, 200);
		
	})
</script>

<style lang="scss" scoped>
	@import './realList.scss';
</style>