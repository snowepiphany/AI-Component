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

      <Card title="API" style={{ marginTop: 24 }}>
        <Title heading={4}>InputProps</Title>
        <table
          style={{ width: "100%", borderCollapse: "collapse", marginTop: 16 }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f7f8fa" }}>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                参数
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                说明
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                类型
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                默认值
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>size</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                输入框尺寸
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>mini | small | default | large</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>default</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>status</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                输入框状态
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>warning | error</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>disabled</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                是否禁用
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>boolean</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>readOnly</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                是否只读
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>boolean</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>placeholder</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                占位符
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>string</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>prefix</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                前缀元素
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>ReactNode</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>suffix</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                后缀元素
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>ReactNode</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>value</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                输入框值
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>string</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>onChange</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                值变化时的回调
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>(value: string) =&gt; void</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                -
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
