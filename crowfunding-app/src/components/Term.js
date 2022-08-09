import React from "react";
import { Checkbox } from "./checkbox";

const Term = () => {
  return (
    <div className="flex items-start mb-5 gap-x-5">
      <Checkbox name="term">
        <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
          I agree to the
          <span className="underline text-secondary"> Terms of Use</span> and
          have read and understand the
          <span className="underline text-secondary"> Privacy policy.</span>
        </p>
      </Checkbox>
    </div>
  );
};

export default Term;
