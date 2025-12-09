import React, { useState } from "react";
import { PromptEditor, Variable } from "@ai-component/x";

export default () => {
  const [prompt, setPrompt] = useState(
    "你是一个{{role}}，请根据以下需求：{{requirement}}，生成相应的内容。"
  );

  const variables: Variable[] = [
    { key: "role", label: "角色", defaultValue: "助手" },
    { key: "requirement", label: "需求", defaultValue: "用户需求" },
    { key: "tone", label: "语气", defaultValue: "友好" },
    { key: "length", label: "长度", defaultValue: "中等" },
  ];

  return (
    <PromptEditor
      value={prompt}
      onChange={setPrompt}
      variables={variables}
      placeholder="请输入提示词模板..."
    />
  );
};
