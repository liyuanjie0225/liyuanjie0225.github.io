<template>
  <a-button
    :class="dynamicClass"
    v-bind="$attrs"
    v-on="$listeners"
    :size="size"
  >
    <slot />
  </a-button>
</template>

<script>
export default {
  name: 'SortButton',
  props: {
    isSelect: {
      type: Boolean,
      default: () => false
    },
    sort: {
      type: String,
      default: () => 'asc'
    },
    size: {
      type: String,
      default: () => 'default'
    },
    showOrder: {
      type: Boolean,
      default: () => true
    }
  },
  computed: {
    dynamicClass: function () {
      return {
        'sort-button': this.showOrder,
        'sort-button-small': this.showOrder && this.size === 'small',
        'sort-button-select': this.isSelect,
        'sort-button-asc': this.showOrder && this.isSelect && this.sort === 'asc',
        'sort-button-desc': this.showOrder && this.isSelect && this.sort === 'desc'
      }
    }
  }
}
</script>

<style lang='less' scoped>

// .theme-light {
  .sort-button-select {
    background: #F5F7F9 !important;
    border: 1px solid #2C5FDBFF !important;
    color: #2C5FDBFF !important;
  }

  .sort-button:after {
    border-top-color: #B2BBC8 !important;
  }

  .sort-button:before {
    border-bottom-color: #B2BBC8 !important;
  }

  .sort-button-desc:after {
    border-top-color: #2C5FDBFF !important;
  }

  .sort-button-asc:before {
    border-bottom-color: #2C5FDBFF !important;
  }
// }

.theme-dark {
  .sort-button-select {
    background: rgba(0, 191, 255, 0.05) !important;
    border: 1px solid #00BFFF !important;
    color: #00BFFF !important;
  }

  .sort-button:after {
    border-top-color: #7482B3 !important;
  }

  .sort-button:before {
    border-bottom-color: #7482B3 !important;
  }

  .sort-button-desc:after {
    border-top-color: #00BFFF !important;
  }

  .sort-button-asc:before {
    border-bottom-color: #00BFFF !important;
  }
}

.ant-btn-group {
  .sort-button-select {
    z-index:30
  }
}

.sort-button {
  padding: 0 25px 0 15px;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    border: 4px solid transparent;
    position: absolute;
    display: block;
    top: 15px;
    right: 12px;
    opacity: 1;
    bottom: auto;
    left: auto;
    animation: none !important;
    border-radius: 0 !important;
  }

  &-small:after {
    top: 14px
  }

  &-small:before {
    top: 4px !important;
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
    height: 0;
    width: 0;
    top: 5px;
    right: 12px;
    border: 4px solid transparent;
    border-bottom-color: var(--sort-button-icon);
    bottom: auto;
    left: auto;
    opacity: 1;
    background: transparent;
    border-radius: 0 !important;
  }
}

:deep(.ant-btn:not(:disabled):not(.sort-button-select):hover) {
  color: var(--button-text-color) !important;
  border-color: var(--button-border-color) !important;
}

:deep(.ant-btn:not(:disabled):not(.sort-button-select):focus) {
  color: var(--button-text-color) !important;
  border-color: var(--button-border-color) !important;
}
</style>
