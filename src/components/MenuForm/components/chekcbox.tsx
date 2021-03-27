import React from "react";
import { CheckboxInline } from "../styles";

type CheckboxProps = {
  name: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ children, ...props }) => {
  return (
    <CheckboxInline>
      <div className="text-input-error"></div>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        aria-checked="false"
      />
      <label htmlFor={props.name}>
        <span>{children}</span>
      </label>
    </CheckboxInline>
  );
};

export default Checkbox;
