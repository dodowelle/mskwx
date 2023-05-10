<template>
	<!-- 实时看板 -->
	<view class="container">
		<page-head title="实时看板"></page-head>
		<view class="toptab">
			<view class="tab_wrapper">
				<view v-for="(item, index) in tabs" :key="index" @click="changeTab(index)"
					:class="['tab_item', activeIndex === index ?'active':'']">
					<text class="text">{{item}}</text>
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
			
		</view>
		<view class="content">
			<real-look v-if="activeIndex === 0" />
			<real-rank v-else />
		</view>
	</view>
</template>

<script setup>
	import {
		ref, onMounted
	} from 'vue';
	import realLook from './component/realLook.vue'
	import realRank from './component/realRank.vue'

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

	
</script>

<style lang="scss" scoped>
	@import './realList.scss';
</style>