import React, { useState } from "react";
import {
  Card,
  Typography,
  Divider,
  Table,
  Space,
} from "@arco-design/web-react";
import { PromptEditor, Variable } from "@ai-component/x";

const { Title, Paragraph } = Typography;

export default function PromptEditorDemo() {
  const [prompt, setPrompt] = useState(
    "你是一个{{role}}，请根据以下需求：{{requirement}}，生成相应的内容。"
  );

  const variables: Variable[] = [
    { key: "role", label: "角色", defaultValue: "助手" },
    { key: "requirement", label: "需求", defaultValue: "用户需求" },
    { key: "tone", label: "语气", defaultValue: "友好" },
    { key: "length", label: "长度", defaultValue: "中等" },
  ];

  const apiColumns = [
    {
      title: "参数",
      dataIndex: "param",
      width: 150,
    },
    {
      title: "说明",
      dataIndex: "description",
      width: 200,
    },
    {
      title: "类型",
      dataIndex: "type",
    },
    {
      title: "默认值",
      dataIndex: "default",
      width: 120,
    },
  ];

  const apiData = [
    {
      key: "1",
      param: "value",
      description: "提示词内容",
      type: "string",
      default: "-",
    },
    {
      key: "2",
      param: "variables",
      description: "变量列表",
      type: "Variable[]",
      default: "[]",
    },
    {
      key: "3",
      param: "readOnly",
      description: "是否只读",
      type: "boolean",
      default: "false",
    },
    {
      key: "4",
      param: "placeholder",
      description: "占位符",
      type: "string",
      default: "请输入提示词...",
    },
    {
      key: "5",
      param: "onChange",
      description: "内容变化回调",
      type: "(value: string) => void",
      default: "-",
    },
    {
      key: "6",
      param: "onVariableClick",
      description: "变量点击回调",
      type: "(variable: Variable) => void",
      default: "-",
    },
    {
      key: "7",
      param: "renderVariable",
      description: "自定义变量渲染",
      type: "(variable: Variable) => ReactNode",
      default: "-",
    },
    {
      key: "8",
      param: "className",
      description: "样式类名",
      type: "string",
      default: "-",
    },
    {
      key: "9",
      param: "style",
      description: "自定义样式",
      type: "React.CSSProperties",
      default: "-",
    },
  ];

  const variableColumns = [
    {
      title: "参数",
      dataIndex: "param",
      width: 150,
    },
    {
      title: "说明",
      dataIndex: "description",
      width: 200,
    },
    {
      title: "类型",
      dataIndex: "type",
    },
  ];

  const variableData = [
    {
      key: "1",
      param: "key",
      description: "变量键名",
      type: "string",
    },
    {
      key: "2",
      param: "label",
      description: "变量标签",
      type: "string",
    },
    {
      key: "3",
      param: "defaultValue",
      description: "默认值",
      type: "string",
    },
  ];

  return (
    <div>
      <Title heading={2}>PromptEditor 提示词编辑器</Title>
      <Paragraph>
        用于编辑和管理 AI 提示词的组件，支持变量、模板等功能。
      </Paragraph>

      <Divider />

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Card title="基础用法" bordered>
          <PromptEditor
            value={prompt}
            onChange={setPrompt}
            variables={variables}
            placeholder="请输入提示词模板..."
          />
        </Card>

        <Card title="API" bordered>
          <Title heading={4} style={{ marginTop: 0 }}>
            PromptEditorProps
          </Title>
          <Table
            columns={apiColumns}
            data={apiData}
            pagination={false}
            border
          />

          <Title heading={4} style={{ marginTop: 24 }}>
            Variable
          </Title>
          <Table
            columns={variableColumns}
            data={variableData}
            pagination={false}
            border
          />
        </Card>
      </Space>
    </div>
  );
}
