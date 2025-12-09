# @ai-component/x

AI 业务专用组件库。

## 简介

X 是专为 AI 业务场景设计的组件库，提供常用的 AI 相关业务组件。

## 安装

```bash
npm install @ai-component/x
# 或
yarn add @ai-component/x
# 或
pnpm add @ai-component/x
```

## 使用

```tsx
import { ChatBox, PromptEditor } from "@ai-component/x";

function App() {
  return (
    <div>
      <ChatBox />
      <PromptEditor />
    </div>
  );
}
```

## 组件列表

### ChatBox 对话框

AI 对话界面组件，支持消息列表、输入框、发送等功能。

### PromptEditor 提示词编辑器

用于编辑和管理 AI 提示词的组件，支持变量、模板等功能。

## 开发

```bash
# 开发模式
pnpm dev

# 构建
pnpm build
```

## License

MIT
