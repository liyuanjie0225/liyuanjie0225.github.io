---
title: 目录结构
date: 2022-09-22 10:18:44
permalink: /pages/983f05/
---
# 目录结构

```md
.
├─packages
|    ├─utils	// 存放工具函数
|    |   └readme.md
|    ├─components	// 存放组件目录
|    |     ├─global.js	// 注册组件
|    |     ├─MasterVideo	// 组件
|    |     |      ├─register.js	// 当前组件暴露出哪些组件
|    |     |      ├─tests	// 组件测试文件
|    |     |      |   └readme.md
|    |     |      ├─src	// 组件源码
|    |     |      |  └index.vue
|    |     |      ├─demos	// 组件demo
|    |     |      |   └MasterVideoDemo.vue
|    |     ├─CustomImg
|    |     |     ├─register.js
|    |     |     ├─tests
|    |     |     |   └readme.md
|    |     |     ├─src
|    |     |     |  └index.vue
|    |     |     ├─demos
|    |     |     |   ├─baseDemo.vue
|    |     |     |   ├─loading.gif
|    |     |     |   └loadingDemo.vue
├─docs
|  ├─index.md
|  ├─reference
|  |     └index.md
|  ├─plan
|  |  └index.md
|  ├─guide
|  |   ├─demo.vue
|  |   └index.md
|  ├─businessComponents	// 业务组件文档存放目录
|  |         └index.md
|  ├─baseComponents	// 基础组件文档存放目录
|  |       ├─customImg.md
|  |       ├─index.md
|  |       └masterVideo.md
├─.vscode
|    ├─launch.json
|    └settings.json
```