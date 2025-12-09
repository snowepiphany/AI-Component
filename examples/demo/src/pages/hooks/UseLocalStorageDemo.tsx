import { Input } from "@ai-component/design";
import { useLocalStorage } from "@ai-component/hooks";
import { Card, Typography, Space, Tag, Alert } from "@arco-design/web-react";

const { Title, Paragraph } = Typography;

export default function UseLocalStorageDemo() {
  const [name, setName] = useLocalStorage("userName", "");

  return (
    <div>
      <Title heading={2}>useLocalStorage</Title>
      <Paragraph>
        自动将状态同步到 LocalStorage，刷新页面数据不会丢失。
      </Paragraph>

      <Alert
        type="info"
        content="useLocalStorage 是一个自定义 Hook，可以像使用 useState 一样使用，但数据会自动持久化到浏览器的 LocalStorage 中。"
        style={{ marginBottom: 24 }}
      />

      <Card title="基础用法" style={{ marginBottom: 24 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Paragraph>
            输入内容后会自动保存到 LocalStorage，刷新页面数据依然存在。
          </Paragraph>
          <Input
            placeholder="请输入姓名（会自动存储到 LocalStorage）"
            value={name}
            onChange={setName}
            style={{ width: 400 }}
          />
          <div>
            <Tag color="blue">当前存储的值: {name || "(空)"}</Tag>
          </div>
          <Paragraph type="secondary">
            💡 提示：输入内容后刷新页面，数据依然存在
          </Paragraph>
        </Space>
      </Card>

      <Card title="代码示例">
        <pre
          style={{
            backgroundColor: "#f7f8fa",
            padding: 16,
            borderRadius: 4,
            overflow: "auto",
          }}
        >
          {`import { useLocalStorage } from "@ai-component/hooks";

function MyComponent() {
  // 第一个参数是 localStorage 的 key
  // 第二个参数是默认值
  const [name, setName] = useLocalStorage("userName", "");

  return (
    <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
    />
  );
}`}
        </pre>
      </Card>

      <Card title="API" style={{ marginTop: 24 }}>
        <Title heading={4}>useLocalStorage</Title>
        <Paragraph type="secondary" style={{ marginTop: 8, marginBottom: 16 }}>
          useLocalStorage(key: string, initialValue: T): [T, (value: T) =&gt;
          void]
        </Paragraph>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
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
                <code>key</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                localStorage 的键名
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
                <code>initialValue</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                初始值
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>T</code>
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
        <Title heading={5} style={{ marginTop: 24 }}>
          返回值
        </Title>
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
                <code>[0]</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                当前存储的值
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>T</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>[1]</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                更新值的函数
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>(value: T) =&gt; void</code>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
