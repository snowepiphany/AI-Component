import type { InputProps as ArcoInputProps } from "@arco-design/web-react";

export interface InputProps extends ArcoInputProps {
  /**
   * 输入框尺寸
   * @default 'default'
   */
  size?: "mini" | "small" | "default" | "large";

  /**
   * 输入框状态
   */
  status?: "warning" | "error";

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否只读
   * @default false
   */
  readOnly?: boolean;

  /**
   * 占位符
   */
  placeholder?: string;

  /**
   * 前缀元素
   */
  prefix?: React.ReactNode;

  /**
   * 后缀元素
   */
  suffix?: React.ReactNode;
}
