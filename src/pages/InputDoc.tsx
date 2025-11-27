import React from "react";
import { Input, Space } from "@arco-design/web-react";
import { IconSearch, IconUser } from "@arco-design/web-react/icon";
import "../pages/ButtonDoc.css";

const InputDoc: React.FC = () => {
  return (
    <div className="component-doc">
      <h1 id="input">Input 输入框</h1>
      <p className="component-desc">基本表单组件，支持输入和编辑文本。</p>

      <h2 id="basic-usage">基础用法</h2>
      <div className="demo-section">
        <Space size="large" direction="vertical" style={{ width: "100%" }}>
          <Input placeholder="请输入内容" style={{ width: 350 }} />
          <Input placeholder="禁用状态" disabled style={{ width: 350 }} />
          <Input
            placeholder="只读状态"
            readOnly
            defaultValue="只读内容"
            style={{ width: 350 }}
          />
        </Space>
      </div>

      <h2 id="input-size">输入框尺寸</h2>
      <div className="demo-section">
        <Space size="large" direction="vertical" style={{ width: "100%" }}>
          <Input size="mini" placeholder="Mini size" style={{ width: 350 }} />
          <Input size="small" placeholder="Small size" style={{ width: 350 }} />
          <Input placeholder="Default size" style={{ width: 350 }} />
          <Input size="large" placeholder="Large size" style={{ width: 350 }} />
        </Space>
      </div>

      <h2 id="input-prefix">前缀和后缀</h2>
      <div className="demo-section">
        <Space size="large" direction="vertical" style={{ width: "100%" }}>
          <Input
            prefix={<IconUser />}
            placeholder="请输入用户名"
            style={{ width: 350 }}
          />
          <Input
            suffix={<IconSearch />}
            placeholder="搜索内容"
            style={{ width: 350 }}
          />
          <Input
            prefix={<IconUser />}
            suffix={<IconSearch />}
            placeholder="带前后缀"
            style={{ width: 350 }}
          />
        </Space>
      </div>

      <h2 id="input-status">输入框状态</h2>
      <div className="demo-section">
        <Space size="large" direction="vertical" style={{ width: "100%" }}>
          <Input
            status="warning"
            placeholder="警告状态"
            style={{ width: 350 }}
          />
          <Input status="error" placeholder="错误状态" style={{ width: 350 }} />
        </Space>
      </div>

      <h2 id="password">密码输入框</h2>
      <div className="demo-section">
        <Space size="large" direction="vertical" style={{ width: "100%" }}>
          <Input.Password placeholder="请输入密码" style={{ width: 350 }} />
        </Space>
      </div>

      <h2 id="textarea">文本域</h2>
      <div className="demo-section">
        <Space size="large" direction="vertical" style={{ width: "100%" }}>
          <Input.TextArea
            placeholder="请输入多行文本"
            style={{ width: 350 }}
            rows={4}
          />
          <Input.TextArea
            placeholder="自动调整高度"
            style={{ width: 350 }}
            autoSize={{ minRows: 2, maxRows: 6 }}
          />
        </Space>
      </div>

      <h2 id="api">API</h2>
      <div className="api-section">
        <h3>Input Props</h3>
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
              <td>size</td>
              <td>输入框尺寸</td>
              <td>mini | small | default | large</td>
              <td>default</td>
            </tr>
            <tr>
              <td>status</td>
              <td>输入框状态</td>
              <td>warning | error</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>readOnly</td>
              <td>是否只读</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>占位符</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>prefix</td>
              <td>前缀元素</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
            <tr>
              <td>suffix</td>
              <td>后缀元素</td>
              <td>ReactNode</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputDoc;
