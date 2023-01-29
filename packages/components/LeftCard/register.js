import LeftCard from './src/index.vue'
import LeftCardItem from './src/LeftCardItem.vue'
export function register(Vue) {
  Vue.component(LeftCard.name, LeftCard)
  Vue.component(LeftCardItem.name, LeftCardItem)
}