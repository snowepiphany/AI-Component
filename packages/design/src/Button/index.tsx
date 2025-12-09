import React from "react";
import { Button as ArcoButton } from "@arco-design/web-react";
import type { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = (props) => {
  return <ArcoButton {...props} />;
};

export default Button;
export type { ButtonProps };
