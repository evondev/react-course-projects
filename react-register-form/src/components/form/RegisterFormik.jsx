import React from "react";
import InputFormik from "../input/InputFormik";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";

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
        term: yup.boolean().required("Please accept the terms and conditions"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-[300px] mx-auto my-10"
          autoComplete="off"
        >
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="username" className="cursor-pointer">
              Username
            </label>
            <InputFormik
              name="username"
              placeholder="Enter your username"
              id="username"
              type="text"
            ></InputFormik>
            <p className="text-sm text-red-500">Your error message here</p>
          </div>
          <button className="w-full p-5 mt-5 font-semibold text-white bg-blue-500 rounded-lg">
            {formik.isSubmitting ? (
              <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterFormik;
