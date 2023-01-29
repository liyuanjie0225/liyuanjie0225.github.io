<markdown>
# 插槽示例
</markdown>
<template>
  <div>
    <div>替换Item</div>
    <left-card style="width: 100%;height: 200px"
               :config="config"
               :data-source="featureList"
               main-img-key="previewImage"
               sub-img-key="masterPreviewImage"
    >
      <template #item="{feature,dbCopy}">
        <basic-item :feature="feature"/>
      </template>
    </left-card>
    <div>替换itemLeft</div>
    <left-card style="width: 100%;height: 200px"
               :config="config"
               :data-source="featureList"
               main-img-key="previewImage"
               sub-img-key="masterPreviewImage"
    >
      <template #itemLeft="{feature}">
        <div style="border: 1px black solid;height: 100%;text-align: center">
          {{'替换的图片'}}
        </div>
      </template>
    </left-card>
    <div>替换content</div>
    <left-card style="width: 100%;height: 200px"
               :config="config"
               :data-source="featureList"
               main-img-key="previewImage"
               sub-img-key="masterPreviewImage"
    >
      <template #content="{feature}">
        <div style="border: 1px black solid;height: 100%;text-align: center">
          {{'替换内容'}}
        </div>
      </template>
    </left-card>
    <div>替换单一项 (key+'value')</div>
    <left-card style="width: 100%;height: 200px"
               :config="config"
               :data-source="featureList"
               main-img-key="previewImage"
               sub-img-key="masterPreviewImage"
    >
      <template #startTimeValue="{feature}">
        <div style="border: 1px black solid;height: 100%;text-align: center">
          替换时间{{feature.startTime}}
        </div>
      </template>
    </left-card>
    <div>替换actionLeft&action</div>
    <left-card style="width: 100%;height: 200px"
               :config="config"
               :data-source="featureList"
               main-img-key="previewImage"
               sub-img-key="masterPreviewImage"
               :action="{alignment:true}"
    >
      <template #actionLeft="{feature}">
        <div style="border: 1px black solid;height: 100%;text-align: center">
          actionLeft
        </div>
      </template>
      <template #action="{feature}">
        <span style="border: 1px black solid;height: 100%;text-align: center">
          action
        </span>
      </template>
    </left-card>
  </div>

</template>

<script>
import BasicItem from "./BasicItem";
import source from './source'
export default {
  name: "LeftCardSlotDemo",
  components: {BasicItem},
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
