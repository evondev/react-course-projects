import ContributionSummury from "modules/payment/ContributionSummury";
import Payment from "modules/payment/Payment";
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="max-w-[891px] flex items-start">
      <div>
        <h2 className="font-bold text-[30px] leading-normal mb-10">Payment</h2>
        <Payment></Payment>
      </div>
      <div className="flex-1 max-w-[462px] ml-auto">
        <ContributionSummury></ContributionSummury>
      </div>
    </div>
  );
};

export default CheckoutPage;
