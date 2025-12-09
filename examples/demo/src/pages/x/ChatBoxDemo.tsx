import React, { useState } from "react";
import {
  Card,
  Typography,
  Divider,
  Table,
  Space,
} from "@arco-design/web-react";
import { ChatBox, Message } from "@ai-component/x";
import { generateId } from "@ai-component/utils";

const { Title, Paragraph } = Typography;

export default function ChatBoxDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateId(),
      role: "assistant",
      content: "你好！我是 AI 助手，有什么可以帮助你的吗？",
      timestamp: Date.now() - 60000,
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = (content: string) => {
    // 添加用户消息
    const userMessage: Message = {
      id: generateId(),
      role: "user",
      content,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // 模拟 AI 回复
    setLoading(true);
    setTimeout(() => {
      const aiMessage: Message = {
        id: generateId(),
        role: "assistant",
        content: `收到你的消息："${content}"。这是一个模拟回复。`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1500);
  };

  const apiColumns = [
    {
      title: "参数",
      dataIndex: "param",
      width: 150,
    },
    {
      title: "说明",
      dataIndex: "description",
      width: 200,
    },
    {
      title: "类型",
      dataIndex: "type",
    },
    {
      title: "默认值",
      dataIndex: "default",
      width: 120,
    },
  ];

  const apiData = [
    {
      key: "1",
      param: "messages",
      description: "消息列表",
      type: "Message[]",
      default: "[]",
    },
    {
      key: "2",
      param: "placeholder",
      description: "输入框占位符",
      type: "string",
      default: "请输入消息...",
    },
    {
      key: "3",
      param: "loading",
      description: "是否显示加载状态",
      type: "boolean",
      default: "false",
    },
    {
      key: "4",
      param: "disabled",
      description: "是否禁用输入",
      type: "boolean",
      default: "false",
    },
    {
      key: "5",
      param: "sendButtonText",
      description: "发送按钮文本",
      type: "string",
      default: "发送",
    },
    {
      key: "6",
      param: "onSend",
      description: "发送消息回调",
      type: "(message: string) => void",
      default: "-",
    },
    {
      key: "7",
      param: "renderMessage",
      description: "自定义消息渲染",
      type: "(message: Message) => ReactNode",
      default: "-",
    },
    {
      key: "8",
      param: "className",
      description: "样式类名",
      type: "string",
      default: "-",
    },
    {
      key: "9",
      param: "style",
      description: "自定义样式",
      type: "React.CSSProperties",
      default: "-",
    },
  ];

  const messageColumns = [
    {
      title: "参数",
      dataIndex: "param",
      width: 150,
    },
    {
      title: "说明",
      dataIndex: "description",
      width: 200,
    },
    {
      title: "类型",
      dataIndex: "type",
    },
  ];

  const messageData = [
    {
      key: "1",
      param: "id",
      description: "消息 ID",
      type: "string",
    },
    {
      key: "2",
      param: "role",
      description: "消息角色",
      type: '"user" | "assistant" | "system"',
    },
    {
      key: "3",
      param: "content",
      description: "消息内容",
      type: "string",
    },
    {
      key: "4",
      param: "timestamp",
      description: "消息时间戳",
      type: "number",
    },
  ];

  return (
    <div>
      <Title heading={2}>ChatBox 对话框</Title>
      <Paragraph>AI 对话界面组件，支持消息列表、输入框、发送等功能。</Paragraph>

      <Divider />

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Card title="基础用法" bordered>
          <ChatBox messages={messages} onSend={handleSend} loading={loading} />
        </Card>

        <Card title="API" bordered>
          <Title heading={4} style={{ marginTop: 0 }}>
            ChatBoxProps
          </Title>
          <Table
            columns={apiColumns}
            data={apiData}
            pagination={false}
            border
          />

          <Title heading={4} style={{ marginTop: 24 }}>
            Message
          </Title>
          <Table
            columns={messageColumns}
            data={messageData}
            pagination={false}
            border
          />
        </Card>
      </Space>
    </div>
  );
}
