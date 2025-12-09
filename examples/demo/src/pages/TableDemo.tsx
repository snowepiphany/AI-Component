import { Table } from "@ai-component/design";
import { Card, Typography, Space, Tag } from "@arco-design/web-react";
import { formatDate, generateId } from "@ai-component/utils";

const { Title, Paragraph } = Typography;

export default function TableDemo() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 200,
    },
    {
      title: "姓名",
      dataIndex: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
    },
    {
      title: "状态",
      dataIndex: "status",
      render: (status: string) => {
        const colorMap: Record<string, string> = {
          active: "green",
          inactive: "gray",
          pending: "orange",
        };
        return <Tag color={colorMap[status]}>{status}</Tag>;
      },
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
      age: 25,
      status: "active",
      createdAt: Date.now(),
    },
    {
      key: "2",
      id: generateId(),
      name: "李四",
      age: 28,
      status: "pending",
      createdAt: Date.now() - 86400000,
    },
    {
      key: "3",
      id: generateId(),
      name: "王五",
      age: 32,
      status: "inactive",
      createdAt: Date.now() - 172800000,
    },
    {
      key: "4",
      id: generateId(),
      name: "赵六",
      age: 24,
      status: "active",
      createdAt: Date.now() - 259200000,
    },
  ];

  const simpleColumns = [
    { title: "姓名", dataIndex: "name" },
    { title: "年龄", dataIndex: "age" },
    { title: "城市", dataIndex: "city" },
  ];

  const simpleData = [
    { key: "1", name: "张三", age: 25, city: "北京" },
    { key: "2", name: "李四", age: 28, city: "上海" },
    { key: "3", name: "王五", age: 32, city: "深圳" },
  ];

  return (
    <div>
      <Title heading={2}>Table 表格</Title>
      <Paragraph>
        用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。
      </Paragraph>

      <Card title="基础表格" style={{ marginBottom: 24 }}>
        <Table columns={simpleColumns} data={simpleData} />
      </Card>

      <Card title="带边框的表格" style={{ marginBottom: 24 }}>
        <Table columns={columns} data={data} border />
      </Card>

      <Card title="斑马纹表格" style={{ marginBottom: 24 }}>
        <Table columns={columns} data={data} stripe />
      </Card>

      <Card title="不同尺寸">
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <div>
            <div style={{ marginBottom: 8, fontWeight: 500 }}>Mini</div>
            <Table columns={simpleColumns} data={simpleData} size="mini" />
          </div>
          <div>
            <div style={{ marginBottom: 8, fontWeight: 500 }}>Small</div>
            <Table columns={simpleColumns} data={simpleData} size="small" />
          </div>
          <div>
            <div style={{ marginBottom: 8, fontWeight: 500 }}>Default</div>
            <Table columns={simpleColumns} data={simpleData} size="default" />
          </div>
        </Space>
      </Card>
    </div>
  );
}
