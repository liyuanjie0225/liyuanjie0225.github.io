<markdown>
# 样式示例
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
  name: "LeftCardStyleDemo",
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
        {
          label: '相识度',
          key: 'similarity',
          style: {
            color: '#D42131',
            fontSize: '18px',
            fontFamily: 'Barlow-BoldItalic',
            fontWeight: 'BoldItalic'
          },
          render: (feature) => {
            return isNaN(feature.sim) ? '0' : Number(feature.sim * 100).toFixed(2) + '%'
          },
          isShow: (_, feature) => {
            return feature.sim
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
