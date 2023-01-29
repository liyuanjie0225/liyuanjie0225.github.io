---
title: leftCard
date: 2022-10-09 11:27:21
permalink: /pages/d8b136/
---

## 概述

卡片组件

## 代码演示
<LeftCardBasicDemo/>
<LeftCardActionDemo/>
<LeftCardStyleDemo/>
<LeftCardSlotDemo/>
## props
### LeftCard 配置
| 成员               | 说明                                      | 类型       | 默认值       |
|------------------|-----------------------------------------|----------|-----------|
| rowKey           | 主键                                      | String   | featrueId |
| dataSource       | 数据源                                     | Array    | []        |
| mainImgKey       | 主控图片地址                                  | String   ||
| subImgKey        | 备用图片地址                                  | String   ||
| action           | 卡片操作       参考action配置                   | Object   | {}        |
| config           | 表单显示数据配置 参考config配置                     | Array    | []        |
| changeConfig     | 用于进行配置修改                                | Function ||
| ~~labelWidth~~   | 表单label的宽度                              | String   | Number    |废弃|
| cardWidth        | 卡片宽度                                    | Number   ||
| cardHeight       | 卡片高度                                    | Number   ||
| emptyDescription | 数据为空时的描述                                | String   ||
| showEmpty        | 是否显示空                                   | Boolean  | 是         |
| copyable         | 是否允许双击拷贝所在行内容(复制内容取值为原来的值或者render函数返回的值) | Boolean  | 是         |
| showSequenceCount         | 显示帧数                                     | Boolean  | 是         |
| disabled         | 禁用                                       | Boolean  | 是         |
### LeftCardItem 配置
| 成员               | 说明                                       | 类型       | 默认值       |
|------------------|------------------------------------------|----------|-----------|
| rowKey           | 主键                                       | String   | featrueId |
| feature          | 数据源                                      | Object   | []        |
| mainImgKey       | 主控图片地址                                   | String   ||
| subImgKey        | 备用图片地址                                   | String   ||
| action           | 卡片操作       参考action配置                    | Object   | {}        |
| config           | 表单显示数据配置 参考config配置                      | Array    | []        |
| changeConfig     | 用于进行配置修改                                 | Function ||
| copyable         | 是否允许双击拷贝所在行内容(复制内容取值为原来的值或者render函数返回的值) | Boolean  | 是         |
| disabled         | 禁用                                       | Boolean  | 是         |
| showSequenceCount         | 显示帧数                                     | Boolean  | 是         |
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
| copyabled | 是否复制            |Boolean|true|
| textStyle | 文字样式                    |Object||
#### action 配置

| 操作         | 说明     | 触发方法         | 特殊说明                              |
|------------|--------|--------------|-----------------------------------|
| hover      | hover  | 无            | 类型可以是boolean 或者 方法返回boolean 具体看例子 |
| preview    | 预览     | seeItem      | 同上                                |
| operate    | 重新检测   | operateItem  | 同上                                |
| select     | 是否可以选择 | selectChange | 同上                                |
| edit       | 编辑     | editItem     | 同上                                |
| confirm    | 追加目标   | confirmItem  | 同上                                |
| delete     | 删除目标   | deleteItem   | 同上                                |
| aligment   | 比对检索   | alignment    | 同上                                |
| repository | 保存地库   | saveItem     | 同上                                |
| path       | 查看轨迹   | pathItem     | 同上                                |
| local      | 定位     | localItem    | 同上                                |
### 特殊状态说明

| 状态 | 说明 |
|--------|--------| 
| isSelected | 选择中 蓝色 |
| isBind | 绑定了 红色 |
## 事件

| 事件名称            | 说明 | 回调参数     | 
|-----------------|--------|----------|
| seeItem         | 查看 | feature  |
| operateItem     | 重新检测 | feature  |
| selectChange    | 选择 | feature  |
| editItem        | 编辑 | feature  | 
| confirmItem     | 追加 | feature  | 
| deleteItem      | 删除 | feature  | 
| alignment       | 比对检索 | feature  |
| resetPagination | 重置页面个数返回最多请求的数目 | pageSize |


## 插槽

| 插槽                  | 说明                                    | 回调参数                        |
|---------------------|---------------------------------------|-----------------------------|
| action              | 卡片中按钮部分。可以在现有按钮的基础上追加新的按钮             | feature                     |
| topRightFloatButton | 右上角浮动的按钮，原版是删除按钮可以进行替换                | feature                     |
| item                | 卡片整体，现有卡片不支持的情况下替换为自己的卡片(宽高采取100%的形式) | feature,index               |
| image               | 为空的图片显示                               |                             |
| content             | 表单部分插槽                                |                             |
| ${item.key}Value             | 表单部分插槽                                | feature dbCopy(对外暴露的双击拷贝方法) |

## 设计思路
优化现有卡片的业务逻辑混淆问题，集成卡片内容大小计算
1. 卡片使用请给出确定的宽和高，以便卡片内部计算出当前版面需要的最大卡片数量通过resetPagination回调出来；
2. 滚动已经集成在卡片内部，外部不需要重新设置;
3. 考虑到弹窗的多样性，卡片内部没有集成任何弹窗，需要各位在外部自己调用或者实现;
## todo(待优化)
1.卡片的action后期采取配置的方式，适应不同场景操作按钮的顺序及样式
