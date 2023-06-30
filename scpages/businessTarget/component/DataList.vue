<template>
  <view class="wrapper">
    <u-table>
      <u-tr>
        <u-th>平台门店</u-th>
        <u-th>当前营业额</u-th>
        <u-th>
          <view class="flex-center">
            <text>目标营业额</text> 
            <arrows-vertical @up="handleUp" @down="handleDown"></arrows-vertical>
            
          </view>
        </u-th>
      </u-tr>
      <u-tr>
        <u-td>市井婆豆沙牛乳（财大东门店）</u-td>
        <u-td>
          <view>
            <view class="num">5,623.23</view>
            <text class="text up">+ 10.45%</text>
          </view>
        </u-td>
        <u-td>
          <view>
            <view class="num">5,623.23</view>
            <text class="text">完成率 10.45%</text>
          </view>
        </u-td>
      </u-tr>
      <u-tr>
        <u-td>市井婆豆沙牛乳（财大东门店）</u-td>
        <u-td>
          <view>
            <view class="num">5,623.23</view>
            <text class="text up">+ 10.45%</text>
          </view>
        </u-td>
        <u-td>
          <view>
            <view class="num">5,623.23</view>
            <text class="text">完成率 10.45%</text>
          </view>
        </u-td>
      </u-tr>
    </u-table>
  </view>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleUp () {
      console.log('up')
    },
    handleDown () {
      console.log('down')
    }
  },
}
</script>
<style lang="scss" scoped>
.text {font-size: 28rpx;}
.flex-center {display: flex;align-items: center;justify-content: center;}

</style>
