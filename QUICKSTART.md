# 快速开始指南

## 🚀 项目已成功转换为 Monorepo 架构！

### 📦 包结构

```
packages/
├── design/    # @ai-component/design - UI 组件库
├── hooks/     # @ai-component/hooks - 自定义 Hooks
└── utils/     # @ai-component/utils - 工具函数库

examples/
└── demo/      # 示例应用
```

### ⚡️ 快速命令

```bash
# 安装所有依赖
pnpm install

# 构建所有包
pnpm build

# 启动示例应用（推荐）
pnpm dev

# 或者：并行开发所有包（watch 模式）
pnpm dev:packages

# 清理构建产物
pnpm clean
```

### 🎯 开发工作流

#### 1. 修改组件库代码

```bash
# 修改 packages/design/src/components/Button.tsx
# 然后运行构建
pnpm build

# 或者开启 watch 模式
cd packages/design
pnpm dev
```

#### 2. 添加新组件

```tsx
// packages/design/src/components/NewComponent.tsx
export const NewComponent = () => {
  return <div>New Component</div>;
};

// packages/design/src/index.tsx
export { NewComponent } from "./components/NewComponent";
```

#### 3. 在示例应用中使用

```tsx
// examples/demo/src/App.tsx
import { NewComponent } from "@ai-component/design";

function App() {
  return <NewComponent />;
}
```

### 📝 各包说明

#### @ai-component/design

- **内容**: Button, Input, Table 等 UI 组件
- **构建**: `cd packages/design && pnpm build`
- **依赖**: Arco Design

#### @ai-component/hooks

- **内容**: useLocalStorage, useDebounce 等 Hooks
- **构建**: `cd packages/hooks && pnpm build`
- **依赖**: React

#### @ai-component/utils

- **内容**: formatDate, generateId, debounce, throttle 等工具函数
- **构建**: `cd packages/utils && pnpm build`
- **依赖**: 无外部依赖

### 🔄 版本发布

```bash
# 1. 创建变更集（记录改动）
pnpm changeset

# 2. 更新版本号
pnpm change:version

# 3. 发布到 npm
pnpm release
```

### 📚 更多文档

- 详细架构说明: [MONOREPO.md](./MONOREPO.md)
- 项目说明: [README.md](./README.md)

### ✅ 验证安装

运行以下命令验证一切正常：

```bash
# 1. 安装依赖
pnpm install

# 2. 构建所有包
pnpm build

# 3. 启动示例应用
pnpm dev
```

如果看到示例应用在浏览器中打开，说明 monorepo 架构配置成功！

### 🎉 下一步

1. ✅ 所有包已构建完成
2. ✅ workspace 依赖已正确链接
3. ✅ 示例应用已配置完成
4. 🚀 运行 `pnpm dev` 查看效果
5. 📦 根据需要添加更多组件到对应的包中

### 💡 提示

- 使用 `workspace:*` 协议引用本地包
- 包之间的修改会自动同步
- 每个包可以独立发布
- 建议使用 Changesets 管理版本
