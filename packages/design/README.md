# @ai-component/design

AI Component 的 UI 组件库，基于 Arco Design 封装。

## 安装

```bash
pnpm add @ai-component/design
```

## 使用

```tsx
import { Button, Input, Table } from "@ai-component/design";

function App() {
  return (
    <div>
      <Button type="primary">点击</Button>
      <Input placeholder="请输入" />
      <Table columns={columns} data={data} />
    </div>
  );
}
```

## 组件列表

- Button - 按钮组件
- Input - 输入框组件
- Table - 表格组件
