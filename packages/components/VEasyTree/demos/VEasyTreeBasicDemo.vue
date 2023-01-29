<markdown>
# 基础示例
</markdown>
<template>
  <div>
    <v-easy-tree
      node-key="id"
      @node-click="onSelect"
      treeHeight="100px"
      :fields="{
        label: 'repName',
        key: 'id',
        children: 'repositoryItemList',
        count: 'monitorCount',
        cascadeId: 'cascadeId',
      }"
      :tree-data="departTree"
      :selected-keys="defaultCheckedKeys"
      is-count
    />
  </div>
</template>

<script>
export default {
  name: "VEasyTreeBasicDemo",
  data() {
    return {
      departTree: [
        {
          createTime: "2021-08-03 13:38:54",
          id: "1000000000000000000",
          mangoId: "62b0084fb3efc118a0644db4",
          monitorCount: 11330,
          privilegeLevel: 2,
          repDesc: "普通底库",
          repName: "普通步态库",
          repositoryItemList: [
            {
              createBy: "admin",
              createTime: "2022-07-19 11:10:38",
              id: "1549230202352177152",
              mangoId: "62d620aeb3efc1fdcf917ac4",
              monitorCount: 6,
              parentId: "1000000000000000000",
              privilegeLevel: 2,
              repDesc: "11",
              repName: "!@!@!@!@",
              repositoryItemList: [
                {
                  createBy: "admin",
                  createTime: "2022-09-15 10:25:22",
                  id: "1570237305137008640",
                  mangoId: "63228d11b3efc1795d32c023",
                  monitorCount: 2,
                  parentId: "1549230202352177152",
                  privilegeLevel: 2,
                  repDesc: "111",
                  repName: "111",
                  repositoryItemList: [],
                  repositoryType: 0,
                  selfMonitorCount: 2,
                  uneditable: false,
                },
              ],
              repositoryType: 0,
              selfMonitorCount: 3,
              uneditable: false,
              updateTime: "2022-09-15 11:13:32",
            },
          ],
          repositoryType: 0,
          selfMonitorCount: 0,
          uneditable: true,
          updateTime: "2022-06-20 13:35:31",
        },
        {
          cascadeId: "cascade_130200",
          cascadeLayer: "1",
          cascadeName: "河北省唐山市公安局",
          createBy: "admin",
          createTime: "2022-09-08 13:23:45",
          id: "4df5ef3a7df847cd850ae476ef591495",
          mangoId: "4df5ef3a7df847cd850ae476ef591495",
          monitorCount: 41,
          privilegeLevel: 2,
          repDesc: "一级级联河北省唐山市公安局普通步态库",
          repName: "一级级联河北省唐山市公安局普通步态库",
          repositoryItemList: [
            {
              cascadeId: "cascade_130202",
              cascadeLayer: "2",
              cascadeName: "河北省唐山市路南区",
              createBy: "admin",
              createTime: "2022-09-07 00:00:00",
              id: "e8a1faf7397f4f17873128ebc498c439",
              mangoId: "e8a1faf7397f4f17873128ebc498c439",
              monitorCount: 35,
              parentId: "4df5ef3a7df847cd850ae476ef591495",
              privilegeLevel: 2,
              repDesc: "二级级联河北省唐山市路南区普通步态库",
              repName: "二级级联河北省唐山市路南区普通步态库",
              repositoryItemList: [],
              repositoryType: 0,
              selfMonitorCount: 0,
              uneditable: true,
            },
          ],
          repositoryType: 0,
          selfMonitorCount: 0,
          uneditable: true,
        },
      ],
      defaultCheckedKeys: [],
    };
  },
  methods: {
    // 点击树选中
    onSelect(selectedData, node) {
      this.defaultCheckedKeys = [selectedData.id];
    },
  },
};
</script>

<style scoped></style>
