import React from "react";
import InputFormik from "../input/InputFormik";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import RadioFomik from "../radio/RadioFomik";
import CheckboxFormik from "../checkbox/CheckboxFormik";
import DropdownFormik from "../dropdown/DropdownFormik";

const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "Doctor",
  },
  {
    id: 4,
    value: "constructor",
    text: "Constructor",
  },
];

const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        gender: "male",
        job: "",
        term: false,
      }}
      validationSchema={yup.object({
        username: yup.string().required("Please enter your username"),
        email: yup
          .string()
          .email("Please enter valid email address")
          .required("Please enter your email address"),
        password: yup
          .string()
          .min(8, "Your password must be at least 8 characters or greater")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            {
              message:
                "Your password must have at least 1 uppercase, 1 lowercase, 1 special character",
            }
          )
          .required("Please enter your password"),
        gender: yup
          .string()
          .required("Please select your gender")
          .oneOf(["male", "female"], "You can only select male or female"),
        job: yup
          .string()
          .required("Please select your job")
          .oneOf(["teacher", "developer", "doctor", "constructor"]),
        term: yup
          .boolean()
          .oneOf([true], "Please check the term and conditions"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 5000);
      }}
    >
      {(formik) => {
        const watchGender = formik.values.gender;
        console.log("Rendering formik");

        return (
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-[300px] mx-auto my-10"
            autoComplete="off"
          >
            <InputFormik
              name="username"
              placeholder="Enter your username"
              id="username"
              label="Username"
              type="text"
            ></InputFormik>
            <InputFormik
              name="email"
              placeholder="Enter your email"
              id="email"
              label="Email address"
              type="email"
            ></InputFormik>
            <InputFormik
              name="password"
              placeholder="Enter your password"
              id="password"
              label="Password"
              type="password"
            ></InputFormik>
            <div className="flex flex-col gap-3 mb-5">
              <label className="cursor-pointer">Gender</label>
              <div className="flex items-center gap-5">
                <RadioFomik
                  name="gender"
                  value="male"
                  checked={watchGender === "male"}
                  label="Male"
                ></RadioFomik>
                <RadioFomik
                  name="gender"
                  value="female"
                  checked={watchGender === "female"}
                  label="Female"
                ></RadioFomik>
              </div>
            </div>
            <DropdownFormik
              labelText="Your job"
              data={dropdownData}
              name="job"
              setValue={formik.setFieldValue}
            ></DropdownFormik>
            <CheckboxFormik name="term">
              I accept the terms and conditions
            </CheckboxFormik>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full p-5 mt-5 font-semibold text-white bg-blue-500 rounded-lg"
            >
              {formik.isSubmitting ? (
                <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;
