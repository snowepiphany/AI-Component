---
title: Table 表格
description: 展示行列数据
group:
  title: 数据展示
  order: 3
---

# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 代码演示

<code src="./demo/basic.tsx"></code>

## API

### TableProps

| 参数    | 说明           | 类型                                      | 默认值    |
| ------- | -------------- | ----------------------------------------- | --------- |
| columns | 表格列配置     | `ColumnProps[]`                           | -         |
| data    | 表格数据       | `any[]`                                   | -         |
| border  | 是否显示边框   | `boolean`                                 | `true`    |
| stripe  | 是否显示斑马纹 | `boolean`                                 | `false`   |
| size    | 表格尺寸       | `mini` \| `small` \| `default` \| `large` | `default` |
| loading | 是否加载中     | `boolean`                                 | `false`   |
