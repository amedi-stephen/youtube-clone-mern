import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = values => {
      alert(JSON.stringify(values, null, 2))
  }
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
      {() => (
        <Form className="centered-form login-form">
          <h2>Log in </h2>
          <div class="form-group">
            <label htmlFor="email">First Name</label>
            <Field name="email" placeholder="Enter your email" />
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

          <button type="submit">Log In</button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
