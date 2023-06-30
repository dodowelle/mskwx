<template>
  <view class="container">
    <page-head title="总部商品管理"></page-head>
    <view class="search_top">
      <uni-search-bar @confirm="search" placeholder="输入关键词查找商品" radius="20" bgColor="#F5F6FA" clearButton="auto" cancelButton="none"></uni-search-bar>
    </view>
    <view class="category">
      <view class="cateside">
        <view :class="['sideitem', activeIndex === index ? 'sideitem_active':'']" v-for="(item, index) in cates" :key="index" @click="sideChange(index)">{{item.name}}</view>
      </view>
      <view class="catemian">
        <view class="cbox" v-for="item in 3" :key="item">
          <view class="goods_info">
            <view class="goods_label">
              商品名称：<text class="goods_val">麻婆豆腐</text>
            </view>
            <view class="goods_label">
              规格: <text class="goods_val">xs</text>
            </view>
          </view>
          <view class="goods_row">
            <view class="goods_col">
              <view class="goods_label">商品成本</view>
              <view class="goods_label">¥25.22</view>
            </view>
            <view class="goods_col">
              <view class="goods_label">包装成本</view>
              <view class="goods_label">¥25.22</view>
            </view>
            <view class="goods_col">
              <view class="goods_label">线下售价</view>
              <view class="goods_label">¥25.22</view>
            </view>
          </view>
          <view class="operation">
            <button class="operationbtn" @click="edit(item)">编辑</button>
            <button class="operationbtn">删除</button>
          </view>
        </view>
      </view>
      <edit-modal ref="editModel" />


    </view>
    <view class="footerbar">
      <view class="footer_item">
        <navigator class="footer_item" url="/pagesbm/menuManage/menuManage">
          <u-image width="40rpx" height="40rpx" src="@/static/images/cate_icon.png"/>
          <view class="desc">分类管理</view>
        </navigator>
      </view>
      <view class="footer_item">
        <navigator class="footer_item" url="/pagesbm/patchSet/patchSet">
          <u-image width="40rpx" height="40rpx" src="@/static/images/icon_line.png"/>
          <view class="desc">批量新增/修改</view>
        </navigator>
      </view>
      <view class="footer_item">
        <u-image width="40rpx" height="40rpx" src="@/static/images/sort_icon.png"/>
        <view class="desc">商品排序</view>
      </view>
      <view class="btn">
        <navigator url="/pagesbm/addGoods/addGoods">
          <button class="footer_add">添加商品</button>
        </navigator>
      </view>
    </view>
  </view>
</template>
<script>
import UImage from '../../uview/components/u-image/u-image.vue'
import editModal from './component/editModal.vue'
export default {
  components: { editModal, UImage },
  data () {
    return {
      cates: [{name: '全部', value: 0},{name: '分类1', value: 1},{name: '分类2', value: 2},{name: '分类3', value: 3}],
      activeIndex: 0
    }
  },
  methods: {
    sideChange (index) {
      this.activeIndex = index
    },
    edit (item) {
      this.$refs.editModel.show();
    }
  },
}
</script>
<style lang="scss" scoped>
@import './goodsManage.scss';
</style>