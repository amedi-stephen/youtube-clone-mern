import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(3, "Weak password").required("Required"),
    confirmPassword: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="centered-form signup-form">
          <h2>Sign Up</h2>
          <div class="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" placeholder="Enter your first name" />
            <div className="error-message">
              <ErrorMessage name="firstName" />
            </div>
          </div>

          <div class="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" placeholder="Enter your last names" />
            <div className="error-message">
              <ErrorMessage name="lastName" />
            </div>
          </div>

          <div class="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="Enter email" />
            <div className="error-message">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div class="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" placeholder="Enter your password" />
            <div className="error-message">
              <ErrorMessage name="password" />
            </div>
          </div>

          <div class="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword" placeholder="Confirm password" />
            <div className="error-message">
              <ErrorMessage name="password" />
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
