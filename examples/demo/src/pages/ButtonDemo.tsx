import { Button } from "@ai-component/design";
import { Space, Card, Typography } from "@arco-design/web-react";
import { IconPlus, IconDelete } from "@arco-design/web-react/icon";

const { Title, Paragraph } = Typography;

export default function ButtonDemo() {
  return (
    <div>
      <Title heading={2}>Button 按钮</Title>
      <Paragraph>按钮用于开始一个即时操作。</Paragraph>

      <Card title="基础按钮" style={{ marginBottom: 24 }}>
        <Space size="medium">
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="outline">Outline</Button>
          <Button type="text">Text</Button>
        </Space>
      </Card>

      <Card title="带图标的按钮" style={{ marginBottom: 24 }}>
        <Space size="medium">
          <Button type="primary" icon={<IconPlus />}>
            添加
          </Button>
          <Button type="primary" status="danger" icon={<IconDelete />}>
            删除
          </Button>
          <Button icon={<IconPlus />} />
        </Space>
      </Card>

      <Card title="按钮尺寸" style={{ marginBottom: 24 }}>
        <Space size="medium">
          <Button type="primary" size="mini">
            Mini
          </Button>
          <Button type="primary" size="small">
            Small
          </Button>
          <Button type="primary" size="default">
            Default
          </Button>
          <Button type="primary" size="large">
            Large
          </Button>
        </Space>
      </Card>

      <Card title="按钮状态" style={{ marginBottom: 24 }}>
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
      </Card>

      <Card title="禁用与加载" style={{ marginBottom: 24 }}>
        <Space size="medium">
          <Button type="primary" disabled>
            Disabled
          </Button>
          <Button type="primary" loading>
            Loading
          </Button>
        </Space>
      </Card>

      <Card title="按钮形状">
        <Space size="medium">
          <Button type="primary" shape="square">
            Square
          </Button>
          <Button type="primary" shape="round">
            Round
          </Button>
          <Button type="primary" shape="circle" icon={<IconPlus />} />
        </Space>
      </Card>

      <Card title="API" style={{ marginTop: 24 }}>
        <Title heading={4}>ButtonProps</Title>
        <table
          style={{ width: "100%", borderCollapse: "collapse", marginTop: 16 }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f7f8fa" }}>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                参数
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                说明
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                类型
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                默认值
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>type</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                按钮类型
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>primary | secondary | dashed | outline | text</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>secondary</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>size</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                按钮尺寸
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>mini | small | default | large</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>default</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>status</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                按钮状态
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>warning | danger | success</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>disabled</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                是否禁用
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>boolean</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>loading</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                是否加载中
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>boolean</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>icon</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                设置按钮的图标
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>ReactNode</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>shape</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                按钮形状
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>circle | round | square</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>square</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>onClick</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                点击事件
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>(e: React.MouseEvent) =&gt; void</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                -
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
