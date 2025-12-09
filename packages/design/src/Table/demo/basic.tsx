import React from "react";
import { Table } from "@ai-component/design";

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
];

export default () => {
  return <Table columns={columns} data={data} />;
};
