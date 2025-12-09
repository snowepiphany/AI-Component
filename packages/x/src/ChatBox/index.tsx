import React, { useState } from "react";
import { Input, Button, Space, Card } from "@arco-design/web-react";
import { IconSend } from "@arco-design/web-react/icon";
import type { ChatBoxProps, Message } from "./interface";
import "./index.css";

const ChatBox: React.FC<ChatBoxProps> = (props) => {
  const {
    messages = [],
    placeholder = "请输入消息...",
    loading = false,
    disabled = false,
    sendButtonText = "发送",
    onSend,
    renderMessage,
    className,
    style,
  } = props;

  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim() || loading || disabled) return;
    onSend?.(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const defaultRenderMessage = (message: Message) => {
    const isUser = message.role === "user";
    return (
      <div
        key={message.id}
        style={{
          display: "flex",
          justifyContent: isUser ? "flex-end" : "flex-start",
          marginBottom: 16,
        }}
      >
        <Card
          style={{
            maxWidth: "70%",
            backgroundColor: isUser ? "#165dff" : "#f7f8fa",
            color: isUser ? "#fff" : "#1d2129",
          }}
          bordered={false}
        >
          <div style={{ whiteSpace: "pre-wrap" }}>{message.content}</div>
          <div
            style={{
              fontSize: 12,
              marginTop: 8,
              opacity: 0.7,
            }}
          >
            {new Date(message.timestamp).toLocaleTimeString()}
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className={`ai-chatbox ${className || ""}`} style={style}>
      <div className="ai-chatbox-messages">
        {messages.map((msg) =>
          renderMessage ? renderMessage(msg) : defaultRenderMessage(msg)
        )}
        {loading && (
          <div style={{ textAlign: "center", color: "#86909c" }}>
            AI 正在思考中...
          </div>
        )}
      </div>
      <div className="ai-chatbox-input">
        <Space style={{ width: "100%" }}>
          <Input.TextArea
            placeholder={placeholder}
            value={inputValue}
            onChange={setInputValue}
            onKeyPress={handleKeyPress}
            disabled={disabled || loading}
            autoSize={{ minRows: 1, maxRows: 4 }}
            style={{ flex: 1 }}
          />
          <Button
            type="primary"
            icon={<IconSend />}
            onClick={handleSend}
            loading={loading}
            disabled={disabled || !inputValue.trim()}
          >
            {sendButtonText}
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default ChatBox;
export type { ChatBoxProps, Message };
