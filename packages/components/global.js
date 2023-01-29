const { marked } = require('marked')

/**
 * 解析 markdown
 * @param {*} markdownText 
 * @returns 
 */
function transformMdToObj(markdownText) {
  let tempObj = {
    title: '',
    content: ''
  }
  if (!markdownText) {
    return tempObj
  }
  const tokens = marked.lexer(markdownText)
  for (const token of tokens) {
    if (token.type === 'heading' && token.depth === 1) {
      tempObj.title = token.text
    } else if (token.type === 'paragraph') {
      tempObj.content = token.text
    }
  }
  return tempObj
}

/**
 * 将 vue 组件 封装一下
 * todo: 扩展组件 props 中英文之类的
 * @param {*} comp 
 * @returns vue 组件
 */
function transformComToComp(comp) {
  const markdownObj = transformMdToObj(comp.__markdown)
  return {
    name: comp.name,
    render(h, ctx) {
      return h('DemoBox', {
        props: {
          title: markdownObj.title || '',
          jsCode: comp.__sourceCode || ''
        },
        scopedSlots: {
          content: props => h('div', {
            domProps: {
              innerHTML: marked.parse(markdownObj.content)
            },
          }),
          demo: props => h(comp, {
            class: {
              'demo-wrapper': true
            }
          })
        }
      })
    }
  }
}

function registerDemoComp(Vue) {
  const requireComponent = require.context('./', true, /\.vue$/)
  requireComponent.keys().forEach((ele) => {
    if (ele.includes('/demos/')) {
      const moduleObj = requireComponent(ele).default
      const comp = transformComToComp(moduleObj)
      Vue.component(moduleObj.name, comp)
    }
  })
}

function registerGlobComp(Vue) {
  const requireComponent = require.context('./', true, /register\.js$/)
  requireComponent.keys().forEach((ele) => {
    const { register } = requireComponent(ele)
    register(Vue)
  })
}

export default {
  install(Vue) {
    registerGlobComp(Vue)
    registerDemoComp(Vue)
  }
}