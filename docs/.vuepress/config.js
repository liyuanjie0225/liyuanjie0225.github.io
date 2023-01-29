import {
  defaultTheme,
  defineUserConfig
} from 'vuepress'
import {
  head,
  navbarZh,
  sidebarZh,
} from './configs/index.js'
import {
  searchPlugin
} from "@vuepress/plugin-search";

export default defineUserConfig({
  base: '/',
  head,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'CDoc',
      description: '组件文档'
    },
  },
  theme: defaultTheme({
    locales: {
      '/': {
        home: '/',
        navbar: navbarZh,
        sidebar: sidebarZh,
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        selectLanguageName: '简体中文',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // page meta
        lastUpdatedText: '上次更新',
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
    },
    themePlugins: {

    }
  }),
  plugins: [
    // 搜索
    searchPlugin(),
  ],
})