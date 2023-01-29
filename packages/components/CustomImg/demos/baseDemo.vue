<markdown>
# 基础用法
基础版本演示
</markdown>

<template>
  <div>
    <CustomImg
      :mainImg="mainImg"
      :subImg="subImg"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomImgBaseDemo',
  data() {
    return {
      mainImg: "https://tse1-mm.cn.bing.net/th/id/OIP-C.n0_p3rYRuofABd3XudbZnAHaEo?pid=ImgDet&rs=1",
      subImg: "https://tse3-mm.cn.bing.net/th/id/OIP-C.nRlAFygdctTCHmIWN7GxRwHaEK?pid=ImgDet&rs=1"
    }
  }
}
</script>