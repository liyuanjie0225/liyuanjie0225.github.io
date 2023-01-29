const {
  head,
  navbarZh,
  sidebarZh,
} = require('./configs/index.js')
const path = require("path");
const docsLoader = require.resolve('./plugins/docsLoader.js')

module.exports = {
  theme: 'vdoing',
  title: "银河水滴组件库",
  base: '/',
  head,
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    category: false,
    tag: false,
    archive: false,
    titleBadge: false,
    updateBar: {
      showToArticle: false,
      moreArticle: ''
    },
    footer: { // 页脚信息
      createYear: 2022, // 博客创建年份
      copyrightInfo: 'watrix.ai | MIT License', // 博客版权信息，支持a标签
    },
    logo: '/images/watrix.png',
    pageStyle: 'line',
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    locales: {
      '/': {
        home: '/',
        nav: navbarZh,
        sidebar: sidebarZh,
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        selectLanguageName: '简体中文',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // page meta
        lastUpdated: '上次更新',
        contributors: false,
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
    }
  },
  chainWebpack (config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  },
  configureWebpack: {
    module: {
      rules: [
        {
          resourceQuery: /blockType=markdown/,
          loader: docsLoader,
        }
      ]
    }
  },
  plugins: [
    ['fulltext-search'],
    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img.zoom',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],
  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },
  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
  ],
}