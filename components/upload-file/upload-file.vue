<template>
  <view class="wrapper">
    <uni-file-picker 
      class="exportbtn"
      v-model="excelFile" 
      :fileMediatype="fileMediatype" 
      mode="grid" 
      :limit="limit"
      @select="select" 
      @progress="progress" 
      @success="success" 
      @fail="fail" 
    />
  </view>
</template>
<script>

export default {
  props: {
    limit: {
      type: Number,
      default: 1
    },
    fileMediatype: {
      type: String,
      default: 'all'
    }
  },
  data () {
    return {
      excelFile: [],
      
    }
  },
  methods: {
    // 获取上传状态
    select(e){
      console.log('选择文件：',e)
    },
    // 获取上传进度
    progress(e){
      console.log('上传进度：',e)
    },
    
    // 上传成功
    success(e){
      console.log('上传成功')
    },
    
    // 上传失败
    fail(e){
      console.log('上传失败：',e)
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(button) {
  background-color: #D92B34;
}
</style>