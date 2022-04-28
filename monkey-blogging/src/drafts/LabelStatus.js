import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LabelStatusStyles = styled.span`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
`;
/**
 *
 * @param type - "default" "success" "warning" "danger"
 * @returns
 */
const LabelStatus = ({ children, type = "default" }) => {
  let styleClassName = "text-gray-500 bg-gray-100";
  switch (type) {
    case "success":
      styleClassName = "text-green-500 bg-green-100";
      break;
    case "warning":
      styleClassName = "text-orange-500 bg-orange-100";
      break;
    case "danger":
      styleClassName = "text-red-500 bg-red-100";
      break;

    default:
      break;
  }
  return (
    <LabelStatusStyles className={styleClassName}>{children}</LabelStatusStyles>
  );
};
LabelStatus.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["default", "success", "warning", "danger"]).isRequired,
};
export default LabelStatus;
