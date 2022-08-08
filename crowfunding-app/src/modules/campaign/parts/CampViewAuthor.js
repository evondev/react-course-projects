import { defaultImage } from "constants/global";
import React from "react";

const CampViewAuthor = () => {
  return (
    <div className="flex items-center gap-x-5 mb-9">
      <img
        src={defaultImage}
        className="object-cover rounded-full w-[60px] h-[60px]"
        alt=""
      />
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-x-4">
          <h3 className="text-lg font-medium">Saiful Islam</h3>
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
          </div>
        </div>
        <div className="flex items-center text-sm gap-x-3 text-text3">
          <strong className="text-primary">02 Campaign</strong>
          <span className="block w-[6px] h-[6px] rounded-full bg-text3"></span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default CampViewAuthor;
