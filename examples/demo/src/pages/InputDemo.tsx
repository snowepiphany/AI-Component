import { useState } from "react";
import { Input } from "@ai-component/design";
import { Space, Card, Typography } from "@arco-design/web-react";
import { IconSearch, IconUser, IconEmail } from "@arco-design/web-react/icon";

const { Title, Paragraph } = Typography;

export default function InputDemo() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div>
      <Title heading={2}>Input 输入框</Title>
      <Paragraph>基本表单组件，支持输入和编辑文本。</Paragraph>

      <Card title="基础输入框" style={{ marginBottom: 24 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input
            placeholder="请输入内容"
            value={value1}
            onChange={setValue1}
            style={{ width: 400 }}
          />
          <div style={{ color: "#666" }}>输入的值: {value1}</div>
        </Space>
      </Card>

      <Card title="带前后缀的输入框" style={{ marginBottom: 24 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input
            placeholder="搜索"
            prefix={<IconSearch />}
            value={value2}
            onChange={setValue2}
            style={{ width: 400 }}
          />
          <Input
            placeholder="用户名"
            prefix={<IconUser />}
            style={{ width: 400 }}
          />
          <Input
            placeholder="邮箱"
            prefix={<IconEmail />}
            style={{ width: 400 }}
          />
        </Space>
      </Card>

      <Card title="输入框尺寸" style={{ marginBottom: 24 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input size="mini" placeholder="Mini" style={{ width: 400 }} />
          <Input size="small" placeholder="Small" style={{ width: 400 }} />
          <Input size="default" placeholder="Default" style={{ width: 400 }} />
          <Input size="large" placeholder="Large" style={{ width: 400 }} />
        </Space>
      </Card>

      <Card title="输入框状态" style={{ marginBottom: 24 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input
            status="warning"
            placeholder="Warning"
            style={{ width: 400 }}
          />
          <Input status="error" placeholder="Error" style={{ width: 400 }} />
        </Space>
      </Card>

      <Card title="禁用与只读">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input
            disabled
            placeholder="Disabled"
            value="禁用状态"
            style={{ width: 400 }}
          />
          <Input
            readOnly
            placeholder="ReadOnly"
            value="只读状态"
            style={{ width: 400 }}
          />
        </Space>
      </Card>
    </div>
  );
}
