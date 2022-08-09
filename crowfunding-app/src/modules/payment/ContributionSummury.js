import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import Term from "components/Term";
import React from "react";

const ContributionSummury = () => {
  return (
    <div className="w-full max-w-[462px] shadow-1 bg-white rounded-3xl pt-4 pb-10 px-5">
      <h3 className="mb-6 text-lg font-semibold leading-normal text-text2">
        Contribution Summury
      </h3>
      <div className="flex items-center px-5 py-4 mb-4 rounded-xl bg-secondary bg-opacity-5 gap-x-4">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="flex-shrink-0 object-cover rounded w-[89px] h-[70px]"
        />
        <h4 className="text-base font-medium">Special One Camera</h4>
        <span className="ml-auto text-base font-bold">$2,724 USD</span>
      </div>
      <div className="px-5">
        <div className="flex items-center justify-between mb-3 text-base font-medium text-text2">
          <span>Subtotal</span>
          <span>$2,724 USD</span>
        </div>
        <div className="flex items-center justify-between mb-6 text-base font-medium text-text2">
          <span>Shipping</span>
          <span>$0 USD</span>
        </div>
        <div className="flex items-center justify-between text-base font-bold uppercase mb-7">
          <span>TOTAL</span>
          <span>$2,724 USD</span>
        </div>
        <Term></Term>
        <Button className="w-full text-white bg-primary">Submit Payment</Button>
      </div>
    </div>
  );
};

export default ContributionSummury;
