<template>
  <view class="container">
    <page-head title="批量新增/修改" isPrev />
    <u-tabs-swiper ref="tabs" :list="list" :current="current" :is-scroll="false" @change="tabsChange" :bar-width="barWidth" active-color="#D92B34" font-size="28"></u-tabs-swiper>
    <view class="cbox flex_c_c">
      <view class="upload flex_c_c">
        <text class="c_label">* 选择文件：</text>
        <button class="upload_btn" @click="upload">点击上传文件</button>
      </view>
    </view>
    <view class="cbox">
      <view class="c_label">操作说明：</view>
      <view class="text_line">1、请下载 <text class="wran">成本填写模版</text>，并按模版要求进行填写 </view>
      <view class="text_line">2、模版中商品名称及ID不可修改，修改名称及ID将或无法创建或修改成本</view>
      <view class="text_line">3、只需填写需改动的商品成本，无需修改的商品成本请勿填写成本</view>
    </view>
    
  </view>
</template>
<script>
export default {
  data () {
    return {
      list: [{
					name: '批量新增标准商品'
				}, {
					name: '批量修改成本'
				}
      ],
      current: 0,
      barWidth: 28 * 8
    }
  },
  methods: {
    tabsChange (index) {
      this.current = index;
      this.barWidth = this.list[index].name.length * 28;
    },
    upload () {
      // 选择图片
      uni.chooseImage({
        count: 6, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: function (res) {
          console.log(JSON.stringify(res.tempFilePaths));
        }
      });

      // 从微信聊天会话中选择文件
      // wx.chooseMessageFile


    }
  },
}
</script>
<style lang="scss" scoped>

.upload {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cbox {
  background: #FFFFFF;
  border-radius: 16rpx;
  padding: 24rpx;
  margin: 24rpx 24rpx 0;
  font-size: 24rpx;
}
.wran {
  color: #2A82E4;
}
.upload_btn {
  font-size: 24rpx;
  width: 248rpx;
  height: 72rpx;
  background: #D92B34;
  border-radius: 4rpx;
  text-align: center;
  line-height: 72rpx;
  color: #fff;
}
.c_label {
  font-size: 28rpx;
  color: rgba(0,0,0,0.85);
}
.text_line {
  margin-top: 8rpx;
  line-height: 1.6;
}
</style>