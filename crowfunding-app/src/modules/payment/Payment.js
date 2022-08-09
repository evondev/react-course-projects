import React from "react";

const Payment = () => {
  return (
    <div className="flex gap-x-[30px]">
      <div className="w-[132px] h-[102px] shadow-1 rounded-2xl bg-white flex flex-col justify-center items-center py-6 px-10 border border-primary relative">
        <img srcSet="paypal.png 2x" alt="paypal" />
        <span className="absolute top-2 right-2">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 2C4.90937 2 2 4.90937 2 8.5C2 12.0906 4.90937 15 8.5 15C12.0906 15 15 12.0906 15 8.5C15 4.90937 12.0906 2 8.5 2ZM11.8281 6.70312L7.65 10.9H7.64687C7.59375 10.9531 7.45 11.0719 7.28438 11.0719C7.16563 11.0719 7.03125 11.0063 6.91875 10.8938L5.16875 9.14375C5.11875 9.09375 5.11875 9.01562 5.16875 8.96562L5.725 8.40938C5.75 8.38438 5.78125 8.37187 5.8125 8.37187C5.84375 8.37187 5.875 8.38438 5.9 8.40938L7.2875 9.79688L11.1 5.95625C11.125 5.93125 11.1562 5.91875 11.1875 5.91875C11.2219 5.91875 11.2531 5.93125 11.275 5.95625L11.8219 6.52187C11.8781 6.575 11.8781 6.65312 11.8281 6.70312Z"
              fill="#1DC071"
            />
          </svg>
        </span>
      </div>
      <div className="w-[132px] h-[102px] shadow-1 rounded-2xl bg-white flex flex-col justify-center items-center py-6 px-10">
        <img srcSet="payoneer.png 2x" alt="payoneer" />
      </div>
    </div>
  );
};

export default Payment;
