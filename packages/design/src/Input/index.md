---
title: Input 输入框
description: 基本表单组件，支持输入和编辑文本
group:
  title: 数据输入
  order: 2
---

# Input 输入框

基本表单组件，支持输入和编辑文本。

## 代码演示

<code src="./demo/basic.tsx"></code>

## API

### InputProps

| 参数        | 说明       | 类型                                      | 默认值    |
| ----------- | ---------- | ----------------------------------------- | --------- |
| size        | 输入框尺寸 | `mini` \| `small` \| `default` \| `large` | `default` |
| status      | 输入框状态 | `warning` \| `error`                      | -         |
| disabled    | 是否禁用   | `boolean`                                 | `false`   |
| readOnly    | 是否只读   | `boolean`                                 | `false`   |
| placeholder | 占位符     | `string`                                  | -         |
| prefix      | 前缀元素   | `ReactNode`                               | -         |
| suffix      | 后缀元素   | `ReactNode`                               | -         |
