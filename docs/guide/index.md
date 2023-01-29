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

:::: code-group


::: code-group-item YARN

``` ts
yarn install

```

:::


::: code-group-item CNPM

``` ts
cnpm install

```

:::


::::

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

### 从文件中读取代码
@[code](./demo.vue)
