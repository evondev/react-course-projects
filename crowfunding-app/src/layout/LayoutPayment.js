import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutPayment = ({ back = "/" }) => {
  return (
    <div className="p-10">
      <div className="max-w-[1170px] mx-auto">
        <div className="mb-10">
          <div className="flex items-center justify-between mb-10">
            <Link to="/">
              <img srcSet="/logo.png 2x" alt="" />
            </Link>
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="object-cover rounded-full w-[52px] h-[52px]"
            />
          </div>
          <Link to={back} className="flex items-center gap-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.1713 18.277L10.4306 12.3975C10.2225 12.216 10.201 11.9001 10.3825 11.692C10.3971 11.6753 10.4128 11.6595 10.4295 11.6449L17.1702 5.72823C17.3777 5.54607 17.6936 5.56664 17.8758 5.77417C17.9558 5.8654 18 5.98263 18 6.10401V17.9002C18 18.1764 17.7761 18.4002 17.5 18.4002C17.3792 18.4002 17.2624 18.3565 17.1713 18.277Z"
                fill="#A2A2A8"
              />
              <path
                d="M8 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H8C8.55228 18 9 17.5523 9 17V7C9 6.44772 8.55228 6 8 6Z"
                fill="#A2A2A8"
              />
            </svg>
            <span className="text-sm font-semibold leading-normal text-primary">
              Back
            </span>
          </Link>
        </div>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutPayment;
