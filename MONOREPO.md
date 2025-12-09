# Monorepo 架构说明

## 项目结构

```
AI-Component/
├── packages/                    # 所有包的目录
│   ├── design/                 # @ai-component/design - UI 组件库
│   │   ├── src/
│   │   │   ├── components/    # 组件目录
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   └── Table.tsx
│   │   │   └── index.tsx      # 主入口
│   │   ├── dist/              # 构建产物
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsup.config.ts     # tsup 构建配置
│   │
│   ├── hooks/                  # @ai-component/hooks - Hooks 库
│   │   ├── src/
│   │   │   ├── useLocalStorage.ts
│   │   │   ├── useDebounce.ts
│   │   │   └── index.ts
│   │   ├── dist/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsup.config.ts
│   │
│   └── utils/                  # @ai-component/utils - 工具库
│       ├── src/
│       │   └── index.ts       # 所有工具函数
│       ├── dist/
│       ├── package.json
│       ├── tsconfig.json
│       └── tsup.config.ts
│
├── examples/                    # 示例应用目录
│   └── demo/                   # @ai-component/demo - 演示应用
│       ├── src/
│       │   ├── App.tsx        # 主应用组件
│       │   ├── main.tsx       # 入口文件
│       │   ├── App.css
│       │   └── index.css
│       ├── index.html
│       ├── package.json       # 依赖本地 workspace 包
│       ├── tsconfig.json
│       └── vite.config.ts     # Vite 配置
│
├── pnpm-workspace.yaml         # pnpm workspace 配置
├── package.json                # 根 package.json
└── README.md                   # 项目说明
```

## 包的分类

### 1. **packages/design** - UI 组件库

基于 Arco Design 封装的 UI 组件集合。

**特点**：

- 统一管理所有 UI 组件（Button、Input、Table 等）
- 基于 tsup 构建，支持 ESM 和 CJS
- 可独立发布和版本管理

**使用**：

```tsx
import { Button, Input, Table } from "@ai-component/design";
```

### 2. **packages/hooks** - 自定义 Hooks 库

React 自定义 Hooks 集合。

**特点**：

- 提供常用的 React Hooks
- 无 UI 依赖，纯逻辑复用
- 可独立使用

**使用**：

```tsx
import { useLocalStorage, useDebounce } from "@ai-component/hooks";
```

### 3. **packages/utils** - 工具函数库

通用工具函数集合。

**特点**：

- 与框架无关的纯函数工具
- 无外部依赖
- 可在任何 JS/TS 项目中使用

**使用**：

```tsx
import { formatDate, generateId, debounce } from "@ai-component/utils";
```

### 4. **examples/demo** - 演示应用

展示所有组件和功能的示例应用。

**特点**：

- 基于 Vite + React
- 使用 workspace 协议引用本地包
- 用于开发测试和文档展示

## 包间依赖关系

```
examples/demo
  ├─> @ai-component/design (workspace:*)
  ├─> @ai-component/hooks (workspace:*)
  └─> @ai-component/utils (workspace:*)

@ai-component/design
  └─> @arco-design/web-react (peer)

@ai-component/hooks
  └─> react (peer)

@ai-component/utils
  └─> (无依赖)
```

## 构建流程

### 构建工具选择

- **packages/** - 使用 **tsup** 构建

  - 快速、零配置
  - 支持 TypeScript
  - 自动生成类型定义
  - 输出 ESM 和 CJS 格式

- **examples/** - 使用 **Vite** 开发和构建
  - 快速的开发服务器
  - 原生 ESM 支持
  - 适合应用开发

### 构建命令

```bash
# 构建所有包
pnpm build

# 并行开发模式（监听所有包的变化）
pnpm dev:packages

# 运行示例应用
pnpm dev

# 清理构建产物
pnpm clean
```

## Workspace 配置

### pnpm-workspace.yaml

```yaml
packages:
  - "packages/*"
  - "examples/*"
```

### 包引用方式

在 `examples/demo/package.json` 中：

```json
{
  "dependencies": {
    "@ai-component/design": "workspace:*",
    "@ai-component/hooks": "workspace:*",
    "@ai-component/utils": "workspace:*"
  }
}
```

`workspace:*` 表示使用工作区内的最新版本。

## 优势

### 1. **代码复用**

- 组件、Hooks、工具函数分离，各自独立维护
- 减少重复代码

### 2. **版本管理**

- 每个包可以独立版本控制
- 使用 Changesets 进行版本管理和发布

### 3. **开发效率**

- 本地包即时热更新
- 无需 npm link
- 统一的依赖管理

### 4. **类型安全**

- TypeScript 全链路支持
- 跨包类型推断

### 5. **独立发布**

- 每个包可以单独发布到 npm
- 用户可以按需安装

## 发布流程

```bash
# 1. 创建变更集
pnpm changeset

# 2. 更新版本
pnpm change:version

# 3. 发布到 npm
pnpm release
```

## 开发建议

### 添加新组件

1. 在对应的包中添加代码
2. 导出组件/函数
3. 在 demo 中测试
4. 构建并发布

### 包的职责划分

- **design**: UI 相关的组件
- **hooks**: React Hooks
- **utils**: 纯函数工具
- **其他**: 可以根据需要添加更多包（如 icons、themes 等）

## 注意事项

1. **peer dependencies**: 避免在包中安装 React 等共享依赖
2. **构建顺序**: 如果包之间有依赖，需要按顺序构建
3. **类型导出**: 确保导出 TypeScript 类型定义
4. **README**: 每个包都应该有独立的 README

## 未来扩展

可以考虑添加更多包：

- `packages/icons` - 图标库
- `packages/themes` - 主题系统
- `packages/cli` - CLI 工具
- `packages/config` - 共享配置
