<template>
  <div
    style="height: 100%;width: 100%"
    v-resize="resetPagination"
  >
    <div
      style="height: 100%;width: 100%;"
      ref="CardList"
      @scroll="scroll"
    >
      <a-empty
        style="margin-top: 50px"
        v-if="dataSource.length === 0 && showEmpty"
        :description="emptyDescription"
      >
        <template>
          <slot name="image" />
        </template>
      </a-empty>
      <div
        class="right-card-grid"
        id="right-card-grid"
        :style="{
          'grid-template-columns':`repeat(auto-fit, ${itemWidth}px)`,
          'grid-auto-rows': `${itemHeight}px`,
        }"
      >
        <RightCardItem
          v-for="item in dataSource"
          @hover="hover"
          @selectItem="selectItem"
          :main-img="mainImgKey"
          :sub-img="subImgKey"
          :feature="item"
          :key="item.featureId"
        >
          <template
            slot="action"
            slot-scope="{feature}"
          >
            <slot
              name="action"
              :feature="feature"
            />
          </template>
          <template
            slot="bottom"
            slot-scope="{feature}"
          >
            <slot
              name="bottom"
              :feature="feature"
            />
          </template>
        </RightCardItem>
      </div>
      <div
        class="right-card-grid-hover-card"
        id="right-card-grid-hover-card"
        :style="{
          width:`${hoverCardWidth}px`,
          height:`${hoverCardHeight}px`
        }"
        @mouseenter.stop="mouseenter"
        @mouseleave="mouseleave"
      >
        <left-card-item
          :feature="feature"
          :sub-img-key="subImgKey"
          :main-img-key="mainImgKey"
          :config="config"
          :label-width="labelWidth"
        >
          <template
            v-for="item in config"
            :slot="`${item.key}Value`"
            slot-scope="scope"
          >
            <slot
              :name="`${item.key}Value`"
              v-bind="scope"
            />
          </template>
        </left-card-item>
      </div>
    </div>
  </div>
</template>

<script>
import RightCardItem from './RightCardItem'
import resize from './directives/resize'
export default {
  name: 'RightCard',
  components: { RightCardItem },
  directives:{
    resize:resize
  },
  props: {
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
    isHover: {
      type: Boolean,
      default: () => false
    },
    showEmpty: {
      type: Boolean,
      default: () => true
    },
    cardWidth: {
      type: Number,
      default: () => 84
    },
    cardHeight: {
      type: Number,
      default: () => 153
    },
    hoverCardWidth: {
      type: Number,
      default: () => 300
    },
    hoverCardHeight: {
      type: Number,
      default: () => 173
    },
    config: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: Number,
      default: 0
    },
    emptyDescription: {
      type: String,
      default: undefined
    }
  },
  data () {
    return {
      itemCount: 0,
      feature: {},
      offsetCard: {
        left: '0',
        top: '0',
        display: 'none',
        width: 0,
        height: 0
      },
      oldWidth: 0, // 避免页面刷新导致的抖动
      itemWidth: this.cardWidth,
      itemHeight: this.cardHeight,
      scrollTimer: undefined,
      showTarget: false,
      blurTarget: false,
      blurTimer: undefined,
      isFullScreen: false
    }
  },
  mounted () {
    const leftItemCard = document.getElementById('right-card-grid-hover-card')
    const body = document.querySelector('body')
    if (body.append) {
      body.append(leftItemCard)
    } else {
      body.appendChild(leftItemCard)
    }
  },
  destroyed () {
    // 切换页面的时候 销毁卡片
    document.getElementById('right-card-grid-hover-card').remove()
    if (this.blurTimer) {
      clearTimeout(this.blurTimer)
    }
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer)
    }
  },
  methods: {
    hover (el, feature, target) {
      if (!this.isHover) return
      this.showTarget = target
      if (target) {
        if (this.blurTimer) {
          clearTimeout(this.blurTimer)
        }
        const leftItemCard = document.getElementById('right-card-grid-hover-card')
        const { x, y } = el.getBoundingClientRect()
        if (x + this.hoverCardWidth > document.body.offsetWidth) {
          leftItemCard.style.left = `${x - this.hoverCardWidth + el.clientWidth}px`
        } else {
          leftItemCard.style.left = `${x}px`
        }
        if (y + this.hoverCardHeight + this.itemHeight > document.body.offsetHeight) {
          leftItemCard.style.top = `${y - this.hoverCardHeight}px`
        } else {
          leftItemCard.style.top = `${y + this.itemHeight}px`
        }
        this.feature = feature
        leftItemCard.style.display = 'block'
      } else {
        if (this.blurTimer) {
          clearTimeout(this.blurTimer)
        }
        this.blurTimer = setTimeout(() => {
          if (!this.blurTarget) {
            const leftItemCard = document.getElementById('right-card-grid-hover-card')
            leftItemCard.style.display = 'none'
          }
        }, 1)
      }
    },
    scroll (e) {
      const leftItemCard = document.getElementById('right-card-grid-hover-card')
      leftItemCard.style.display = 'none'
      if (!this.showTarget) return
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer)
      }
      // 滚动之后显示
      this.scrollTimer = setTimeout(() => {
        const leftItemCard = document.getElementById('right-card-grid-hover-card')
        leftItemCard.style.display = 'block'
      }, 300)
    },
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
      if (width === this.oldWidth) {
        return
      }
      this.oldWidth = width
      if (width && height) {
        // 计算列
        let count = width / this.cardWidth
        if ((count - Math.floor(count)) > 0.8) {
          count = count + 1
        }
        const columns = Math.floor(count)
        const itemWidth = (width - (columns - 1) * 10) / columns
        this.itemWidth = itemWidth
        // console.log(itemWidth)
        // 计算行
        const rows = Math.round(height / 153)
        const itemHeight = (height - (rows - 1) * 10) / rows
        this.itemHeight = itemHeight
        // console.log(rows * columns)
        this.$emit('resetPagination', rows * columns)
      }
    },
    selectItem (item) {
      this.$emit('selectItem', item)
    },
    mouseenter () {
      this.blurTarget = true
    },
    mouseleave () {
      this.blurTarget = false
      const leftItemCard = document.getElementById('right-card-grid-hover-card')
      leftItemCard.style.display = 'none'
    }
  }
}
</script>

<style lang='less' scoped>
.right-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(84px, 100px));
  grid-gap: 10px;
  grid-auto-rows: 153px;
}

.right-card-grid-hover-card {
  position: absolute;
  width: 300px;
  height: 173px;
  z-index: 9999;
  left: 0;
  top: 0;
  display: none;
  background: #0E2C76;
}
</style>
