<template>
  <u-modal v-model="showEdit" :title="title" width="686" :title-style="{textAlign: 'left', paddingLeft: '20rpx'}" show-cancel-button @confirm="submit" @cancel="cancel">
    <view class="slot-content">
      <view class="innerform">
        <u-form :model="form" ref="uForm" label-width="auto" >
          <u-form-item :border-bottom="false" label="商品名称 ："><u-input v-model="form.name" border /></u-form-item>
          <u-form-item :border-bottom="false" label="商品规格 ："><u-input v-model="form.intro" border /></u-form-item>
          <u-form-item :border-bottom="false" label="商品成本 ："><u-input v-model="form.chenben" border /></u-form-item>
          <u-form-item :border-bottom="false" label="包装成本 ："><u-input v-model="form.bzchenben" border /></u-form-item>
          <u-form-item :border-bottom="false" label="线下售价 ："><u-input v-model="form.salesPrice" border /></u-form-item>
        </u-form>
      </view>
    </view>
    <!-- <template slot="confirm-button">
      <view class="btns">
        <button class="btn" @click.stop="cancel">取消</button>
        <button class="btn confirmbtn" @click.stop="submit">确认</button>
      </view>
    </template> -->
  </u-modal>
</template>
<script>
export default {
  data () {
    return {
      showEdit: false,
      title: '杨枝甘露(双杯芒果底) （中杯）',
      form: {
        name: '',
        intro: '',
        chenben: '',
        bzchenben: '',
        salesPrice: ''
      }
    }
  },
  methods: {
    show() {
      this.showEdit = true;
    },
    cancel () {

    },
    submit () {
      
    }
  },
}
</script>
<style lang="scss" scoped>
.innerform {
  padding: 20rpx;
}

.btns {
  display: flex;
  justify-content: space-around;
  padding-top: 14rpx;
}
.btn {
  width: 307rpx;
  height: 72rpx;
  background: #F5F6FA;
  border-radius: 4rpx;
  margin: 0 12rpx;
  text-align: center;
  font-size: 24rpx;
  line-height: 72rpx;
}

.confirmbtn {
  background-color: #D92B34;
  color: #fff;
}
</style>