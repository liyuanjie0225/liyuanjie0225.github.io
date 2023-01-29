<markdown>
# 基础用法
</markdown>
<template>
  <left-card style="width: 100%;height: 200px"
             :config="config"
             :data-source="featureList"
             main-img-key="previewImage"
             sub-img-key="masterPreviewImage"
  >

  </left-card>
</template>

<script>
import source from './source'
export default {
  name: "LeftCardBasicDemo",
  data() {
    return {
      featureList: source,
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
  }
}
</script>

<style scoped>

</style>
