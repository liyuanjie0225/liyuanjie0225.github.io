import RightCard from './src/index.vue'
import RightCardItem from './src/RightCardItem.vue'
import RightCardList from './src/RightCardList.vue'
export function register(Vue) {
  Vue.component(RightCard.name, RightCard)
  Vue.component(RightCardItem.name, RightCardItem)
  Vue.component(RightCardList.name, RightCardList)
}