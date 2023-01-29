const fg = require('fast-glob')
const { resolve, join } = require('path')

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}

const docsPath = pathResolve('docs')

function genSidebarChildren(path, deep = 1, ignore = ['**/readme.md', '**/index.md']) {
  const pathArr = fg.sync('*.md', {
    onlyFiles: true, // 只匹配文件
    caseSensitiveMatch: false,  // 大小写不敏感
    ignore, // 忽略的文件格式
    dot: false, // 是否匹配以 . 开头的文件
    deep,
    cwd: join(docsPath, path)
  })
  return pathArr.map(item => `${path}${item}`)
}

const sidebarZh = {
  '/guide/': [
    {
      title: '指南',
      path: '/guide/',
      collapsable: false,
      children: genSidebarChildren('/guide/')
    }
  ],
  '/baseComponents/': [
    {
      title: '基础组件',
      path: '/baseComponents/',
      collapsable: false,
      children: genSidebarChildren('/baseComponents/')
    }
  ],
  '/businessComponents/': [
    {
      title: '业务组件',
      path: '/businessComponents/',
      collapsable: false,
      children: genSidebarChildren('/businessComponents/')
    }
  ]
}

module.exports = sidebarZh