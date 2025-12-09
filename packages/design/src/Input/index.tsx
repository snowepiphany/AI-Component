import React from "react";
import { Input as ArcoInput } from "@arco-design/web-react";
import type { InputProps } from "./interface";

const Input: React.FC<InputProps> & {
  Password: typeof ArcoInput.Password;
  TextArea: typeof ArcoInput.TextArea;
  Search: typeof ArcoInput.Search;
} = (props) => {
  return <ArcoInput {...props} />;
};

Input.Password = ArcoInput.Password;
Input.TextArea = ArcoInput.TextArea;
Input.Search = ArcoInput.Search;

export default Input;
export type { InputProps };
