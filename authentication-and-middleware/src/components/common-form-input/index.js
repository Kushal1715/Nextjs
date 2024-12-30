import React from "react";
import { Input } from "../ui/input";

const CommonFormInput = ({ currentItem, value, onChange }) => {
  let content = null;
  switch (currentItem.componentType) {
    case "input":
      content = (
        <Input
          type={currentItem.type}
          name={currentItem.name}
          id={currentItem.name}
          placeholder={currentItem.placeholder}
          value={value}
          onChange={onChange}
        />
      );
      break;

    default:
      content = (
        <Input
          type={currentItem.type}
          name={currentItem.name}
          id={currentItem.name}
          placeholder={currentItem.placeholder}
          value={value}
          onChange={onChange}
        />
      );
      break;
  }
  return content;
};

export default CommonFormInput;
