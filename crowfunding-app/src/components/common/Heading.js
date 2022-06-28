import React from "react";
import classNames from "utils/classNames";

const Heading = ({ children, className = "", number = null }) => {
  return (
    <h2
      className={classNames("text-lg font-semibold text-text1 mb-5", className)}
    >
      {children}
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </h2>
  );
};

export default Heading;
