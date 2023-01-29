
export default {
  /**
   * 组件大小变化指令
   * @param el
   * @param binding
   */
  bind (el, binding) { // el为绑定的元素，binding为绑定给指令的对象
    let width = ''; let height = ''
    // console.log(el, '绑定定时任务')
    function isResize () {
      const style = document.defaultView.getComputedStyle(el)
      if (width !== style.width || height !== style.height) {
        binding.value(Number.parseFloat(style.width.replace('px', '')), Number.parseFloat(style.height.replace('px', '')))
      }
      width = style.width
      height = style.height
    }

    el.__vueSetInterval__ = setInterval(isResize, 500)
  },
  unbind (el) {
    // console.log(el, '清除定时任务')
    clearInterval(el.__vueSetInterval__)
  }
}
