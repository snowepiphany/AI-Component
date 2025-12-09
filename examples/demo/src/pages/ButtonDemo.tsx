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
    </div>
  );
}
