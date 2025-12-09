import {
  Card,
  Typography,
  Space,
  Descriptions,
  Alert,
  Tag,
} from "@arco-design/web-react";
import { formatDate } from "@ai-component/utils";

const { Title, Paragraph } = Typography;

export default function FormatDateDemo() {
  const now = Date.now();
  const timestamp = 1702108800000; // 2023-12-09 16:00:00

  return (
    <div>
      <Title heading={2}>formatDate</Title>
      <Paragraph>支持多种格式的日期时间格式化工具函数。</Paragraph>

      <Alert
        type="info"
        content="formatDate 可以将时间戳或 Date 对象格式化成指定格式的字符串。支持常用的日期时间格式。"
        style={{ marginBottom: 24 }}
      />

      <Card title="基础用法" style={{ marginBottom: 24 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Paragraph>支持时间戳和 Date 对象作为输入：</Paragraph>
          <Descriptions
            column={1}
            data={[
              {
                label: "当前时间（默认格式）",
                value: <Tag color="blue">{formatDate(now)}</Tag>,
              },
              {
                label: "YYYY-MM-DD",
                value: <Tag color="blue">{formatDate(now, "YYYY-MM-DD")}</Tag>,
              },
              {
                label: "YYYY-MM-DD HH:mm:ss",
                value: (
                  <Tag color="blue">
                    {formatDate(now, "YYYY-MM-DD HH:mm:ss")}
                  </Tag>
                ),
              },
              {
                label: "YYYY/MM/DD",
                value: <Tag color="blue">{formatDate(now, "YYYY/MM/DD")}</Tag>,
              },
              {
                label: "HH:mm:ss",
                value: <Tag color="blue">{formatDate(now, "HH:mm:ss")}</Tag>,
              },
              {
                label: "YYYY年MM月DD日",
                value: (
                  <Tag color="blue">{formatDate(now, "YYYY年MM月DD日")}</Tag>
                ),
              },
            ]}
          />
        </Space>
      </Card>

      <Card title="不同输入类型" style={{ marginBottom: 24 }}>
        <Descriptions
          column={1}
          data={[
            {
              label: "时间戳输入",
              value: (
                <Space>
                  <Tag>{timestamp}</Tag>
                  <span>→</span>
                  <Tag color="green">
                    {formatDate(timestamp, "YYYY-MM-DD HH:mm:ss")}
                  </Tag>
                </Space>
              ),
            },
            {
              label: "Date 对象输入",
              value: (
                <Space>
                  <Tag>new Date({timestamp})</Tag>
                  <span>→</span>
                  <Tag color="green">
                    {formatDate(new Date(timestamp), "YYYY-MM-DD HH:mm:ss")}
                  </Tag>
                </Space>
              ),
            },
          ]}
        />
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
          {`import { formatDate } from "@ai-component/utils";

// 使用时间戳
formatDate(1702108800000);
// 输出: "2023-12-09 16:00:00"

// 使用 Date 对象
formatDate(new Date());
// 输出: "2025-12-10 00:52:10"

// 指定格式
formatDate(Date.now(), "YYYY-MM-DD");
// 输出: "2025-12-10"

formatDate(Date.now(), "HH:mm:ss");
// 输出: "00:52:10"

// 中文格式
formatDate(Date.now(), "YYYY年MM月DD日");
// 输出: "2025年12月10日"`}
        </pre>
      </Card>
    </div>
  );
}
