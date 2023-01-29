---
title: 树组件 vEasyTree
date: 2022-10-12 11:26:44
permalink: /pages/8b9fbf/
---

## 概述

树组件

## 代码演示

<VEasyTreeBasicDemo/>

## props

| 成员         | 说明                           | 类型     | 默认值    |
| ------------ | ------------------------------ | -------- | --------- |
| treeData     | 树的数据                       | array    | 无        |
| treeHeight   | 树区域的高度，用于虚拟滚动     | string   | 100%      |
| fields       | 配置选项，具体看下表           | object   |           |
| renderCount  | 自定义渲染显示 count 的方法    | function | undefined |
| selectedKeys | 选择节点的 key 值集合          | array    | 无        |
| checkable    | 是否显示复选框                 | boolean  | false     |
| isEdit       | 节点是否可被编辑               | boolean  | false     |
| isDelete     | 节点是否可被删除               | boolean  | false     |
| isDeploy     | 节点是否可被布控               | boolean  | false     |
| isSelect     | 节点是否显示勾选 icon          | boolean  | false     |
| isCount      | 节点是否显示数量               | boolean  | false     |
| showBrackets | isCount 为 true 时，是否显示() | boolean  | true      |

## fields

| 成员      | 说明       | 类型   | 默认值 |
| --------- | ---------- | ------ | ------ |
| label     | 节点名     | string |        |
| key       | 节点唯一值 | string |        |
| children  | 子节点     | array  |        |
| count     | 数量       | number |        |
| cascadeId | 级联 id    | string |        |

## 事件

| 事件名称 | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| edit     | 返回被编辑节点的数据 | item     |
| delete   | 返回被删除节点的数据 | item     |
| deploy   | 返回被布控节点的数据 | item     |

## 插槽

| 插槽 | 说明 | 回调参数 |
| ---- | ---- | -------- |
| 无   |      |

## 设计思路

该树的实现来自 element-ui 官方文档 https://element.eleme.cn/#/zh-CN/component/tree
需要使用虚拟滚动时，增加 treeHeight 属性，且必须设置 node-key

## 升级估算(vue2.6.10 -> vue3; 依赖)

升级 vue3 耗费成本 预估
升为 vue3 之后，可以直接使用 ant-design-vue 3 中的树组件，到时这个基于 element 的树组件将被废弃
