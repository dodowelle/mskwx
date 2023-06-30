<template>
  <view class="container">
    <page-head title="设置核心菜品" :isPrev="true"></page-head>
    <view style="padding: 12rpx;">
			<uni-search-bar @confirm="search" placeholder="输入菜品关键词查询" radius="20" bgColor="#F5F6FA" clearButton="auto" cancelButton="none"></uni-search-bar>
		</view>
    <view class="cho_wrap">
      <panel-select ref="panel" inputAlign="right" placeholder="菜单" style="width: 280rpx" />
      <data-select ref="date" inputAlign="right" placeholder="分类" style="width: 350rpx"/>
      
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    search () {}
  },
}
</script>
<style lang="scss" scoped>
.select_wrapper {
  padding: 0 24rpx;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #fff;
}
.cho_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>