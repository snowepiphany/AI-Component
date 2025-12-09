---
title: Button 按钮
description: 按钮用于开始一个即时操作
group:
  title: 通用
  order: 1
---

# Button 按钮

按钮用于开始一个即时操作。

## 代码演示

<code src="./demo/basic.tsx"></code>

## API

### ButtonProps

| 参数     | 说明           | 类型                                                        | 默认值      |
| -------- | -------------- | ----------------------------------------------------------- | ----------- |
| type     | 按钮类型       | `primary` \| `secondary` \| `dashed` \| `outline` \| `text` | `secondary` |
| size     | 按钮尺寸       | `mini` \| `small` \| `default` \| `large`                   | `default`   |
| status   | 按钮状态       | `warning` \| `danger` \| `success`                          | -           |
| disabled | 是否禁用       | `boolean`                                                   | `false`     |
| loading  | 是否加载中     | `boolean`                                                   | `false`     |
| icon     | 设置按钮的图标 | `ReactNode`                                                 | -           |
| shape    | 按钮形状       | `circle` \| `round` \| `square`                             | `square`    |
| onClick  | 点击事件       | `(e: React.MouseEvent) => void`                             | -           |
