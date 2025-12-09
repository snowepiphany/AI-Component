import { Card, Typography, Space, Descriptions } from "@arco-design/web-react";
import { formatDate, generateId } from "@ai-component/utils";

const { Title, Paragraph, Text } = Typography;

export default function UtilsDemo() {
  const now = Date.now();
  const timestamp = 1702108800000; // 2023-12-09 16:00:00

  return (
    <div>
      <Title heading={2}>Utils 工具函数</Title>
      <Paragraph>常用的工具函数集合。</Paragraph>

      <Card title="formatDate - 日期格式化" style={{ marginBottom: 24 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Paragraph>支持多种格式的日期时间格式化。</Paragraph>
          <Descriptions
            column={1}
            data={[
              {
                label: "当前时间",
                value: formatDate(now),
              },
              {
                label: "YYYY-MM-DD",
                value: formatDate(now, "YYYY-MM-DD"),
              },
              {
                label: "YYYY-MM-DD HH:mm:ss",
                value: formatDate(now, "YYYY-MM-DD HH:mm:ss"),
              },
              {
                label: "YYYY/MM/DD",
                value: formatDate(now, "YYYY/MM/DD"),
              },
              {
                label: "HH:mm:ss",
                value: formatDate(now, "HH:mm:ss"),
              },
              {
                label: "传入时间戳",
                value: formatDate(timestamp, "YYYY-MM-DD HH:mm:ss"),
              },
              {
                label: "传入 Date 对象",
                value: formatDate(new Date(timestamp), "YYYY-MM-DD HH:mm:ss"),
              },
            ]}
          />
        </Space>
      </Card>

      <Card title="generateId - 生成唯一 ID">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Paragraph>生成指定长度的随机字符串 ID，默认长度为 8。</Paragraph>
          <Descriptions
            column={1}
            data={[
              {
                label: "默认长度（8）",
                value: <Text code>{generateId()}</Text>,
              },
              {
                label: "长度 12",
                value: <Text code>{generateId(12)}</Text>,
              },
              {
                label: "长度 16",
                value: <Text code>{generateId(16)}</Text>,
              },
              {
                label: "长度 24",
                value: <Text code>{generateId(24)}</Text>,
              },
            ]}
          />
          <Paragraph type="secondary">
            提示：每次刷新页面会生成新的 ID
          </Paragraph>
        </Space>
      </Card>
    </div>
  );
}
