import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
  input::-webkit-input-placeholder {
    color: #84878b;
  }
  input::-moz-input-placeholder {
    color: #84878b;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyles hasIcon={children ? true : false}>
      <input id={name} type={type} {...field} {...props} />
      {children ? <div className="input-icon">{children}</div> : null}
    </InputStyles>
  );
};

export default Input;
