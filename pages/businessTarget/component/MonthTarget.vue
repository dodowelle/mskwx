<template>
  <view class="wrapper">
    <view class="charts">
      <view class="chart_item">
        <qiun-data-chart
          canvasId="yyechart"
          :chartData="chartData1"
          type="ring"
          :opts="opts"
          :animation="true"
          :animation-duration="3000" />
      </view>
      <view class="chart_item"></view>
      <view class="chart_item"></view>
    </view>
  </view>
</template>
<script setup>
import {ref} from 'vue'
const chartData1 = ref([]);
const opts = {
  
}
</script>
<style lang="scss" scoped>
.charts {
  display: grid; // grid 排列组件使用，不需要显示外部grid。这是 vue-cli 生成的项目中的限制。 （grid-template-columns/rows 可以使用任何方法，但不要引用 <template repeat> 或者 <slot>） 任何内容都可以使用 <template repeat> 。 （如果你的项目中没有外部grid，请不要引用 <div>，而是使用 <view> 或者 <slot
  grid-template-columns: repeat(3,33%); // 行数 （每行都会显示） （每一行的最

}

.chart_item {
  width: 160rpx;
  height: 150rpx;
}
</style>
