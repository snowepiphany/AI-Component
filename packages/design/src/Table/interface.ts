import type { TableProps as ArcoTableProps } from "@arco-design/web-react";

export interface TableProps extends ArcoTableProps {
  /**
   * 表格列配置
   */
  columns?: any[];

  /**
   * 表格数据
   */
  data?: any[];

  /**
   * 是否显示边框
   * @default true
   */
  border?: boolean;

  /**
   * 是否显示斑马纹
   * @default false
   */
  stripe?: boolean;

  /**
   * 表格尺寸
   * @default 'default'
   */
  size?: "mini" | "small" | "default" | "middle";

  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean;
}
