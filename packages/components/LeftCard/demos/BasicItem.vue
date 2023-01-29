<template>
  <div>
    <div>
      替换的卡片
    </div>
    featureId:{{feature.featureId}}
  </div>
</template>

<script>
export default {
  name: "BasicItem",
  props:{
    feature:{
      type:Object,
      default:()=>{}
    }
  }
}
</script>

<style scoped>

</style>