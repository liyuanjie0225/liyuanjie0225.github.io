<markdown>
# 基础示例
</markdown>
<template>
  <div>
    <right-card
        style="width:100%;height:150px"
        :data-source="featureList" :config="config"
                main-img-key="previewImage"
                sub-img-key="masterPreviewImage"
                isHover
    >

    </right-card>
  </div>
</template>

<script>
import source from './source'
export default {
  name: "RightCardBasicDemo",
  data(){
    return {
      featureList: source,
      config:[{
        label: '地点',
        key: 'videoSourceName',
        iconfont: 'iconhome-yujingdidian'
      },
        {
          label: '时间',
          key: 'startTime',
          iconfont: 'iconriqi_16'
        }]
    }
  }
}
</script>

<style scoped>

</style>
