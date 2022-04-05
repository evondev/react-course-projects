import React from "react";
import styled from "styled-components";
import { Label } from "components/label";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import { Field } from "components/field";
import { Button } from "components/button";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    setValue,
    reset,
  } = useForm({
    mode: "onChange",
  });
  const handleSignUpForm = (values) => {
    console.log(values);
  };
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" onSubmit={handleSubmit(handleSignUpForm)}>
          <Field>
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              placeholder="Enter your fullname"
              control={control}
              name="fullname"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Enter your Email"
              control={control}
              name="email"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              control={control}
              name="password"
              hasIcon
            ></Input>
          </Field>
          <div style={{ textAlign: "center" }}>
            <Button
              style={{
                width: "100%",
                maxWidth: "350px",
                margin: "0 auto",
              }}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
