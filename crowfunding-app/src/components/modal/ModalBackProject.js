import { Button } from "components/button";
import CampaignPerk from "modules/campaign/CampaignPerk";
import React from "react";
import ReactModal from "react-modal";

const ModalBackProject = () => {
  return (
    <ReactModal
      isOpen={false}
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
      className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
    >
      <button className="absolute z-10 flex items-center justify-center cursor-pointer w-11 h-11 right-10 top-[10px] text-text1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="font-bold text-[25px] mb-10 text-center">
        Back this project
      </h2>
      <p className="mb-3 text-sm">Enter the contribute amount</p>
      <input
        type="text"
        placeholder="$10"
        name="amount"
        className="w-full px-5 py-3 text-lg font-medium border rounded border-strock"
      ></input>
      <p className="my-5 text-sm text-text3">
        Contribution are not associatied with perks
      </p>
      <Button className="text-white bg-primary">Continue</Button>
      <div className="mt-[60px]"></div>
      <CampaignPerk showButton></CampaignPerk>
    </ReactModal>
  );
};

export default ModalBackProject;
