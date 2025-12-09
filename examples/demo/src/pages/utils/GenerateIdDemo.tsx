import { useState } from "react";
import { Button } from "@ai-component/design";
import { generateId } from "@ai-component/utils";
import {
  Card,
  Typography,
  Space,
  Descriptions,
  Alert,
  Tag,
} from "@arco-design/web-react";

const { Title, Paragraph, Text } = Typography;

export default function GenerateIdDemo() {
  const [ids, setIds] = useState({
    id8: generateId(),
    id12: generateId(12),
    id16: generateId(16),
    id24: generateId(24),
  });

  const regenerateIds = () => {
    setIds({
      id8: generateId(),
      id12: generateId(12),
      id16: generateId(16),
      id24: generateId(24),
    });
  };

  return (
    <div>
      <Title heading={2}>generateId</Title>
      <Paragraph>生成指定长度的随机字符串 ID，用于唯一标识。</Paragraph>

      <Alert
        type="info"
        content="generateId 生成由字母和数字组成的随机字符串，可用于生成临时 ID、文件名等场景。"
        style={{ marginBottom: 24 }}
      />

      <Card
        title="基础用法"
        style={{ marginBottom: 24 }}
        extra={
          <Button size="small" type="primary" onClick={regenerateIds}>
            重新生成
          </Button>
        }
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Paragraph>生成不同长度的随机 ID：</Paragraph>
          <Descriptions
            column={1}
            data={[
              {
                label: "默认长度（8）",
                value: (
                  <Space>
                    <Text code copyable>
                      {ids.id8}
                    </Text>
                    <Tag>长度: {ids.id8.length}</Tag>
                  </Space>
                ),
              },
              {
                label: "长度 12",
                value: (
                  <Space>
                    <Text code copyable>
                      {ids.id12}
                    </Text>
                    <Tag>长度: {ids.id12.length}</Tag>
                  </Space>
                ),
              },
              {
                label: "长度 16",
                value: (
                  <Space>
                    <Text code copyable>
                      {ids.id16}
                    </Text>
                    <Tag>长度: {ids.id16.length}</Tag>
                  </Space>
                ),
              },
              {
                label: "长度 24",
                value: (
                  <Space>
                    <Text code copyable>
                      {ids.id24}
                    </Text>
                    <Tag>长度: {ids.id24.length}</Tag>
                  </Space>
                ),
              },
            ]}
          />
          <Paragraph type="secondary">
            💡 提示：点击右上角的"重新生成"按钮可以生成新的 ID
          </Paragraph>
        </Space>
      </Card>

      <Card title="使用场景" style={{ marginBottom: 24 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <div>✅ 生成临时唯一 ID</div>
          <div>✅ 文件名或路径标识</div>
          <div>✅ 前端临时数据标识</div>
          <div>✅ 测试数据生成</div>
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
          {`import { generateId } from "@ai-component/utils";

// 生成默认长度（8）的 ID
const id1 = generateId();
// 输出示例: "a7b3c9d2"

// 生成指定长度的 ID
const id2 = generateId(12);
// 输出示例: "x5y9z2a3b7c4"

const id3 = generateId(16);
// 输出示例: "m1n2p3q4r5s6t7u8"

// 实际使用示例
const users = [
  { id: generateId(), name: "张三" },
  { id: generateId(), name: "李四" },
  { id: generateId(), name: "王五" },
];`}
        </pre>
      </Card>

      <Card title="API" style={{ marginTop: 24 }}>
        <Title heading={4}>generateId</Title>
        <Paragraph type="secondary" style={{ marginTop: 8, marginBottom: 16 }}>
          generateId(length?: number): string
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
                <code>length</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                生成的 ID 长度
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>number</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>8</code>
              </td>
            </tr>
          </tbody>
        </table>
        <Title heading={5} style={{ marginTop: 24 }}>
          返回值
        </Title>
        <Paragraph style={{ marginTop: 8 }}>
          返回指定长度的随机字符串，由字母和数字组成。
        </Paragraph>
        <Title heading={5} style={{ marginTop: 24 }}>
          特性
        </Title>
        <Space direction="vertical" style={{ marginTop: 8 }}>
          <div>• 字符集包含大小写字母和数字（a-z, A-Z, 0-9）</div>
          <div>• 使用加密安全的随机数生成器</div>
          <div>• 适用于临时 ID、文件名等场景</div>
          <div>• 不保证全局唯一性，建议配合时间戳使用</div>
        </Space>
      </Card>
    </div>
  );
}
