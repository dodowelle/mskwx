<template>
  <view class="container">
    <page-head title="添加商品" :isPrev="true"></page-head>
    <view class="addform">
      <u-form :model="form" ref="uForm" label-width="auto" >
          <u-form-item :border-bottom="false" label="商品分类 ："><u-input v-model="form.name" border type="select" @click="handleClick"/></u-form-item>
          <u-form-item :border-bottom="false" label="商品名称 ："><u-input v-model="form.name" border /></u-form-item>
          <u-form-item :border-bottom="false" label="商品规格 ："><u-input v-model="form.intro" border /></u-form-item>
          <u-form-item :border-bottom="false" label="商品成本 ："><u-input v-model="form.chenben" border /></u-form-item>
          <u-form-item :border-bottom="false" label="包装成本 ："><u-input v-model="form.bzchenben" border /></u-form-item>
          <u-form-item :border-bottom="false" label="线下售价 ："><u-input v-model="form.salesPrice" border /></u-form-item>
        </u-form>
        <view class="form-gap">
          <view class="addmore">
            <un-icon name="plus"></un-icon> 添加规格（最多10个）
          </view>
        </view>
    </view>
    <u-select v-model="showTypes" :list="typelist"></u-select>
  </view>
</template>
<script>
export default {
  data () {
    return {
      form: {},
      typelist: [
        {label: '品牌模板', value: 1},
        {label: '品牌模板1', value: 1},
        {label: '品牌模板2', value: 1}
      ],
      showTypes: false
    }
  },
  methods: {
    handleClick () {
      this.showTypes = true
    }
  },
}
</script>
<style lang="scss" scoped>
.addform {
  margin: 24rpx;
  background-color: #fff;
  padding: 24rpx;
  border-radius: 16rpx
}

.form-gap {
  display: flex;
  justify-content: center;
  align-items: center;

  .addmore {
    border: 1px dashed #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24rpx;
    padding: 16rpx;
    width: 486rpx;
    height: 64rpx;
    margin-top: 12rpx;
  }
}
</style>