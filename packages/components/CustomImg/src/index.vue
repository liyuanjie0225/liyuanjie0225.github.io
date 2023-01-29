<template>
  <img
    :style="{width: pWidth, height: pHeight}"
    ref="img"
    @click="$emit('click')"
    @load="renderFinish()"
    @error="renderFinish()"
  >
</template>

<script>
/**
 * 如果有loading,则加载完loading图片后开始加载mainImg(主图片)
 * 如果没有loading 则直接开始加载mainImg(主图片)
 * 如果没有mainImg(主图片)则会直接开始加载subImg(副图片)
 * 加载过程中，都失败了，循环3次，如果都失败了则会加载error图片
 * 否则啥也不干
 * 详细逻辑可以阅读组件代码(很好懂额~~)
 */
export default {
  name: 'CustomImg',
  props: {
    width: {
      type: [String, Number],
      default: 'auto'
    },
    height: {
      type: [String, Number],
      default: 'auto'
    },
    loading: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    mainImg: {
      type: String,
      default: ''
    },
    subImg: {
      type: String,
      default: ''
    },
    // 此属性为yimagepreview组件使用，其他组件使用请忽略
    src: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      count: 0,
      renderIsSuccess: true,
      lockRenderFinish: false
    }
  },
  computed: {
    pWidth() {
      if(typeof this.width === 'string') {
        return this.width
      }
      return `${this.width}px`
    },
    pHeight() {
      if(typeof this.height === 'string') {
        return this.height
      }
      return `${this.height}px`
    }
  },
  watch: {
    // 解决 国际化 切换
    error (newVal, oldVal) {
      if (this.renderIsSuccess) {
        return
      }
      this.renderErrorImg()
    },
    mainImg: {
      handler () {
        this.startLoadImg()
      }
    }
  },
  mounted() {
    this.startLoadImg()
  },
  methods: {
    startLoadImg () {
      if (this.loading) {
        this.count = 0
        this.renderLoading(this.loadMainImg)
        return
      }
      this.loadMainImg()
    },
    loadMainImg () {
      this.count = this.count + 1
      if (!this.mainImg) {
        this.loadSubImg()
        return
      }
      this.loadImageAsync({
        src: this.mainImg
      }, ({ src }) => {
        this.renderImg(src)
      }, () => {
        this.loadSubImg()
      })
    },
    loadSubImg () {
      if (!this.subImg) {
        if (this.count >= 3) {
          this.renderErrorImg()
          return
        } else {
          this.loadMainImg()
          return
        }
      }
      this.loadImageAsync({
        src: this.subImg
      }, ({ src }) => {
        this.renderImg(src)
      }, () => {
        if (this.count <= 3) {
          this.loadMainImg()
        } else {
          this.renderErrorImg()
        }
      })
    },
    renderErrorImg () {
      this.renderIsSuccess = false
      if (!this.error) {
        return
      }
      this.renderImg(this.error)
    },
    renderLoading (cb) {
      this.loadImageAsync({
        src: this.loading
      }, ({ src }) => {
        this.renderImg(src)
        cb()
      }, () => {
        cb()
      })
    },
    loadImageAsync (item, resolve, reject) {
      if (!item.src) {
        reject()
        return
      }
      const image = new Image()
      image.src = item.src
      image.onload = function () {
        resolve({
          naturalHeight: image.naturalHeight,
          naturalWidth: image.naturalWidth,
          src: image.src
        })
      }
      image.onerror = function (e) {
        reject(e)
      }
    },
    renderImg (url) {
      if (this.$refs['img']) {
        this.$refs['img'].src = url
        this.$emit('updateUrl', url)
      }
    },
    renderFinish () {
      if (this.lockRenderFinish) {
        return
      }
      this.lockRenderFinish = true
      this.$emit('renderFinish', this.renderIsSuccess)
    },
    isBase64 (str) {
      /* eslint-disable */
      const base64Pattern = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i
      return base64Pattern.test(str)
    }
  }
}
</script>
