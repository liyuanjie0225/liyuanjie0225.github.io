<template>
  <div
    class="right-card-item-container card-background-color"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    :class="{
      'right-card-item-bind':feature.isBind,
      'is_selected':feature.isSelected
    }"
    @click="selectItem"
  >
    <CustomImg
        width='100%'
        height="100%"
      class="right-card-item-image"
      :key="feature[mainImg]"
      :error="defaultImg"
      :main-img="feature[mainImg]"
      :sub-img="feature[subImg]"
    />
    <img
      v-if="feature.facePath"
      :src="faceImg"
      style="width: 20px;height: 20px;position: absolute;top: 0px;right: 0px;z-index: 1"
    >
    <div
      class="right-tri"
      :class="{'right-tri-selected':feature.isSelected}"
    />
    <div class="right-card-item-bottom">
      <!--      相似度-->
      <slot
        name="bottom"
        :feature="feature"
      />
      <!--      按钮栏-->
      <div class="right-card-item-action">
        <slot
          name="action"
          :feature="feature"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RightCardItem',
  props: {
    mainImg: {
      type: String,
      default: () => ''
    },
    subImg: {
      type: String,
      default: () => ''
    },
    feature: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {}
  },
  computed: {
    defaultImg: function () {
      return require('./assets/perch.png')
    },
    faceImg: function () {
      return require('./assets/portrait-mark.png')
    }
  },
  mounted () {

  },
  methods: {
    previewItem () {
      this.$emit('previewItem', this.feature)
    },
    confirmItem () {
      this.$emit('previewItem', this.feature)
    },
    saveItem () {
      this.$emit('previewItem', this.feature)
    },
    mouseEnter () {
      this.$emit('hover', this.$el, this.feature, true)
    },
    mouseLeave () {
      this.$emit('hover', this.$el, this.feature, false)
    },
    selectItem () {
      this.$emit('selectItem', this.feature)
    }
  }
}
</script>

<style lang='less' scoped>

@card-item-container-color: var(--primary-text-color);
@card-item-container-border: 2px solid var(--opacity-secondary-color);
@card-item-container-bg: var(--light-background-color);

@card-item-select-color: var(--primary-border-color);
@card-item-unselect-color: var(--opacity-secondary-color);
@card-item-bind-color: var(--danger-color);
.theme-light {
  .right-card-item-container {
    box-sizing: border-box;
    color: #222333;
    border: 1px solid #DFE0EB;
    background: #FFFFFF;
  }

  .right-card-item-action .iconfont {
    color: rgba(255, 255, 255, 0.85);

    &:hover {
      color: #2C5FDB;
    }
  }

  .right-card-item-action {
    background: rgba(0, 0, 0, 0.5)
  }

  .is_hover:not(.is_selected) {
    &:hover {
      border: 1px solid #003ED6;
    }
  }

  .is_selected {
    border: 2px solid #003ED6;
    background: #F1F5FF;
  }

  .right-tri {
    border-color: transparent #D0D1DD; /*上下颜色 左右颜色*/
  }

  .right-tri:after {
    border-color: #FFFFFF;
  }

  .right-tri-selected {
    border-color: transparent #003ED6; /*上下颜色 左右颜色*/
  }
}

.theme-dark {
  .right-card-item-container {
    color: #D7DCEB;
    border: 1px solid #324486;
    background: rgba(0, 191, 255, 0.05);
  }

  .right-card-item-action .iconfont {
    color: rgba(255, 255, 255, 0.85);

    &:hover {
      color: #00BFFF;
    }
  }

  .right-card-item-action {
    background: rgba(0, 0, 0, 0.25)
  }

  .is_hover:not(.is_selected) {
    &:hover {
      border: 1px solid #00BFFF;
    }
  }

  .is_selected {
    border: 2px solid #00BFFF;
    background: transparent;
  }

  .right-tri {
    border-color: transparent #41528D; /*上下颜色 左右颜色*/
  }

  .right-tri:after {
    border-color: #0E2C76;
  }

  .right-tri-selected {
    border-color: transparent #00BFFF; /*上下颜色 左右颜色*/
  }
}

.right-card-item {
  &-container {
    position: relative;
    border-radius: 6px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border: @card-item-container-border;
    background: @card-item-container-bg;

    &:hover {
      border: 2px solid @card-item-select-color;
    }
  }

  //&-select {
  //  border: 2px solid @card-item-select-color;
  //}

  &-bind {
    border: 2px solid @card-item-bind-color !important;
    //box-shadow: 0px 0px 8px 0px rgba(255, 77, 79, 0.50);
  }

  &-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  &-action {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &-image {
    width: 100%;
    height: 100%;
  }
}

.right-tri {
  position: absolute;
  top: 0;
  left: 0;
  /*直角三角*/
  width: 0;
  height: 0;
  border-color: transparent rgba(25, 145, 255, 0.2); /*上下颜色 左右颜色*/
  border-width: 0 0 30px 30px;
  border-style: solid;
  z-index: 1
}

.right-tri:after {
  content: '';
  display: inline-block;
  margin-left: -25px;
  width: 6px;
  height: 9px;
  transform: rotate(45deg);
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 0 2px 2px 0;
}

.right-tri-selected {
  border-color: transparent @card-item-select-color;
}

.right-tri-selected:after {
  border-color: white;
}

//.right-card-item-hover {
//  position: absolute;
//  left: 0;
//  top: 100%;
//  width: 252px;
//  z-index: 10;
//  background: #00BFFF;
//}
</style>
