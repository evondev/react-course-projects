import { Button } from "components/button";
import React from "react";
import ReactModal from "react-modal";

const ModalThank = () => {
  return (
    <ReactModal
      isOpen
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
      className="modal-content w-full max-w-[650px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
    >
      <img
        src="close.svg"
        alt="close-modal"
        className="absolute z-10 cursor-pointer right-4 top-4"
      />
      <div className="max-w-[434px] mx-auto flex flex-col items-center justify-center text-center">
        <img src="/check.svg" alt="check" />
        <h2 className="my-5 text-[22px] font-semibold">
          Thank’s for backing campaign!
        </h2>
        <p className="mb-6 text-sm text-text3">
          Thank you so much for your support. We are so grateful to have the
          best backers on the planet.
        </p>
        <Button className="w-full text-white bg-secondary">
          Share this campaign
        </Button>
      </div>
    </ReactModal>
  );
};

export default ModalThank;
