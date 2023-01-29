---
title: WatrixUI - wLeftCard
date: 2022-11-23 17:13:48
permalink: /pages/63e7f7/
---

## 概述

组件库里的卡片组件

## 代码演示
## props
### LeftCard 配置
| 成员                | 说明                                       | 类型                                  | 默认值       |
|-------------------|------------------------------------------|-------------------------------------|-----------|
| rowKey            | 主键                                       | String                              | featrueId |
| dataSource        | 数据源                                      | Array                               | []        |
| mainImgKey        | 主控图片地址                                   | String                              ||
| subImgKey         | 备用图片地址                                   | String                              ||
| defaultImg        | 图片加载失败显示的图片 有些地方需要特殊区别级联的情况              | String或者Function （feature）=> String |           |
| actions           | 卡片操作       参考actions配置                   | Array                               | []        |
| config            | 表单显示数据配置 参考config配置                      | Array                               | []        |
| changeConfig      | 用于进行配置修改                                 | Function                            ||
| ~~labelWidth~~    | 表单label的宽度                               | String                              | Number    |废弃|
| cardWidth         | 卡片宽度                                     | Number                              ||
| cardHeight        | 卡片高度                                     | Number                              ||
| emptyDescription  | 数据为空时的描述                                 | String                              ||
| showEmpty         | 是否显示空                                    | Boolean                             | 是         |
| enableCopy        | 是否允许双击拷贝所在行内容(复制内容取值为原来的值或者render函数返回的值) | Boolean                             | 是         |
| enableSelect      | 是否允许选择                                   | Boolean                             | 是         |
| enableHover       | 是否允许hover效果                              | Boolean                             | 是         |
| enableRead        | 是否允许显示已读效果                               | Boolean                             | 是         |
| showSequenceCount | 显示帧数                                     | Boolean                             | 是         |
| disabled          | 禁用                                       | Boolean                             | 是         |
| leftWidth         | 左侧宽度                                     | Nubmer                              | 100       |
### LeftCardItem 配置
| 成员                | 说明                                       | 类型       | 默认值       |
|-------------------|------------------------------------------|----------|-----------|
| rowKey            | 主键                                       | String   | featrueId |
| feature           | 数据源                                      | Object   | []        |
| mainImgKey        | 主控图片地址                                   | String   ||
| subImgKey         | 备用图片地址                                   | String   ||
| defaultImg        | 图片加载失败显示的图片 有些地方需要特殊区别级联的情况| String或者Function （feature）=> String |         |
| actions           | 卡片操作       参考actions配置                   | Array    | []        |
| config            | 表单显示数据配置 参考config配置                      | Array    | []        |
| changeConfig      | 用于进行配置修改                                 | Function ||
| copyable          | 是否允许双击拷贝所在行内容(复制内容取值为原来的值或者render函数返回的值) | Boolean  | 是         |
| disabled          | 禁用                                       | Boolean  | 是         |
| showSequenceCount | 显示帧数                                     | Boolean  | 是         |
| leftWidth         | 左侧宽度                                     | Nubmer                              | 100       |
#### config 配置
| 配置        | 说明                      | 类型 |默认值|
|-----------|-------------------------|--|---|
| label | 标签                  |String||
| key       | 键                       |String||
| click     | 点击事件           |Function(feature)||
| style     | 样式（包括icon和文字）           |Object||
| isShow    | 是否显示                    |Boolean||
| render    | 渲染             |Function(feature)||
| antdIcon  | 图标（使用antd-icon）         |String||
| iconfont  | 图标（使用iconfont）          |String||
| iconStyle | 图标样式                    |Object||
| copyValue | 配置特殊行的双击复制返回文字 |Function(feature)||
| enableCopy | 是否复制            |Boolean|true|
| textStyle | 文字样式                    |Object||
#### actions 配置

| 操作         | 说明        | 特殊说明 |
|------------|-----------|--|
| label      | 提示        | 无 |
| iconfont    | 图标        |  |
| antdIcon    | antd Icon |  |
| click     | 点击回调      | (feature)=>{} |
| auth       | 校验回调      | (feature)=>{ return false }  |

### 特殊状态说明

| 状态 | 说明 |
|--------|--------| 
| isSelected | 选择中 蓝色 |
| isBind | 绑定了 红色 |
## 事件

| 事件名称            | 说明              | 回调参数     | 
|-----------------|-----------------|----------|
| previewItem     | 预览              | feature  |
| selectItem    | 选择              | feature  |
| resetPagination | 重置页面个数返回最多请求的数目 | pageSize |


## 插槽

| 插槽                  | 说明                                    | 回调参数                        |
|---------------------|---------------------------------------|-----------------------------|
| action              | 卡片中按钮部分。可以在现有按钮的基础上追加新的按钮             | feature                     |
| actionLeft          | 卡片中按钮左边部分                             | feature                     |
| actionRight         | 卡片中按钮右边部分                             | feature                     |
| cardLeftBottom | 左下角浮动的按钮，用于添加一些已读、新增的标识               | feature                     |
| item                | 卡片整体，现有卡片不支持的情况下替换为自己的卡片(宽高采取100%的形式) | feature,index               |
| image               | 为空的图片显示                               |                             |
| content             | 表单部分插槽                                |                             |
| ${item.key}Value    | 表单部分插槽                                | feature dbCopy(对外暴露的双击拷贝方法) |
| ${item.key}Icon     | 表单部分图标插槽                              | feature dbCopy(对外暴露的双击拷贝方法) |

## 设计思路
优化现有卡片的业务逻辑混淆问题，集成卡片内容大小计算
1. 卡片使用请给出确定的宽和高，以便卡片内部计算出当前版面需要的最大卡片数量通过resetPagination回调出来；
2. 滚动已经集成在卡片内部，外部不需要重新设置;
3. 考虑到弹窗的多样性，卡片内部没有集成任何弹窗，需要各位在外部自己调用或者实现;
## todo(待优化)
1.卡片的action后期采取配置的方式，适应不同场景操作按钮的顺序及样式
