import React from "react";
import { Table } from "@arco-design/web-react";
import "../pages/ButtonDoc.css";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
  },
  {
    title: "地址",
    dataIndex: "address",
  },
];

const data = [
  {
    key: "1",
    name: "张三",
    age: 32,
    address: "北京市朝阳区",
  },
  {
    key: "2",
    name: "李四",
    age: 28,
    address: "上海市浦东新区",
  },
  {
    key: "3",
    name: "王五",
    age: 35,
    address: "广州市天河区",
  },
  {
    key: "4",
    name: "赵六",
    age: 29,
    address: "深圳市南山区",
  },
];

const TableDoc: React.FC = () => {
  return (
    <div className="component-doc">
      <h1 id="table">Table 表格</h1>
      <p className="component-desc">用于展示行列数据。</p>

      <h2 id="basic-usage">基础用法</h2>
      <div className="demo-section">
        <Table columns={columns} data={data} />
      </div>

      <h2 id="bordered-table">带边框表格</h2>
      <div className="demo-section">
        <Table columns={columns} data={data} border />
      </div>

      <h2 id="striped-table">斑马纹表格</h2>
      <div className="demo-section">
        <Table columns={columns} data={data} stripe />
      </div>

      <h2 id="size">表格尺寸</h2>
      <div className="demo-section">
        <div style={{ marginBottom: 16 }}>
          <h4>Small</h4>
          <Table columns={columns} data={data} size="small" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <h4>Default</h4>
          <Table columns={columns} data={data} />
        </div>
        <div>
          <h4>Large</h4>
          <Table columns={columns} data={data} size="large" />
        </div>
      </div>

      <h2 id="api">API</h2>
      <div className="api-section">
        <h3>Table Props</h3>
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
              <td>columns</td>
              <td>表格列配置</td>
              <td>ColumnProps[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>data</td>
              <td>表格数据</td>
              <td>any[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>border</td>
              <td>是否显示边框</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>stripe</td>
              <td>是否显示斑马纹</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>表格尺寸</td>
              <td>small | default | large</td>
              <td>default</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>是否加载中</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>pagination</td>
              <td>分页配置</td>
              <td>PaginationProps</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDoc;
