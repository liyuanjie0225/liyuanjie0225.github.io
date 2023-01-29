<markdown>
# 基础用法
</markdown>

<template>
  <div>
    <SortButton
      size="default"
      :isSelect="true"
      :showOrder="true"
      :sort="sort"
      @click="changeOrder"
    >
      排序按钮
    </SortButton>
  </div>
</template>

<script>
export default {
  name: 'SortButtonDemo',
  data() {
    return {
      sort: 'asc'
    }
  },
  methods: {
    changeOrder(){
      if(this.sort === 'asc') {
        this.sort = 'desc'
      }else{
        this.sort = 'asc'
      }
    }
  }
}
</script>