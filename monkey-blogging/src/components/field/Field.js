import React from "react";
import styled from "styled-components";
const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;
  margin-bottom: 25px;
`;
const Field = ({ children }) => {
  return <FieldStyles>{children}</FieldStyles>;
};

export default Field;
