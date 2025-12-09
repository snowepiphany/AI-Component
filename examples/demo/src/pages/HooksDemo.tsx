import { useState } from "react";
import { Input } from "@ai-component/design";
import { useLocalStorage, useDebounce } from "@ai-component/hooks";
import { Card, Typography, Space, Tag } from "@arco-design/web-react";

const { Title, Paragraph, Text } = Typography;

export default function HooksDemo() {
  const [name, setName] = useLocalStorage("userName", "");
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 500);

  return (
    <div>
      <Title heading={2}>Hooks</Title>
      <Paragraph>常用的 React Hooks 工具集合。</Paragraph>

      <Card title="useLocalStorage - 本地存储" style={{ marginBottom: 24 }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Paragraph>
            自动将状态同步到 LocalStorage，刷新页面数据不会丢失。
          </Paragraph>
          <Input
            placeholder="请输入姓名（会自动存储到 LocalStorage）"
            value={name}
            onChange={setName}
            style={{ width: 400 }}
          />
          <div>
            <Tag color="blue">存储的值: {name || "(空)"}</Tag>
          </div>
          <Paragraph type="secondary">
            提示：输入内容后刷新页面，数据依然存在
          </Paragraph>
        </Space>
      </Card>

      <Card title="useDebounce - 防抖">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Paragraph>延迟更新值，常用于搜索输入框，减少请求次数。</Paragraph>
          <Input
            placeholder="搜索（500ms 防抖）"
            value={searchText}
            onChange={setSearchText}
            style={{ width: 400 }}
          />
          <Space>
            <div>
              <Text>实时值:</Text> <Tag>{searchText || "(空)"}</Tag>
            </div>
            <div>
              <Text>防抖后的值:</Text>{" "}
              <Tag color="green">{debouncedSearch || "(空)"}</Tag>
            </div>
          </Space>
          <Paragraph type="secondary">
            提示：快速输入时，防抖后的值会延迟 500ms 更新
          </Paragraph>
        </Space>
      </Card>
    </div>
  );
}
