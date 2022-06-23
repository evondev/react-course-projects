import React from "react";

const DashboardFund = () => {
  return (
    <div className="flex items-center text-base font-medium cursor-pointer gap-x-2 text-text2">
      <span>Fundrising for</span>
      <span className="w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 max-w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </div>
  );
};

export default DashboardFund;
