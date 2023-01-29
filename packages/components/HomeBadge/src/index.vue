<template>
  <a-badge
    v-bind="$attrs"
    class="home-badge"
    @click="$emit('click')"
  >
    <i class="iconfont iconbutaicang alignment-right-icon" />
  </a-badge>
</template>

<script>
export default {
  name: 'HomeBadge'
}
</script>

<style lang='less' scoped>
.alignment-right-icon {
  font-size: 40px;
  &:hover {
    color: var(--primary-color);
  }
}
:deep(.ant-badge-count) {
  box-shadow: none;
  top:8px;
  right:8px;
  height: 16px;
  min-height: 16px;
  border-radius: 8px;
  line-height: 16px;
  font-size: 12px;
}
</style>
