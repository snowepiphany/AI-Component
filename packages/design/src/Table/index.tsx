import React from "react";
import { Table as ArcoTable } from "@arco-design/web-react";
import type { TableProps } from "./interface";

const Table: React.FC<TableProps> = (props) => {
  return <ArcoTable {...props} />;
};

export default Table;
export type { TableProps };
