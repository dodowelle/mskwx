<template>
  <view class="container">
    <page-head title="门店菜单管理" isPrev></page-head>
    <view class="select_outer">
      <view class="select_wrap">
        <data-select placeholder="菜单" :list="menuList" input-align="left" label-width="10"></data-select>
      </view>

    </view>
    <uni-table border stripe emptyText="暂无更多数据" >
      <!-- 表头行 -->
      <uni-tr>
        <uni-th align="center">名称</uni-th>
        <uni-th align="center">负责城市</uni-th>
        <uni-th align="left">需绑定平台商品</uni-th>
        <uni-th align="left">操作</uni-th>
      </uni-tr>
      <!-- 表格数据行 -->
      <uni-tr>
        <uni-td>华东门店商品</uni-td>
        <uni-td>新乡,济南,宁波,无锡等13个城市</uni-td>
        <uni-td>65</uni-td>
        <uni-td>
          <view class="cz">
            <view class="setlink">商品管理</view>
            <view class="setlink">设置</view>
            <view class="setlink">复制</view>
          </view>
        </uni-td>
      </uni-tr>
      <uni-tr>
        <uni-td>2020-10-21</uni-td>
        <uni-td>HanMeiMei</uni-td>
        <uni-td>北京市海淀区</uni-td>
        <uni-td>
          <view class="cz">
            <view class="setlink">商品管理</view>
            <view class="setlink">设置</view>
            <view class="setlink">复制</view>
          </view>
        </uni-td>
      </uni-tr>
      <uni-tr>
        <uni-td>2020-10-22</uni-td>
        <uni-td>LiLei</uni-td>
        <uni-td>北京市海淀区</uni-td>
        <uni-td width="80">
          <view class="cz">
            <view class="setlink">商品管理</view>
            <view class="setlink">设置</view>
            <view class="setlink">复制</view>
          </view>
        </uni-td>
      </uni-tr>
     

    </uni-table>

  </view>
</template>
<script>
export default {
  data () {
    return {
      menuList: [{label: '全部菜单', value: 0}]
    }
  }
}
</script>
<style lang="scss" scoped>
.setlink {
  color: #2A82E4;
}
.select_outer {
  background-color: #fff;
  padding: 20rpx;
}
.select_wrap {
  width: 228rpx;
  border: 1px solid #efefef;
}
::v-deep .select_wrap .u-field  {
  padding: 12rpx 28rpx;
}
</style>