import { useField } from "formik";
import React from "react";

const RadioFomik = (props) => {
  const [field] = useField(props);
  return (
    <div className="flex items-center gap-x-3">
      <label className="cursor-pointer custom-radio">
        <input
          {...field}
          type="radio"
          value={props.value}
          className="hidden"
          checked={props.checked}
        />
        <div className="w-full h-full bg-white rounded-full"></div>
      </label>
      <span>{props.label}</span>
    </div>
  );
};

export default RadioFomik;
