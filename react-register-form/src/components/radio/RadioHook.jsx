import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: props.value,
  });
  return (
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
  );
};

export default RadioHook;
