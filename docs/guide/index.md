---
title: 指南
date: 2022-09-14 18:41:52
permalink: /pages/4ac09a/
---
# 我是指南

### 提示及警告
::: tip
我是提示
:::

::: warning
我是注意
:::

::: danger 
我是警告
:::

::: details
我是详情
:::

### 代码块

<code-group>
  <code-block title="YARN" active>
  ```bash
  yarn install
  ```
  </code-block>

  <code-block title="CNPM">
  ```bash
  cnpm install
  ```
  </code-block>
</code-group>

### 代码块行高亮

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
