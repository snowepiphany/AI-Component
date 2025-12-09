# AI Component Monorepo

基于 pnpm + monorepo 架构的 React 组件库。

## 项目结构

```
AI-Component/
├── packages/
│   ├── design/          # UI 组件库
│   ├── hooks/           # 自定义 React Hooks
│   └── utils/           # 工具函数库
├── examples/
│   └── demo/            # 示例应用
└── scripts/             # 脚本工具
```

## 包说明

### @ai-component/design

UI 组件库，基于 Arco Design 封装。

- Button - 按钮组件
- Input - 输入框组件
- Table - 表格组件

### @ai-component/hooks

自定义 React Hooks 库。

- useLocalStorage - LocalStorage 状态管理
- useDebounce - 防抖处理

### @ai-component/utils

通用工具函数库。

- formatDate - 日期格式化
- generateId - 生成随机 ID
- deepClone - 深拷贝对象
- debounce - 防抖函数
- throttle - 节流函数

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 构建所有包

```bash
pnpm build
```

### 运行示例应用

```bash
pnpm dev
```

### 并行开发模式（监听所有包的变化）

```bash
pnpm dev:packages
```

### 清理构建产物

```bash
pnpm clean
```

## 开发指南

### 添加新组件

1. 在 `packages/design/src/components/` 下创建新组件
2. 在 `packages/design/src/index.tsx` 中导出
3. 运行 `pnpm build` 构建

### 添加新 Hook

1. 在 `packages/hooks/src/` 下创建新 Hook
2. 在 `packages/hooks/src/index.ts` 中导出
3. 运行 `pnpm build` 构建

### 添加新工具函数

1. 在 `packages/utils/src/index.ts` 中添加新函数
2. 运行 `pnpm build` 构建

## 版本管理

使用 Changesets 进行版本管理：

```bash
# 创建变更集
pnpm changeset

# 更新版本
pnpm change:version

# 发布
pnpm release
```

## 技术栈

- **包管理器**: pnpm
- **构建工具**: tsup, vite
- **UI 框架**: React 18
- **组件库**: Arco Design
- **语言**: TypeScript
- **版本管理**: Changesets

## License

MIT
