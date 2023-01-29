<markdown>
# 基础用法
基础版本演示
</markdown>

<template>
  <div>
    <master-video :src="feature.videoUrl" :sub-src="feature.masterVideoUrl"></master-video>
  </div>
</template>

<script>
export default {
  name: "MasterVideoDemo",
  data(){
    return {
      feature:{
        videoUrl:'http://192.168.110.146:82/gait-boot/v1/file/unzip/c81e728d9d4c2f636f067f89cc14862c/20220915-multiple/4017662904428217090_images/video.mp4?t=jpg&p=20220915-multiple,43cfb7d19a5ff3c0de9dd08a58523b15,42765323,43441803',
        masterVideoUrl:'http://192.168.110.146:82/gait-boot/v1/file/master/unzip/c81e728d9d4c2f636f067f89cc14862c/62594eddb3efc15dbeda3527/4017662904428217090_images/video.mp4?t=jpg&p=20220915-multiple,43cfb7d19a5ff3c0de9dd08a58523b15,42765323,43441803',
      }
    }
  }
}
</script>

<style scoped>

</style>