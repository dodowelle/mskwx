<template>
  <view class="arrow-vertical">
    <u-icon class="arrow-icon" name="arrow-up-fill" color="#bbbbbb" size="20" @click="handleUp"></u-icon>
    <u-icon class="arrow-icon" name="arrow-down-fill" color="#bbbbbb" size="20" @click="handleDown"></u-icon>
  </view>
</template>
<script>
export default {
  methods: {
    handleUp () {
      this.$emit('up')
    },
    handleDown () {
      this.$emit('down')
    }
  }
}
</script>
<style scoped>
.arrow-vertical {display: flex; flex-direction:column;align-items: center;justify-content: center;height: 1em;}
.arrow-icon {
  margin: -2rpx 0 -2rpx 6rpx;
}
</style>