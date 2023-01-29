<template>
  <div
    class='left-card-body'
    v-resize='resetPagination'
  >
    <div
      class='left-card-container'
      ref='leftCardContainer'
    >
      <a-empty
        style='margin-top: 50px'
        v-if='dataSource.length === 0 && showEmpty'
        :description='emptyDescription'
      >
        <template>
          <slot name='image' />
        </template>
      </a-empty>
      <div
        v-else
        class='left-card-list'
        :style="{
          'grid-template-columns': `repeat(auto-fit, ${itemWidth})`,
          'grid-auto-rows': itemHeight
        }"
      >
        <LeftCardItem
          v-for='(feature, index) in dataSource'
          :key='feature[rowKey]'
          :feature='feature'
          :action='action'
          :config='getConfig(feature)'
          :main-img-key='mainImgKey'
          :sub-img-key='subImgKey'
          :copyable='copyable'
          v-bind='$attrs'
          v-on='$listeners'
          @selectChange='selectItem'
        >
          <template
            slot='action'
            slot-scope='scope'
          >
            <slot
              name='action'
              v-bind='scope'
            />
          </template>
          <template
              slot='itemLeft'
              slot-scope='scope'
          >
            <slot
                name='itemLeft'
                v-bind='scope'
            />
          </template>
          <template
            slot='item'
            slot-scope='scope'
          >
            <slot
              name='item'
              v-bind='scope'
              :index='index'
            />
          </template>
          <template
            slot='content'
            slot-scope='scope'
          >
            <slot
              name='content'
              v-bind='scope'
              :index='index'
            />
          </template>
          <template
            slot='actionLeft'
            slot-scope='scope'
          >
            <slot
              name='actionLeft'
              v-bind='scope'
            />
          </template>
          <!--          <template v-for='item in config' :slot='`${item.key}Name`' slot-scope='{feature}'>-->
          <!--            <slot :name='`${item.key}Name`' :feature='feature'></slot>-->
          <!--          </template>-->
          <template
            v-for='item in config'
            :slot='`${item.key}Value`'
            slot-scope='scope'
          >
            <slot
              :name='`${item.key}Value`'
              v-bind='scope'
            />
          </template>
        </LeftCardItem>
      </div>
    </div>
  </div>
</template>

<script>
import LeftCardItem from './LeftCardItem'
import resize from './utils/resize'
export default {
  name: 'LeftCard',
  components: { LeftCardItem },
  directives:{
    resize:resize
  },
  props: {
    rowKey: {
      type: String,
      default: () => 'featureId'
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    mainImgKey: {
      type: String,
      default: () => ''
    },
    subImgKey: {
      type: String,
      default: () => ''
    },
    /**
     * 目前存在的操作
     *hover      //hover
     preview    //预览
     operate    //重新检测
     select     //是否可以选择
     edit       //编辑
     confirm    //追加目标
     info       //查看详情
     其他操作 插槽
     <slot >
     用法1
     {
        hover:true
     }
     用法2
     {
        hover:(feature)=>{
          //进行相应的判断
          return true
        }
     }
     * */
    action: {
      type: Object,
      default: () => ({})
    },
    // 个性化改变Option,
    // 主要用于比对检索，抽离业务逻辑
    changeConfig: {
      type: Function,
      default: undefined
    },
    /**
     * 右侧的表单配置
     *{
          label: '时间',   // 标题
          key: 'time',    // key
          click: (item) => {        //点击事件
            console.log('点击')
          },
          style:{               //特殊的样式
            color:'#b32626',
            cursor:'pointer'
          } //一个样式对象
        }
     */
    config: {
      type: Array,
      default: () => []
    },
    cardWidth: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Number,
      default: () => 350
    },
    cardHeight: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Number,
      default: () => 195
    },
    emptyDescription: {
      type: String,
      default: undefined
    },
    showEmpty: {
      type: Boolean,
      default: () => true
    },
    copyable: {
      // 是否允许双击拷贝
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      itemWidth: `${this.cardWidth}px`,
      itemHeight: `${this.cardHeight}px`,
      oldWidth: 0,
      oldHeight: 0,
      // resetPagination: debounce(this.dealSizeChange, 100),
      pageSize: 0,
      isFullScreen: false // 是否为全屏模式退出
    }
  },
  watch: {
    // 数据源变化 - 跳转到顶部
    dataSource: {
      handler: function (val, oldVal) {
        if (val !== oldVal) {
          this.scrollToTop()
        }
      },
      deep: true
    }
  },
  methods: {
    // 处理特殊逻辑，每个card显示的东西不一样的时候，用函数changeOption进行改变
    getConfig (feature) {
      if (this.changeConfig) {
        return this.changeConfig(feature)
      } else {
        return this.config
      }
    },
    saveItem (feature) {
      this.$emit('saveItem', feature)
    },
    selectItem (feature) {
      this.$emit('selectItem', feature)
    },
    confirmItem (feature) {
      this.$emit('confirmItem', feature)
    },
    // resetPagination(width, height) {
    //
    // },
    resetPagination (width, height) {
      const isFullScreen = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen
      if (isFullScreen) {
        this.isFullScreen = isFullScreen
        return
      }
      if (this.isFullScreen) {
        this.isFullScreen = false
        return
      }
      // 解决由于页面数据导致的容器高度变化带来的分页重置
      // 前后高度差小于卡片高度时，不进行重置
      if (Math.abs(height - this.oldHeight) < this.cardHeight && width === this.oldWidth) {
        return
      }
      // console.log(width, height)
      this.oldWidth = width
      this.oldHeight = height
      // -----end------
      if (width && height) {
        // 计算列
        let count = width / this.cardWidth
        if (count - Math.floor(count) > 0.8) {
          count = count + 1
        }
        const columns = Math.floor(count)
        const itemWidth = (width - (columns - 1) * 10) / columns
        this.itemWidth = `${itemWidth}px`
        // console.log(itemWidth)
        // 计算行
        const rows = Math.round(height / this.cardHeight)
        if (rows * columns === this.pageSize) {
          return
        }
        this.pageSize = rows * columns
        // console.log(rows * columns)
        this.$emit('resetPagination', this.pageSize)
      }
    },
    // 移动到顶部
    scrollToTop () {
      this.$refs.leftCardContainer.scrollTop = 0
    }
  }
}
</script>

<style lang='less' scoped>
.left-card-body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.left-card-container {
  height: 100%;
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
}

.left-card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 10px 10px;
  grid-auto-rows: 185px;
}
</style>
