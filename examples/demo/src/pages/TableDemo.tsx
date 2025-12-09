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

      <Card title="API" style={{ marginTop: 24 }}>
        <Title heading={4}>TableProps</Title>
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
                <code>columns</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                表格列配置
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>ColumnProps[]</code>
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
                <code>data</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                表格数据
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>any[]</code>
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
                <code>border</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                是否显示边框
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
                <code>true</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <code>stripe</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                是否显示斑马纹
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
                <code>size</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                表格尺寸
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
          </tbody>
        </table>
      </Card>
    </div>
  );
}
