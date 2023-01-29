<markdown>
# 按钮实例
</markdown>
<template>
  <left-card style="width: 100%;height: 200px"
             :config="config"
             :data-source="featureList"
             main-img-key="previewImage"
             sub-img-key="masterPreviewImage"
             :action="action"
             @alignment="alignment"
             @deleteItem="deleteItem"
  >

  </left-card>
</template>

<script>
import source from './source'
export default {
  name: "LeftCardActionDemo",
  data() {
    return {
      featureList: source,
      action:{
        alignment:true,
        delete:function (feature){
          // 特殊处理
          return true
        }
      }
    }
  },
  computed: {
    config: function () {
      return [
        {
          label: '地点',
          key: 'videoSourceName',
          iconfont: 'iconhome-yujingdidian'
        },
        {
          label: '时间',
          key: 'startTime',
          iconfont: 'iconriqi_16'
        },
      ]
    }
  },
  methods:{
    alignment(feature){
      alert('比对检索')
    },
    deleteItem(feature){
      alert('删除')
    }
  }
}
</script>

<style scoped>

</style>
