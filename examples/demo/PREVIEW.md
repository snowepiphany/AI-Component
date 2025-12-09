# AI Component 组件库预览

## 功能概述

这是一个基于 pnpm monorepo 的组件库预览系统，展示了 `packages` 目录下所有的组件和工具。

## 🧭 导航结构

### 🔝 顶部 Header - 包导航

顶部 Header 用于切换不同的包（package）：

- **组件库 (Design)** - UI 组件库
- **自定义 Hook (Hooks)** - React Hooks 工具集
- **工具函数 (Utils)** - 通用工具函数

### 📁 左侧 Sider - 内容导航

左侧 Sider 显示当前选中包下的具体内容：

- 选择 Design 包时，显示 Button、Input、Table 等组件
- 选择 Hooks 包时，显示 useLocalStorage、useDebounce 等 Hook
- 选择 Utils 包时，显示 formatDate、generateId 等工具函数

## 预览内容

### 📦 Design 组件库 (`@ai-component/design`)

1. **Button 按钮**

   - 基础按钮（Primary, Secondary, Dashed, Outline, Text）
   - 带图标的按钮
   - 不同尺寸（Mini, Small, Default, Large）
   - 不同状态（Warning, Danger, Success）
   - 禁用与加载状态
   - 不同形状（Square, Round, Circle）

2. **Input 输入框**

   - 基础输入框
   - 带前后缀的输入框
   - 不同尺寸
   - 不同状态（Warning, Error）
   - 禁用与只读状态

3. **Table 表格**
   - 基础表格
   - 带边框的表格
   - 斑马纹表格
   - 不同尺寸

### 🎣 Hooks (`@ai-component/hooks`)

1. **useLocalStorage** - 本地存储 Hook

   - 自动将状态同步到 LocalStorage
   - 刷新页面数据不会丢失
   - 示例：存储用户名

2. **useDebounce** - 防抖 Hook
   - 延迟更新值
   - 常用于搜索输入框
   - 减少请求次数

### 🛠️ Utils 工具函数 (`@ai-component/utils`)

1. **formatDate** - 日期格式化

   - 支持多种格式
   - 支持时间戳和 Date 对象
   - 格式示例：YYYY-MM-DD、HH:mm:ss 等

2. **generateId** - 生成唯一 ID
   - 生成指定长度的随机字符串
   - 默认长度为 8
   - 支持自定义长度

## 启动预览

```bash
# 启动开发服务器
pnpm dev

# 浏览器访问
http://localhost:3001
```

## 项目结构

```
examples/demo/
├── src/
│   ├── pages/           # 演示页面目录
│   │   ├── ButtonDemo.tsx
│   │   ├── InputDemo.tsx
│   │   ├── TableDemo.tsx
│   │   ├── hooks/      # Hooks 演示页面
│   │   │   ├── UseLocalStorageDemo.tsx
│   │   │   └── UseDebounceDemo.tsx
│   │   └── utils/      # Utils 演示页面
│   │       ├── FormatDateDemo.tsx
│   │       └── GenerateIdDemo.tsx
│   ├── App.tsx          # 主应用（Header + Sider 导航）
│   ├── App.css
│   └── main.tsx
└── package.json
```

## 特性

- ✅ 顶部 Header 导航，切换不同的包（Design、Hooks、Utils）
- ✅ 左侧 Sider 导航，显示当前包下的具体内容
- ✅ 每个项目都有详细的示例和说明
- ✅ 实时热更新（HMR）
- ✅ 展示所有组件的不同状态和用法
- ✅ 代码示例和使用场景说明
- ✅ 集成了 Arco Design 作为基础 UI 库

## 添加新内容

### 添加新的 Design 组件

1. 在 `packages/design/src/` 创建新组件
2. 在 `examples/demo/src/pages/` 创建对应的 Demo 页面
3. 在 `App.tsx` 的 `packageMenus.design` 中添加菜单项
4. 在 `renderContent` 函数中添加路由逻辑

### 添加新的 Hook

1. 在 `packages/hooks/src/` 创建新的 Hook
2. 在 `examples/demo/src/pages/hooks/` 创建演示页面
3. 在 `App.tsx` 的 `packageMenus.hooks` 中添加菜单项
4. 在 `renderContent` 函数中添加路由逻辑

### 添加新的工具函数

1. 在 `packages/utils/src/` 创建新的工具函数
2. 在 `examples/demo/src/pages/utils/` 创建演示页面
3. 在 `App.tsx` 的 `packageMenus.utils` 中添加菜单项
4. 在 `renderContent` 函数中添加路由逻辑

## 技术栈

- React 18
- TypeScript
- Vite
- Arco Design
- pnpm Workspace
