# @ai-component/hooks

AI Component 的自定义 React Hooks 库。

## 安装

```bash
pnpm add @ai-component/hooks
```

## 使用

```tsx
import { useLocalStorage, useDebounce } from "@ai-component/hooks";

function App() {
  const [name, setName] = useLocalStorage("name", "John");
  const debouncedName = useDebounce(name, 500);

  return <div>{debouncedName}</div>;
}
```

## Hooks 列表

- `useLocalStorage` - LocalStorage 状态管理
- `useDebounce` - 防抖处理
