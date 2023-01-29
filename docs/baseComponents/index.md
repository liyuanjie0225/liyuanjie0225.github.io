---
title: 基础组件
date: 2022-09-15 13:49:32
permalink: /pages/1f9b10/
---

## demo 组件格式

```vue
<markdown>
# 我是代码演示的标题
我是代码演示的描述信息，我们支持 markdown 语法
</markdown>

<template>
  <div>
    你好, 我是组件实例
  </div>
</template>
```
## 效果
<DemoBox title="我是代码演示的标题" jsCode="<template>
  <div>
    你好, 我是组件实例
  </div>
</template>">
<div slot="content">
  我是代码演示的描述信息，我们支持 markdown 语法
</div>
<div class="demo-wrapper" slot="demo">
  你好, 我是组件实例
</div>
</DemoBox>