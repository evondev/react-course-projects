import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";

const Label = (props) => {
  const { children, htmlFor = "", className = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        "inline-block self-start text-sm font-medium cursor-pointer text-text2 dark:text-text3",
        className
      )}
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
