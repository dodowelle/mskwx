<template>
  <view class="container">
    <page-head :isPrev="true" title="选择指标"></page-head>
    <view class="c_box">
      <view class="c_title">
        <text class="title_text">列表展示目标</text>
        <uni-icons type="help-filled" :size="20" color="#D8D8D8"></uni-icons>
      </view>
      <view class="list_wrapper">
        <view
          class="list_item"
          v-for="(item, index0) in dataList"
          :key="item.label"
        >
          <text class="list_title">{{ item.label }}</text>
          <view class="list_tabs">
            <view
              v-for="(tag, index) in item.tags"
              :key="tag.tag"
              :class="['list_tab', tag.active ? 'active' : '']"
              @click="choose(index0, index)"
              >{{ tag.tag }}</view
            >
          </view>
        </view>
      </view>
    </view>
    <view class="footerbar">
      <view class="footerbar_btn" @click="cancel">取消</view>
      <view class="footerbar_btn active" @click="save">保存</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          label: "营收",
          tags: [
            { tag: "营业额", id: 1 },
            { tag: "商户实收", id: 2 },
            { tag: "用户实付", id: 3 },
          ],
        },
        {
          label: "流量",
          tags: [
            { tag: "曝光量", id: 11 },
            { tag: "进店人数", id: 12 },
            { tag: "到手率", id: 13 },
            { tag: "进店转化率", id: 14 },
          ],
        },
      ],
    };
  },
  methods: {
    cancel() {},
    save() {},
    choose(index0, index) {
      if (this.dataList[index0]["tags"][index]["active"]) {
        this.$set(this.dataList[index0]["tags"][index], "active", false);
      } else {
        this.$set(this.dataList[index0]["tags"][index], "active", true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footerbar {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 108rpx;
  background: #ffffff;
  box-shadow: 0rpx -8rpx 16rpx 0rpx rgba(204, 204, 204, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.footerbar_btn {
  width: 331rpx;
  height: 80rpx;
  background: #f2f2f2;
  border-radius: 4rpx 4rpx 4rpx 4rpx;
  font-size: 28rpx;
  line-height: 80rpx;
  text-align: center;
	&.active {
		background-color: #D92B34;
		color: #fff;
	}
}
.container {
  background-color: #f5f6fa;
}
.c_box {
  margin: 24rpx;
  background-color: #fff;
  padding: 24rpx;
}
.c_title {
  margin-bottom: 28rpx;
}
.title_text {
  font-size: 32rpx;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
}
.list_wrapper {
  padding: 24rpx 0;
}

.list_title {
  font-size: 28rpx;
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 24rpx;
  display: block;
}

.list_tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.list_tab {
  width: 202rpx;
  height: 64rpx;
  line-height: 62rpx;
  text-align: center;
  border-radius: 4rpx;
  background: #f5f6fa;
  border: 1rpx solid transparent;
  margin-bottom: 24rpx;
  margin-right: 20rpx;
  &:nth-child(3n) {
    margin-right: 0;
  }
  &.active {
    border: 1rpx solid #d92b34;
    background: #fff6f6;
  }
}
</style>
