---
title: rightCard
date: 2022-10-09 11:59:04
permalink: /pages/fbc731/
---
## 概述

小卡片组件

## 代码演示
<RightCardBasicDemo/>
## props
### RightCard 配置
| 成员               | 说明        | 类型      | 默认值    |
|------------------|-----------|---------|--------|
| rowKey           | 主键        | String  | featrueId |
| dataSource       | 数据源       | Array   | []     |
| mainImgKey       | 主控图片地址    | String  ||
| subImgKey        | 备用图片地址    | String  ||
| config           | 表单显示数据配置 参考config配置 | Array   ||
| cardWidth        | 卡片宽度      | Number  ||
| cardHeight       | 卡片高度      | Number  ||
| emptyDescription | 数据为空时的描述  | String  ||
| showEmpty        | 是否显示空     | Boolean | 是      |
| isHover          | 是否显示悬浮卡片  | Boolean | 是      |
| hoverCardWidth   | 悬浮卡片宽度    | Number  |        |
| hoverCardWidth   | 悬浮卡片高度    | Number |        |
### RightCardItem 配置
| 成员            | 说明                                       | 类型     | 默认值    |
|---------------|------------------------------------------|--------|--------|
| feature       | 数据源                                      | Object |        |
| mainImg       | 主控图片地址                                   | String ||
| subImg        | 备用图片地址                                   | String ||
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

### 特殊状态说明

| 状态 | 说明 |
|--------|--------| 
| isSelected | 选择中 蓝色 |
| isBind | 绑定了 红色 |
## 事件

| 事件名称            | 说明              | 回调参数     | 
|-----------------|-----------------|----------|
| resetPagination | 重置页面个数返回最多请求的数目 | pageSize |
| selectItem      | 选择项目            | feature  |



## 插槽

| 插槽               | 说明     | 回调参数                        |
|------------------|--------|-----------------------------|
| action           | 底部的按钮  | feature                     |
| bottom           | 底部的东西  | feature                     |
| ${item.key}Value | 表单部分插槽 | feature dbCopy(对外暴露的双击拷贝方法) |

## 设计思路
优化现有卡片的业务逻辑混淆问题，集成卡片内容大小计算
1. 卡片使用请给出确定的宽和高，以便卡片内部计算出当前版面需要的最大卡片数量通过resetPagination回调出来；
2. rightCardList滚动已经集成在卡片内部，外部不需要重新设置，rightCard不具备滚动;
3. 考虑到弹窗的多样性，卡片内部没有集成任何弹窗，需要各位在外部自己调用或者实现;
## todo(待优化)
