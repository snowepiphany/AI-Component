import { ReactNode } from "react";

export interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
}

export interface ChatBoxProps {
  /** 消息列表 */
  messages?: Message[];
  /** 输入框占位符 */
  placeholder?: string;
  /** 是否显示加载状态 */
  loading?: boolean;
  /** 是否禁用输入 */
  disabled?: boolean;
  /** 发送按钮文本 */
  sendButtonText?: string;
  /** 发送消息回调 */
  onSend?: (message: string) => void;
  /** 自定义消息渲染 */
  renderMessage?: (message: Message) => ReactNode;
  /** 样式类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}
