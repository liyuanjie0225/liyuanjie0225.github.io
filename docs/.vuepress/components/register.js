import CodeBox from './CodeBox/index.vue'
import DemoBox from './DemoBox/index.vue'

export default {
  install(Vue) {
    Vue.component(CodeBox.name, CodeBox)
    Vue.component(DemoBox.name, DemoBox)
  }
}