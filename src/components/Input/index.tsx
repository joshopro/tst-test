import React from "react";
import { Field, ErrorMessage } from "formik";
import { ISignupInput } from "../../type/signup";

const SignUpInput = ({
  name,
  type,
  placeholder,
  hiddenAddon = true,
  onHidePassword,
}: ISignupInput) => {
  return (
    <div className="signup-input">
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-control mb-1 mt-1"
      />
      <img
        onClick={onHidePassword}
        className={`right-img ${hiddenAddon && "d-none"}`}
        src={type == "text" ? `/images/hide_pass.png` : `/images/show_pass.png`}
        alt="hide_pass"
      />
      <ErrorMessage name={name}>
        {(msg) => <div className="text-danger fo-14">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};
export default SignUpInput;
