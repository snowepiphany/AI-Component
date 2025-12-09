---
title: PromptEditor 提示词编辑器
description: 用于编辑和管理 AI 提示词的组件
group:
  title: AI 组件
  order: 2
---

# PromptEditor 提示词编辑器

用于编辑和管理 AI 提示词的组件，支持变量、模板等功能。

## 代码演示

<code src="./demo/basic.tsx"></code>

## API

### PromptEditorProps

| 参数            | 说明           | 类型                                | 默认值            |
| --------------- | -------------- | ----------------------------------- | ----------------- |
| value           | 提示词内容     | `string`                            | -                 |
| variables       | 变量列表       | `Variable[]`                        | `[]`              |
| readOnly        | 是否只读       | `boolean`                           | `false`           |
| placeholder     | 占位符         | `string`                            | `请输入提示词...` |
| onChange        | 内容变化回调   | `(value: string) => void`           | -                 |
| onVariableClick | 变量点击回调   | `(variable: Variable) => void`      | -                 |
| renderVariable  | 自定义变量渲染 | `(variable: Variable) => ReactNode` | -                 |
| className       | 样式类名       | `string`                            | -                 |
| style           | 自定义样式     | `React.CSSProperties`               | -                 |

### Variable

| 参数         | 说明     | 类型     |
| ------------ | -------- | -------- |
| key          | 变量键名 | `string` |
| label        | 变量标签 | `string` |
| defaultValue | 默认值   | `string` |
