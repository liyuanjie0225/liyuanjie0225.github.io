<template>
  <div>
    <a-button
        className="button"
        icon="left"
        type="link"
        @click="prve"
        :disabled="current <= 1"
    />
    <a-input-number
        size="small"
        style="width:80px;margin: 0 6px"
        :value="current"
        :min="1"
        :max="pages"
        @change="onChange"
    />
    <span style="margin-right: 6px">/</span>{{ pages }}
    <a-button
        className="button"
        icon="right"
        type="link"
        @click="next"
        :disabled="current >= pages"
    />
  </div>
</template>

<script>
/**
 * 简单的分页器
 * 解决 antd simple 分页器 -1 的问题
 */
export default {
  name: 'SimplePagination',
  props: {
    current: {
      type: Number,
      default: () => 1
    },
    pageSize: {
      type: Number,
      default: () => 0
    },
    total: {
      type: Number,
      default: () => 10
    }
  },
  data() {
    return {
      // pages:0,
    }
  },
  computed: {
    oldpages: function () {
      return this.total / this.pageSize
    },
    pages: function () {
      return Math.ceil(this.oldpages)
    }
  },
  methods: {
    prve() {
      this.pageChange(this.current - 1)
    },
    next() {
      this.pageChange(this.current + 1)
    },
    onChange(current) {
      if (/^\d+$/.test(current)) {
        if (current >= 1 && current <= this.pages) {
          this.$emit('change', current)
        }
      }
    },
    pageChange(current) {
      if (/^\d+$/.test(current)) {
        if (current >= 1 && current <= this.pages) {
          this.$emit('change', current)
        }
      }
    }
  }
}
</script>

<style scoped>
:deep(.ant-btn[disabled]) {
  background: transparent !important;
}
</style>
