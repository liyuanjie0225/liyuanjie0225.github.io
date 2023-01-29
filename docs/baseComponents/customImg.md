---
title: 图片 CustomImg
date: 2022-09-14 18:41:52
permalink: /pages/5a8795/
---
## 概述
我是组件的基本描述

## 代码演示

<CustomImgBaseDemo />

<CustomImgLoadingDemo />

## props
| 参数  | 说明  | 类型  | 默认值  |
| :------------ | :------------ | :------------ | :------------ |
| loading  | 加载过程中占位图片地址  | string  |   |
| error  | 加载失败展示图片地址  | string  |   |
| mainImg  | 优先展示的图片地址  | string  |   |
| subImg  | mainImg 加载失败会尝试加载第二展示的图片地址  | string  |   |

## 事件
| 事件名称  | 说明  | 回调函数  |
| :------------ | :------------ | :------------ |
| click  | 点击时回调  | function  |
| renderFinish  | 加载结束时回调  | function(isLoadSuccess)  |
| updateUrl | 加载成功时回调  | function(loadSuccessImgUrl)  |

## 插槽
无

## 设计思路
* 当组件实例化后，根据 loading -> mainImg -> subImg 的顺序加载对应地址的图片

## todo(待优化)
* 重试次数通过 prop 传入
* 宽高，通过 prop 传入

## 升级估算(vue2.6.10 -> vue3; 依赖)
升级 vue3 耗费成本 预估