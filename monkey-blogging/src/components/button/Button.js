import { LoadingSpinner } from "components/loading";
import React from "react";
import styled, { css } from "styled-components";
const ButtonStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  color: white;
  border-radius: 8px;
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  height: ${(props) => props.height || "70px"};
  ${(props) =>
    props.buttonType === "primary" &&
    css`
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
      );
    `};
`;

const Button = ({
  children,
  buttonType = "primary",
  onClick = () => {},
  ...props
}) => {
  const { isLoading } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  return (
    <ButtonStyles buttonType={buttonType} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  );
};

export default Button;
