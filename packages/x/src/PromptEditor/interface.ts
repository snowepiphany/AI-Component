import { ReactNode } from "react";

export interface Variable {
  key: string;
  label: string;
  defaultValue?: string;
}

export interface PromptEditorProps {
  /** 提示词内容 */
  value?: string;
  /** 变量列表 */
  variables?: Variable[];
  /** 是否只读 */
  readOnly?: boolean;
  /** 占位符 */
  placeholder?: string;
  /** 内容变化回调 */
  onChange?: (value: string) => void;
  /** 变量点击回调 */
  onVariableClick?: (variable: Variable) => void;
  /** 自定义变量渲染 */
  renderVariable?: (variable: Variable) => ReactNode;
  /** 样式类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}
