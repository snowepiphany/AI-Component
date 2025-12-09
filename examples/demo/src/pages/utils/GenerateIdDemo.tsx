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
    </div>
  );
}
