import React from "react";
import { Button, Space } from "@arco-design/web-react";
import { IconPlus, IconDelete } from "@arco-design/web-react/icon";
import "./ButtonDoc.css";

const ButtonDoc: React.FC = () => {
  return (
    <div className="component-doc">
      <h1 id="button">Button 按钮</h1>
      <p className="component-desc">按钮用于开始一个即时操作。</p>

      <h2 id="basic-usage">基础用法</h2>
      <div className="demo-section">
        <Space size="medium">
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="outline">Outline</Button>
          <Button type="text">Text</Button>
        </Space>
      </div>

      <h2 id="button-size">按钮尺寸</h2>
      <div className="demo-section">
        <Space size="medium">
          <Button type="primary" size="mini">
            Mini
          </Button>
          <Button type="primary" size="small">
            Small
          </Button>
          <Button type="primary">Default</Button>
          <Button type="primary" size="large">
            Large
          </Button>
        </Space>
      </div>

      <h2 id="button-status">按钮状态</h2>
      <div className="demo-section">
        <Space size="medium" direction="vertical">
          <Space size="medium">
            <Button type="primary" status="warning">
              Warning
            </Button>
            <Button type="primary" status="danger">
              Danger
            </Button>
            <Button type="primary" status="success">
              Success
            </Button>
          </Space>
          <Space size="medium">
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" disabled>
              Disabled
            </Button>
          </Space>
        </Space>
      </div>

      <h2 id="icon-button">图标按钮</h2>
      <div className="demo-section">
        <Space size="medium">
          <Button type="primary" icon={<IconPlus />}>
            Add
          </Button>
          <Button type="primary" icon={<IconDelete />} iconOnly />
          <Button type="secondary" icon={<IconPlus />}>
            Add
          </Button>
        </Space>
      </div>

      <h2 id="button-shape">按钮形状</h2>
      <div className="demo-section">
        <Space size="medium">
          <Button type="primary" shape="circle" icon={<IconPlus />} />
          <Button type="primary" shape="round">
            Round Button
          </Button>
          <Button type="primary">Square Button</Button>
        </Space>
      </div>

      <h2 id="api">API</h2>
      <div className="api-section">
        <h3>Button Props</h3>
        <table className="api-table">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td>按钮类型</td>
              <td>primary | secondary | dashed | outline | text</td>
              <td>secondary</td>
            </tr>
            <tr>
              <td>size</td>
              <td>按钮尺寸</td>
              <td>mini | small | default | large</td>
              <td>default</td>
            </tr>
            <tr>
              <td>status</td>
              <td>按钮状态</td>
              <td>warning | danger | success</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>是否加载中</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>设置按钮的图标</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>shape</td>
              <td>按钮形状</td>
              <td>circle | round | square</td>
              <td>square</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ButtonDoc;
