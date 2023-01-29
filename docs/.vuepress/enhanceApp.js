import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import WatrixComponent from '../../packages/components/global.js'
import InnerComponent from './components/register.js'
import './styles/themes/index.less'

export default ({ Vue, isServer }) => {
  if (!isServer) {
    Vue.use(Antd)
    Vue.use(WatrixComponent)
    Vue.use(InnerComponent)
  }
}