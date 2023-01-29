<markdown>
# 基础用法
</markdown>

<template>
  <div>
    <HomeBadge
      :count="count"
      @click="handleClick"
    />
  </div>
</template>

<script>
export default {
  name: 'HomeBadgeDemo',
  data() {
    return {
      count: 8
    }
  },
  methods: {
    handleClick(){
      alert('HomeBadge Click')
    }
  }
}
</script>