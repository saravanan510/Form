import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as Yup from "yup";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    role: "",
    terms: false,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    gender: Yup.string().required("Gender is required"),
    role: Yup.string().required("Role is required"),
    terms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const genderOptions = [
    {
      label: "Gender",
      value: "",
    },
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Others",
      value: "others",
    },
  ];
  const handleSubmit = (values) => {
    console.log("Form data", values);
    toast.success("Form Submitted Successfully");
  };
  return (
    <div className="form-container">
      <h4 className="form-header">Registration</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-control">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <Field className="form-input" type="text" name="name" id="name" />
            <ErrorMessage className="form-error" name="name" component="div" />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <Field className="form-input" type="text" name="email" id="email" />
            <ErrorMessage className="form-error" name="email" component="div" />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <Field
              className="form-input"
              type="password"
              name="password"
              id="password"
            />
            <ErrorMessage
              className="form-error"
              name="password"
              component="div"
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="gender">
              Gender
            </label>
            <Field className="form-input" as="select" name="gender" id="gender">
              {genderOptions.map((gender) => (
                <option value={gender.value}>{gender.label}</option>
              ))}
            </Field>

            <ErrorMessage
              className="form-error"
              name="gender"
              component="div"
            />
          </div>
          <div className="form-control-radio-container">
            <div className="form-control-radio">
              <div className="form-radio">
                <Field
                  className=""
                  type="radio"
                  name="role"
                  id="admin"
                  value="admin"
                />
                <label className="form-label" htmlFor="admin">
                  admin
                </label>
              </div>
              <div className="form-radio">
                <Field
                  className=""
                  type="radio"
                  name="role"
                  id="user"
                  value="user"
                />
                <label className="form-label" htmlFor="user">
                  user
                </label>
              </div>
            </div>
            <ErrorMessage className="form-error" name="terms" component="div" />
          </div>

          <div className="form-control ">
            <div className="form-control-checkbox">
              <Field
                className="form-input checkbox"
                type="checkbox"
                name="terms"
                id="terms"
              />
              <label className="form-label" htmlFor="terms">
                Terms & Conditions
              </label>
            </div>
            <ErrorMessage className="form-error" name="terms" component="div" />
          </div>
          <button type="submit" className="form-btn">
            Submit
          </button>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
