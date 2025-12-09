import React from "react";
import { Button } from "@ai-component/design";
import { Space } from "@arco-design/web-react";

export default () => {
  return (
    <Space size="medium">
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="outline">Outline</Button>
      <Button type="text">Text</Button>
    </Space>
  );
};
