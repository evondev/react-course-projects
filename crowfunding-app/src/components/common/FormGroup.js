import React from "react";

const FormGroup = ({ children }) => {
  return (
    <div className="flex flex-col mb-4 lg:mb-6 gap-y-2 lg:gap-y-3">
      {children}
    </div>
  );
};

export default FormGroup;
