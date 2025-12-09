---
title: ChatBox 对话框
description: AI 对话界面组件
group:
  title: AI 组件
  order: 1
---

# ChatBox 对话框

AI 对话界面组件，支持消息列表、输入框、发送等功能。

## 代码演示

<code src="./demo/basic.tsx"></code>

## API

### ChatBoxProps

| 参数           | 说明             | 类型                              | 默认值          |
| -------------- | ---------------- | --------------------------------- | --------------- |
| messages       | 消息列表         | `Message[]`                       | `[]`            |
| placeholder    | 输入框占位符     | `string`                          | `请输入消息...` |
| loading        | 是否显示加载状态 | `boolean`                         | `false`         |
| disabled       | 是否禁用输入     | `boolean`                         | `false`         |
| sendButtonText | 发送按钮文本     | `string`                          | `发送`          |
| onSend         | 发送消息回调     | `(message: string) => void`       | -               |
| renderMessage  | 自定义消息渲染   | `(message: Message) => ReactNode` | -               |
| className      | 样式类名         | `string`                          | -               |
| style          | 自定义样式       | `React.CSSProperties`             | -               |

### Message

| 参数      | 说明       | 类型                              |
| --------- | ---------- | --------------------------------- |
| id        | 消息 ID    | `string`                          |
| role      | 消息角色   | `user` \| `assistant` \| `system` |
| content   | 消息内容   | `string`                          |
| timestamp | 消息时间戳 | `number`                          |
