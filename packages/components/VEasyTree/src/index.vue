<template>
  <!-- style="height: calc(100vh - 20px)" -->
  <div class="ve-tree">
    <!-- Just remove the height parameter when not using virtual scrolling -->
    <!-- height="calc(100vh - 20px)" -->
    <vue-easy-tree
      ref="veTree"
      v-bind="$attrs"
      v-on="$listeners"
      :height="treeHeight"
      :show-checkbox="checkable"
      highlight-current
      :data="defaultTreeData"
      :props="fields"
      :expand-on-click-node="false"
      :current-node-key="defaultSelectedKey"
      empty-text=""
    >
      <template slot-scope="item">
        <div class="camera-tree-node" :style="computeOuterWidth(item.data)">
          <div
            :class="{ 'cascade-title': item.data[fields.cascadeId] }"
            :style="computeInnerWidth(item.data)"
          >
            <slot name="title" :item="item.data">
              <div class="title" :style="computeLabelWidth(item.data)">
                {{ item.data[fields.label] }}
              </div>
              <span class="count" v-if="isCount && showBrackets"
                >({{ renderNodeCount(item.data) }})</span
              >
              <span class="count" v-if="isCount && !showBrackets">{{
                renderNodeCount(item.data)
              }}</span>
            </slot>
          </div>
          <span v-if="defaultSelectedKey === item.data[fields.key]">
            <i class="iconfont iconxuanze2" v-if="isSelect" />
            <a-tooltip
              v-if="item.data.operation.edit"
              @click.stop="$emit('edit', item.data)"
            >
              <template #title>
                <span>{{ $t("common.edit") }}</span>
              </template>
              <i class="iconfont iconbianji07" />
            </a-tooltip>
            <a-tooltip
              v-if="item.data.operation.delete"
              @click.stop="$emit('delete', item.data)"
            >
              <template #title>
                <span>{{ $t("common.delete") }}</span>
              </template>
              <i class="iconfont iconshanchu08" />
            </a-tooltip>
            <a-tooltip
              v-if="item.data.operation.deploy"
              @click.stop="$emit('deploy', item.data)"
            >
              <template #title>
                <span>{{ $t("dist.library_deployed") }}</span>
              </template>
              <i class="iconfont iconrenyuanbukong_24" />
            </a-tooltip>
          </span>
        </div>
      </template>
    </vue-easy-tree>
  </div>
</template>

<script>
import VueEasyTree from "@linxl/vue-virtual-tree";
// import '@wchbrad/vue-easy-tree/src/assets/index.scss'
import deepClone from "lodash/cloneDeep";
export default {
  name: "VEasyTree",
  components: { VueEasyTree },
  props: {
    treeData: {
      type: Array,
      default: () => [],
    },
    treeHeight: {
      // 树区域的高度，用于虚拟加载
      type: String,
      default: "100%",
    },
    fields: {
      type: Object,
      default: () => ({
        label: "title",
        value: "value",
        key: "id",
        children: "children",
        count: "count",
        cascadeId: "cascadeId",
      }),
    },
    renderCount: {
      type: Function,
      default: undefined,
    }, // 覆写计数方法
    isEdit: Boolean, // 编辑
    isDelete: Boolean, // 删除
    isSelect: Boolean, // 选择
    isDeploy: Boolean, // 布控
    isCount: Boolean, // 是否需要显示个数
    // isCount为true时，是否显示()，用于兼容分组带摄像机的渲染样式
    showBrackets: {
      type: Boolean,
      default: true,
    },
    selectedKeys: {
      type: Array,
      default: () => [],
    },
    checkable: {
      // 是否可选
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultTreeData: [],
      defaultSelectedKey: "", // 选中的节点id
    };
  },

  watch: {
    selectedKeys: {
      handler: function (val, oldVal) {
        if (val) {
          this.defaultSelectedKey = val + "";
          // console.log('this.defaultSelectedKey', this.defaultSelectedKey)
          // 高亮显示选中的行
          this.$nextTick(() => {
            this.$refs.veTree.setCurrentKey(this.defaultSelectedKey); // 一定要加这个选中了否则样式没有出来
          });
        }
      },
    },
    treeData: {
      handler: function (val, oldVal) {
        if (val) {
          this.defaultTreeData = this.dealTreeData(deepClone(this.treeData));
          console.log("this.defaultTreeData", this.defaultTreeData);
          // this.defaultTreeData = deepClone(this.treeData)
        }
      },
      immediate: true,
    },
  },

  methods: {
    // 遍历节点增加在第几层
    dealTreeData(treeList) {
      const addSlotTree = (el, layer) => {
        // 增加层级
        el.layer = layer;
        layer++;
        // 增加操作权限
        el.operation = this.handleOperation(el);
        if (el[this.fields.children] && el[this.fields.children].length > 0) {
          const len = el[this.fields.children].length;
          for (let i = 0; i < len; i++) {
            addSlotTree(el[this.fields.children][i], layer);
          }
        }
      };
      treeList.forEach((node) => addSlotTree(node, 1));
      // console.log('treeList', treeList)
      return treeList;
    },

    computeOuterWidth(data) {
      const layerWith = data.layer * 22;
      const width = this.checkable ? 25 + layerWith : layerWith;
      return {
        width: `calc(100% - ${width}px)`,
      };
    },

    computeInnerWidth(data) {
      // 计算有几个按钮
      let total = 0;
      if (this.defaultSelectedKey === data[this.fields.key]) {
        total +=
          Object.values(data.operation).filter((opt) => opt === true).length *
          15;
      }
      return {
        width: `calc(100% - ${total}px)`,
      };
    },

    // 计算label的宽度
    computeLabelWidth(data) {
      const countWidth = this.renderNodeCount(data).length * 9; // 每个数字占9px
      const total = countWidth + 2 * 2; // 括号占2px
      return {
        maxWidth: `calc(100% - ${total}px)`,
      };
    },

    renderNodeCount(item) {
      let count = `${item[this.fields.count] || 0}`;
      if (this.renderCount) {
        count = this.renderCount(item);
      }
      return count;
    },

    handleOperation(data) {
      if (
        data.uneditable ||
        data.privilegeLevel !== 2 ||
        data.cascadeId ||
        data.cameraGroupId === "None"
      ) {
        return {
          edit: false,
          delete: false,
          deploy: false,
        };
      } else {
        return {
          edit: this.isEdit,
          delete: this.isDelete && data[this.fields.children].length === 0,
          deploy: this.isDeploy,
        };
      }
    },
  },
};
</script>

<style scoped lang="less">
.el-tree {
  .camera-tree-node {
    max-width: calc(100% - 30px);
    display: flex;
    justify-content: space-between;
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      // max-width: 90%;
    }
  }
}

.count {
  display: inline-block;
  vertical-align: top;
}
</style>

<!-- 全局的element tree的样式 -->
<style lang="less">
.el-tree {
  background: transparent !important;
  .el-tree-node__content:hover {
    background-color: var(
      --tree-hover-background-color
    ) !important; // hover 节点的背景色
  }
  .el-tree-node:focus > .el-tree-node__content {
    background: var(
      --tree-hover-background-color
    ) !important; // focus 节点无背景色
  }

  // 未选中节点通用样式
  .el-tree-node > .el-tree-node__content {
    color: var(--primary-text-color) !important;
  }
  // 选中节点通用样式
  .el-tree-node.is-current > .el-tree-node__content {
    background-color: var(
      --tree-hover-background-color
    ) !important; // 选中 节点背景透明，否则是白色
    color: var(--primary-color) !important;
  }
  // 选中时icon不用加粗
  .el-tree-node.is-current > .el-tree-node__content .camera-tree-node > div {
    font-weight: bold !important;
  }
  .el-tree-node__content {
    // padding: 6px 0;
    white-space: nowrap;
    // list-style: none;
    // outline: 0;
    // line-height: 21px;
    height: 26px;
    align-items: flex-start;
  }
  //.el-tree-node__expand-icon {
  //  font-size: 16px;
  //  padding: 3px;
  //}
  .el-tree-node__content > .el-tree-node__expand-icon {
    padding: 0px 6px;
  }
  .el-checkbox {
    .el-checkbox__inner {
      background-color: transparent !important;
    }
    .is-indeterminate {
      .el-checkbox__inner {
        background-color: var(--primary-border-color) !important;
      }
    }
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: var(--primary-border-color) !important;
    // border-color: var(--primary-border-color) !important;
  }
}

/* 树的级联在深色浅色模式下的样式 */
.theme-dark {
  .cascade-title {
    color: #69dff0;
  }
}
.theme-light {
  .cascade-title {
    color: #007f70;
  }
}
</style>
