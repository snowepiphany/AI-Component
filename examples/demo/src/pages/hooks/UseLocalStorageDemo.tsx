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
    </div>
  );
}
