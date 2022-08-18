import { debounce } from "lodash";
import { useState } from "react";

export default function useOnChange(time = 0) {
  const [value, setValue] = useState(null);
  const handleOnChange = debounce((e) => {
    setValue(e.target.value);
  }, time);
  return [value, handleOnChange];
}
