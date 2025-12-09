import React, { useState } from "react";
import { Button, Input, Table } from "@ai-component/design";
import { useLocalStorage, useDebounce } from "@ai-component/hooks";
import { formatDate, generateId } from "@ai-component/utils";
import { Space, Card, Message } from "@arco-design/web-react";
import { IconPlus, IconDelete, IconSearch } from "@arco-design/web-react/icon";
import "./App.css";

function App() {
  const [name, setName] = useLocalStorage("userName", "");
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 500);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "姓名",
      dataIndex: "name",
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      render: (time: number) => formatDate(time, "YYYY-MM-DD HH:mm"),
    },
  ];

  const data = [
    {
      key: "1",
      id: generateId(),
      name: "张三",
      createdAt: Date.now(),
    },
    {
      key: "2",
      id: generateId(),
      name: "李四",
      createdAt: Date.now() - 86400000,
    },
    {
      key: "3",
      id: generateId(),
      name: "王五",
      createdAt: Date.now() - 172800000,
    },
  ];

  return (
    <div className="app">
      <div className="container">
        <h1>AI Component Demo</h1>
        <p className="subtitle">基于 pnpm monorepo 的组件库示例</p>

        <Card title="Button 按钮组件" style={{ marginBottom: 24 }}>
          <Space size="medium">
            <Button
              type="primary"
              onClick={() => Message.success("点击成功！")}
            >
              Primary
            </Button>
            <Button type="secondary">Secondary</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="outline">Outline</Button>
            <Button type="primary" icon={<IconPlus />}>
              添加
            </Button>
            <Button type="primary" status="danger" icon={<IconDelete />}>
              删除
            </Button>
          </Space>
        </Card>

        <Card title="Input 输入框组件" style={{ marginBottom: 24 }}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Input
              placeholder="请输入姓名（存储在 LocalStorage）"
              value={name}
              onChange={setName}
              style={{ width: 400 }}
            />
            <div style={{ color: "#666" }}>存储的值: {name}</div>

            <Input
              placeholder="搜索（500ms 防抖）"
              prefix={<IconSearch />}
              value={searchText}
              onChange={setSearchText}
              style={{ width: 400 }}
            />
            <div style={{ color: "#666" }}>防抖后的值: {debouncedSearch}</div>
          </Space>
        </Card>

        <Card title="Table 表格组件" style={{ marginBottom: 24 }}>
          <Table columns={columns} data={data} />
        </Card>

        <Card title="工具函数示例">
          <Space direction="vertical">
            <div>当前时间: {formatDate(new Date())}</div>
            <div>随机 ID: {generateId(12)}</div>
          </Space>
        </Card>
      </div>
    </div>
  );
}

export default App;
