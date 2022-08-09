import { Button } from "components/button";
import React from "react";

const PaymentPage = () => {
  return (
    <div className="pt-[66px]">
      <div className="w-full max-w-[624px] mx-auto text-center">
        <h1 className="font-bold text-[25px] mb-3">
          Connect Your Payment Processor
        </h1>
        <p className="text-text3 text-base mb-[60px]">
          To Start Processing credit card payments and donations, you will need
          to select either Paypal or Payoneer{" "}
        </p>
        <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] space-x-10">
          <div className="bg-white shadow-1 flex flex-col justify-center items-center pt-[35px] px-6 pb-6 rounded-2xl w-full">
            <img srcSet="paypal2x.png 2x" alt="" className="mb-10" />
            <p className="mb-6 text-sm text-text3">
              Get paid directly via Paypal.
            </p>
            <Button className="w-full bg-secondary bg-opacity-20 text-secondary">
              Connect
            </Button>
          </div>
          <div className="bg-white shadow-1 flex flex-col justify-center items-center pt-[35px] px-6 pb-6 rounded-2xl w-full">
            <img srcSet="payoneer2x.png 2x" alt="" className="mb-10" />
            <p className="mb-6 text-sm text-text3">
              Get paid worldwide your Work.
            </p>
            <Button className="w-full text-white bg-secondary">Connect</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
