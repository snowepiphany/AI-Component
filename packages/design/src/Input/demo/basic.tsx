import React from "react";
import { Input } from "@ai-component/design";
import { Space } from "@arco-design/web-react";
import { IconSearch, IconUser } from "@arco-design/web-react/icon";

export default () => {
  return (
    <Space size="large" direction="vertical" style={{ width: "100%" }}>
      <Input placeholder="请输入内容" style={{ width: 350 }} />
      <Input placeholder="禁用状态" disabled style={{ width: 350 }} />
      <Input
        prefix={<IconUser />}
        suffix={<IconSearch />}
        placeholder="带前后缀"
        style={{ width: 350 }}
      />
      <Input.Password placeholder="请输入密码" style={{ width: 350 }} />
      <Input.TextArea
        placeholder="请输入多行文本"
        style={{ width: 350 }}
        rows={4}
      />
    </Space>
  );
};
