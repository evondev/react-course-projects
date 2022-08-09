import { Checkbox } from "components/checkbox";
import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input } from "components/input";
import { Label } from "components/label";
import ContributionSummury from "modules/payment/ContributionSummury";
import Payment from "modules/payment/Payment";
import React from "react";
import { useForm } from "react-hook-form";

const ShippingPage = () => {
  const { control } = useForm();
  return (
    <div className="flex items-start w-full gap-x-[74px]">
      <div className="flex-1">
        <h2 className="font-bold text-[30px] leading-normal mb-10">
          Shipping Address
        </h2>
        <FormRow>
          <FormGroup>
            <Label>First Name *</Label>
            <Input
              control={control}
              name="first_name"
              placeholder="John"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Last Name *</Label>
            <Input control={control} name="last_name" placeholder="Doe"></Input>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Country *</Label>
          <Dropdown>
            <Dropdown.Select placeholder="Select country"></Dropdown.Select>
            <Dropdown.List></Dropdown.List>
          </Dropdown>
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label>Street Address *</Label>
            <Input control={control} name="address" placeholder="John"></Input>
          </FormGroup>
          <FormGroup>
            <Label>City *</Label>
            <Input control={control} name="city" placeholder="Doe"></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Postal Code *</Label>
            <Input control={control} name="code" placeholder="123456"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Phone Number *</Label>
            <Input
              control={control}
              name="phone"
              placeholder="+123 456 789"
            ></Input>
          </FormGroup>
        </FormRow>
        <div className="flex items-center gap-x-5 mb-11">
          <Checkbox>Remember this address for next time use</Checkbox>
        </div>
        <h2 className="font-bold text-[30px] leading-normal mb-10">Payment</h2>
        <Payment></Payment>
      </div>
      <div className="flex-1 max-w-[462px] ml-auto">
        <ContributionSummury></ContributionSummury>
      </div>
    </div>
  );
};

export default ShippingPage;
