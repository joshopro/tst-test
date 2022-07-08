import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  load,
  setHiddenPassword,
  setHiddenConfirmPassword,
} from "./signupSlice";
import SignUpInput from "../../components/Input";

const SignUpSchema = Yup.object().shape({
  userName: Yup.string().required("This field is required."),
  password: Yup.string().required("This field is required."),
  confirmPassword: Yup.string()
    .required("This field is required.")
    .oneOf([Yup.ref("password"), null], "Password is not match"),
});

const SignUp = () => {
  const { signup, hiddenPassword, hiddenConfirmPassword } = useAppSelector(
    (state) => state.signup
  );
  const dispatch = useAppDispatch();
  const onSubmit = (values: any, { resetForm }: any) => {
    dispatch(load({ signup: values }));
    resetForm();
  };
  return (
    <div className="layout-auth">
      <div className="container-fluid">
        <div className="background-img">
          <img src="/images/team.png" alt="signujp_image" />
        </div>
        <div className="bg-form-signup">
          <div className="bg-white signup-page-card">
            <h3 className="title">SignUp Test</h3>
            <Formik
              initialValues={signup}
              validationSchema={SignUpSchema}
              onSubmit={onSubmit}
            >
              {({ values, errors }) => (
                <Form className="form-signup">
                  <SignUpInput
                    name="userName"
                    placeholder="Username"
                    type="text"
                  />
                  <SignUpInput
                    type={hiddenPassword ? "password" : "text"}
                    placeholder="Password"
                    name="password"
                    hiddenAddon={false}
                    onHidePassword={() => {
                      dispatch(
                        setHiddenPassword({ hiddenPassword: !hiddenPassword })
                      );
                    }}
                  />
                  <SignUpInput
                    placeholder="Confirm Password"
                    type={hiddenConfirmPassword ? "password" : "text"}
                    name="confirmPassword"
                    hiddenAddon={false}
                    onHidePassword={() => {
                      dispatch(
                        setHiddenConfirmPassword({
                          hiddenConfirmPassword: !hiddenConfirmPassword,
                        })
                      );
                    }}
                  />
                  <button className="signup-button" type="submit">
                    Register
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
