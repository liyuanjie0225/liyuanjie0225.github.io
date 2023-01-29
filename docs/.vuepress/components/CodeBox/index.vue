<template>
  <code class="code-wrapper" ref="codeRef" >
    <pre class="__code__" v-html="htmlCode"></pre>
  </code>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
export default {
  name: 'CodeBox',
  props: {
    language: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    },
    trim: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    htmlCode() {
      return this.createCodeHtml(this.language, this.code, this.trim)
    }
  },
  methods: {
    createCodeHtml(language, code, trim) {
      if (!(language && hljs.getLanguage(language))) {
        return null
      }
      return hljs.highlight(trim ? code.trim() : code, {
        language
      }).value
    }
  }
}
</script>

<style lang="less" scoped>
.code-wrapper {
  padding: 0;
  .__code__ {
    margin: 0;
    background-color: #FFFFFF;
    padding: 0;
  }
}
</style>