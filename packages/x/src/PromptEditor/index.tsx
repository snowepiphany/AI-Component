import React from "react";
import { Input, Tag, Space, Card } from "@arco-design/web-react";
import type { PromptEditorProps, Variable } from "./interface";
import "./index.css";

const PromptEditor: React.FC<PromptEditorProps> = (props) => {
  const {
    value = "",
    variables = [],
    readOnly = false,
    placeholder = "请输入提示词...",
    onChange,
    onVariableClick,
    renderVariable,
    className,
    style,
  } = props;

  const handleChange = (val: string) => {
    onChange?.(val);
  };

  const handleVariableClick = (variable: Variable) => {
    if (!readOnly) {
      const varText = `{{${variable.key}}}`;
      onChange?.(value + varText);
    }
    onVariableClick?.(variable);
  };

  const defaultRenderVariable = (variable: Variable) => (
    <Tag
      key={variable.key}
      color="arcoblue"
      style={{ cursor: readOnly ? "default" : "pointer" }}
      onClick={() => handleVariableClick(variable)}
    >
      {variable.label}
    </Tag>
  );

  return (
    <div className={`ai-prompt-editor ${className || ""}`} style={style}>
      <Input.TextArea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readOnly}
        autoSize={{ minRows: 6, maxRows: 20 }}
      />
      {variables.length > 0 && (
        <Card
          title="可用变量"
          size="small"
          style={{ marginTop: 16 }}
          bordered={false}
        >
          <Space wrap>
            {variables.map((variable) =>
              renderVariable
                ? renderVariable(variable)
                : defaultRenderVariable(variable)
            )}
          </Space>
          <div style={{ marginTop: 12, fontSize: 12, color: "#86909c" }}>
            点击变量可插入到提示词中
          </div>
        </Card>
      )}
    </div>
  );
};

export default PromptEditor;
export type { PromptEditorProps, Variable };
