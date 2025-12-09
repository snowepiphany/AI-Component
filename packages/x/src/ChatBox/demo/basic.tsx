import React, { useState } from "react";
import { ChatBox, Message } from "@ai-component/x";
import { generateId } from "@ai-component/utils";

export default () => {
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

  return <ChatBox messages={messages} onSend={handleSend} loading={loading} />;
};
