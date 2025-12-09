# @ai-component/utils

AI Component 的工具函数库。

## 安装

```bash
pnpm add @ai-component/utils
```

## 使用

```tsx
import {
  formatDate,
  generateId,
  deepClone,
  debounce,
  throttle,
} from "@ai-component/utils";

// 格式化日期
const formattedDate = formatDate(new Date(), "YYYY-MM-DD");

// 生成随机 ID
const id = generateId(10);

// 深拷贝对象
const cloned = deepClone({ a: 1, b: { c: 2 } });

// 防抖
const debouncedFn = debounce(() => console.log("debounced"), 500);

// 节流
const throttledFn = throttle(() => console.log("throttled"), 500);
```

## 工具函数列表

- `formatDate` - 日期格式化
- `generateId` - 生成随机 ID
- `deepClone` - 深拷贝对象
- `debounce` - 防抖函数
- `throttle` - 节流函数
