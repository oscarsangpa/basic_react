import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
  let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "username too short")
      .max(12, "Username too long")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password too short"),
    roles: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a role: User / Admin")
      .required("Role is required"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Password must match!"),
      })
      .required("You must confirm the password"),
  });

  // const submit = (values) => {
  //   alert("register user");
  // };

  return (
    <div>
      <h4>Register Form </h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="username">username</label>
            <Field
              id="username"
              name="username"
              placeholder="Your username"
              type="text"
            />

            {/* Username errors */}

            {errors.username && touched.username && (
              <ErrorMessage name="username" component={"div"} />
            )}

            <Field
              id="email"
              name="email"
              placeholder="example@email.com"
              type="email"
            />

            {/* Email errors */}

            {errors.email && touched.email && (
              <ErrorMessage name="email" component={"div"} />
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />

            {/* Password errors */}

            {errors.password && touched.password && (
              <ErrorMessage name="password" component={"div"} />
            )}

            <label htmlFor="confirm">Confirm password</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="confirm password"
              type="text"
            />

            {/* Confirm errors */}

            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component={"div"} />
            )}

            <button type="submit">Register Account</button>
            {isSubmitting ? <p>Send your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
