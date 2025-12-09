import type { ButtonProps as ArcoButtonProps } from "@arco-design/web-react";

export interface ButtonProps extends ArcoButtonProps {
  /**
   * 按钮类型
   * @default 'secondary'
   */
  type?: "primary" | "secondary" | "dashed" | "outline" | "text";

  /**
   * 按钮尺寸
   * @default 'default'
   */
  size?: "mini" | "small" | "default" | "large";

  /**
   * 按钮状态
   */
  status?: "warning" | "danger" | "success";

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean;

  /**
   * 按钮形状
   * @default 'square'
   */
  shape?: "circle" | "round" | "square";

  /**
   * 按钮图标
   */
  icon?: React.ReactNode;

  /**
   * 点击事件
   */
  onClick?: (e: Event) => void;
}
