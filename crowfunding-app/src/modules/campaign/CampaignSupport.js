import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold">Support</h2>
      <div className="flex flex-col w-full px-6 bg-white shadow-1 py-7">
        <p className="mb-8 text-xl text-center text-text3">
          Pledge without reward
        </p>
        <Input
          placeholder="$10"
          control={control}
          name="Pledge"
          className="w-full px-5 py-3 mb-5 text-lg font-medium border rounded border-strock"
        ></Input>
        <div className="p-5 mb-5 bg-grayf3 rounded-xl">
          <p className="mb-5 text-sm font-semibold text-text2">
            Back it because you believe in it.
          </p>
          <p className="text-sm text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button className="w-full text-white bg-secondary">Continue</Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
