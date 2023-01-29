<markdown>
# 基础示例
</markdown>
<template>
  <simple-pagination
      :current="pagination.current"
      :page-size="pagination.pageSize"
      :total="pagination.total"
      @change="pageChange">
  </simple-pagination>
</template>

<script>
export default {
  name: "SimplePaginationDemo",
  data(){
    return {
      pagination: {
        current: 1,
        pageSize: 15,
        total: 50,
      },
    }
  },
  methods:{
    pageChange(current){
      this.pagination.current = current
    }
  }
}
</script>

<style scoped>

</style>
