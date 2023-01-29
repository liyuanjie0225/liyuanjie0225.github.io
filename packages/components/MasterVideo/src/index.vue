<template>
  <video
    ref="video"
    id="video"
    :src="videoUrl"
    v-bind="$attrs"
    v-on="$listeners"
    @error="videoError"
    autoplay
    controls
    :poster="isError?error:undefined"
  />
</template>

<script>

/**
 * 封装视频控件，解决主控积压导致的视频读取问题
 */
export default {
  name: 'MasterVideo',
  props: {
    src: { // 主地址
      type: String,
      default: () => undefined
    },
    subSrc: { // 副地址
      type: String,
      default: () => undefined
    },
    retryCount: { // 重试次数
      type: Number,
      default: () => 3
    },
    error: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      videoUrl: undefined,
      count: 1,
      isError: false
    }
  },
  watch: {
    src: function(val, oldVal) {
      if (val !== oldVal) {
        this.initVideo()
      }
    },
    subSrc: function(val, oldVal) {
      if (val !== oldVal) {
        this.initVideo()
      }
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.initVideo()
    // })
    this.initVideo()
  },
  methods: {
    initVideo() {
      this.count = 1
      this.videoUrl = this.src || this.subSrc
      this.isError = false
      this.$refs.video && this.$refs.video.load && this.$refs.video.load()
    },
    videoError() { // 视频加载错误是进行地址切换
      if (this.count >= this.retryCount * 2) {
        this.isError = true
        return
      } // 达到重试次数，停止重试
      this.count = this.count + 1
      if (this.videoUrl === this.src && this.subSrc) {
        this.videoUrl = this.subSrc
        this.$refs.video && this.$refs.video.load && this.$refs.video.load()
      } else if (this.videoUrl === this.subSrc && this.src) {
        this.videoUrl = this.src
        this.$refs.video && this.$refs.video.load && this.$refs.video.load()
      } else {
        this.$refs.video && this.$refs.video.load && this.$refs.video.load()
      }
    },
    playFromBegin() {
      if (!this.$refs.video) {
        return
      }
      this.$refs.video.currentTime = 0
      this.play()
    },
    play() {
      if (!this.$refs.video) {
        return
      }
      this.$refs.video.play()
    },
    pause() {
      if (!this.$refs.video) {
        return
      }
      this.$refs.video.pause()
    }
  }
}
</script>

<style scoped>

</style>
