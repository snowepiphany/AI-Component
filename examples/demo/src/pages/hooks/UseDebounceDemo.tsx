import { useState } from "react";
import { Input } from "@ai-component/design";
import { useDebounce } from "@ai-component/hooks";
import { Card, Typography, Space, Tag, Alert } from "@arco-design/web-react";

const { Title, Paragraph, Text } = Typography;

export default function UseDebounceDemo() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 500);

  return (
    <div>
      <Title heading={2}>useDebounce</Title>
      <Paragraph>延迟更新值，常用于搜索输入框，减少请求次数。</Paragraph>

      <Alert
        type="info"
        content="useDebounce 会延迟更新值，只有在用户停止输入一段时间后才会更新。这在搜索场景中特别有用，可以减少 API 请求次数。"
        style={{ marginBottom: 24 }}
      />

      <Card title="基础用法" style={{ marginBottom: 24 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Paragraph>快速输入时，防抖后的值会延迟 500ms 更新。</Paragraph>
          <Input
            placeholder="搜索（500ms 防抖）"
            value={searchText}
            onChange={setSearchText}
            style={{ width: 400 }}
          />
          <Space size="large">
            <div>
              <Text>实时值:</Text> <Tag>{searchText || "(空)"}</Tag>
            </div>
            <div>
              <Text>防抖后的值:</Text>{" "}
              <Tag color="green">{debouncedSearch || "(空)"}</Tag>
            </div>
          </Space>
          <Paragraph type="secondary">
            💡 提示：快速输入时，防抖后的值会延迟 500ms 更新
          </Paragraph>
        </Space>
      </Card>

      <Card title="使用场景">
        <Space direction="vertical" style={{ width: "100%" }}>
          <div>✅ 搜索输入框 - 减少 API 调用</div>
          <div>✅ 表单验证 - 避免频繁验证</div>
          <div>✅ 窗口大小调整 - 优化性能</div>
          <div>✅ 滚动事件 - 减少处理频率</div>
        </Space>
      </Card>

      <Card title="代码示例" style={{ marginTop: 24 }}>
        <pre
          style={{
            backgroundColor: "#f7f8fa",
            padding: 16,
            borderRadius: 4,
            overflow: "auto",
          }}
        >
          {`import { useState } from "react";
import { useDebounce } from "@ai-component/hooks";

function SearchComponent() {
  const [searchText, setSearchText] = useState("");
  // 第一个参数是要防抖的值
  // 第二个参数是延迟时间（毫秒）
  const debouncedSearch = useDebounce(searchText, 500);

  // 使用 debouncedSearch 来发起 API 请求
  useEffect(() => {
    if (debouncedSearch) {
      // 发起搜索请求
      fetchSearchResults(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <input 
      value={searchText} 
      onChange={(e) => setSearchText(e.target.value)} 
    />
  );
}`}
        </pre>
      </Card>
    </div>
  );
}
