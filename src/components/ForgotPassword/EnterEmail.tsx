// import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '../Button/Button';

export default function EnterEmail() {
  const formik = useFormik({
    initialValues: {
      email: '',
      isValidEmail: true,
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Email invalid').required('Your email is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

    },
  });
  return (
    // <div className="bg-gray-50 grid grid-cols-1">
    <div className="pt-16">
      <div className="container min-w-full center pt-8 relative flex flex-col justify-center items-center">
        <img className="desktop:w-1/4 phone:w-2/4" src="assets/images/forgot-password-1.svg" alt="Tenure logo" />
        <h2 className="flex flex-col pt-4 center largest-text text-gray-500">Forgot Password?</h2>
        <p className="flex flex-col center pt-4 px-4 phone:body-small-text-regular desktop:body-text-regular  text-gray-500">
          Enter your email below and we’ll get you back into your account
        </p>
      </div>
      <div className="container min-w-full center pt-8 relative flex flex-col justify-center items-center">
        <form onSubmit={formik.handleSubmit}>
          <label className="block min-w-full desktop:py-4 phone:py-2">
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
              className="mb-2 form-input px-4 py-3 w-96 border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ...  peer-invalid:border-danger-500 focus: border-danger-500"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invisible peer-invalid:visible text-danger-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </label>
          <div className="min-w-full">
            <Button type="submit" className="button-primary-lg center">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="container min-w-full center relative flex flex-col justify-center items-center">
        <blockquote className="pt-4 body-text-medium blockquote-form text-gray-500">
          Back to
          <a href="/Login">
            <span className="relative font-semibold text-primary-500"> Login</span>
          </a>
        </blockquote>
      </div>
    </div>
    // </div>
  );
}
