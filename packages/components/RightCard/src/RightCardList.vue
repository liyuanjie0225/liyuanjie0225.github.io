<template>
  <div
    style="height: 100%;width: 100%"
    v-resize="resetPagination"
  >
    <div
      class="right-card-list"
      ref="CardList"
    >
      <a-empty
        v-if="dataSource.length === 0"
        :description="emptyDescription"
      />
      <div
        class="right-card-grid"
        id="right-card-grid"
        :style="{
          'grid-template-columns':`repeat(auto-fit, ${itemWidth})`,
          'grid-auto-rows': itemHeight,
        }"
      >
        <RightCardItem
          v-for="item in dataSource"
          @selectItem="selectItem"
          :main-img="mainImg"
          :sub-img="subImg"
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
    </div>
  </div>
</template>

<script>
import RightCardItem from './RightCardItem'

export default {
  name: 'RightCardList',
  components: { RightCardItem },
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    mainImg: {
      type: String,
      default: () => ''
    },
    subImg: {
      type: String,
      default: () => ''
    },
    isHover: {
      type: Boolean,
      default: () => false
    },
    cardWidth: {
      type: Number,
      default: () => 84
    },
    cardHeight: {
      type: Number,
      default: () => 153
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
      oldWidth: 0, // 避免页面刷新导致的抖动
      itemWidth: `${this.cardWidth}px`,
      itemHeight: `${this.cardHeight}px`
    }
  },
  mounted () {
  },
  destroyed () {

  },
  methods: {
    resetPagination (width, height) {
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
        this.itemWidth = `${itemWidth}px`
      }
    },
    selectItem (item) {
      this.$emit('selectItem', item)
    }
  }
}
</script>

<style lang='less' scoped>
.right-card-list {
  height: 100%;
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
}

.right-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(84px, 100px));
  grid-gap: 10px;
  grid-auto-rows: 153px;
}
</style>
