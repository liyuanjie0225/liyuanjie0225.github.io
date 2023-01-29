---
title: Excel上传 excelUpload
date: 2022-10-19 09:59:59
permalink: /pages/d291af/
---

## 概述

Excel 上传抽屉组件

## 代码演示

<ExcelUploadBasicDemo/>

## props

| 成员         | 说明                                | 类型            | 默认值 |
| ------------ | ----------------------------------- | --------------- | ------ |
| visible      | 上传抽屉是否显示                    | boolean         | false  |
| limitSize    | 限制上传的 excel 的大小, 单位是 MB  | number          | 10     |
| uploadResult | 上传的结果                          | [Boolean, null] | 无     |
| errFile      | 上传失败的错位文件，二进制流        | string          | 无     |
| templateFile | 下载 excel 上传的模板文件，二进制流 | string          | 无     |

## 事件

| 事件名称         | 说明                              | 回调参数 |
| ---------------- | --------------------------------- | -------- |
| onClose          | 关闭抽屉                          | 无       |
| downloadTemplate | 点击按钮后，下载 excel 上传的模板 | 无       |
| uploadExcel      | 上传 excel                        | file     |

## 插槽

| 插槽 | 说明 | 回调参数 |
| ---- | ---- | -------- |
| 无   |      |

## 升级估算(vue2.6.10 -> vue3; 依赖)

升级 vue3 耗费成本 预估
