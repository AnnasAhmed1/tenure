import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '../Button/Button';

export default function CreatePassword() {
  // const [password, setPassword] = useState('');
  const [typePassword, setTypePassword] = useState('password');
  // const [isResetPassword, setIsResetPassword] = useState('');


  // const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  // const handlePasswordChange = (event: HTMLInputElement) => {
    // event.preventDefault();
    // setPassword(event.target.value);
  // };

  const togglePassword = (/*event: HTMLInputElement*/) => {
    // event.preventDefault();
    if (typePassword === 'password') {
      setTypePassword('text');
      return;
    } else {
      setTypePassword('password');
      return;
    }
  };

  // const validatePassword = (password: string) =>{
  //   let error;
  //   if(!password){
  //     error = 'Required password';
  //   } else if(!passwordPattern.test(password)){
  //     error = "Invalid password";
  //   }
  //   return error;
  // };

  const formik = useFormik({
    initialValues: {
      password: '',
      isResetPassword: true,
    },
    validationSchema: yup.object().shape({
      password: yup.string().required('Your password is required').min(8, '8 characters minimum'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="pt-16">
      <div className="container min-w-full center pt-8 relative flex flex-col justify-center items-center">
        <img className="desktop:w-1/4 phone:w-2/4" src="assets/images/forgot-password-1.svg" alt="Tenure logo" />
        <h2 className="flex flex-col pt-4 center largest-text text-gray-500">Reset password</h2>
        <p className="flex flex-col center pt-4 px-4 phone:body-small-text-regular desktop:body-text-regular  text-gray-500">
        Please create a new password
        </p>
      </div>
      <div className="container min-w-full center pt-8 relative flex flex-col justify-center items-center">
        <form onSubmit={formik.handleSubmit}>
        <label className="block min-w-full desktop:py-4 phone:py-2">
            <div className="pl-5">
              <input
                type={typePassword}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Create a password"
                className="mb-2 form-input appearance-none px-4 py-2 w-96 border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ..."
              />
              <button type="button" className="relative end-36p phone: end-8p " onClick={togglePassword}>
                {typePassword === 'password' ? (
                  <img  alt="eye" src="assets/icons/eye_closed.svg" />
                ) : (
                  <img alt="eye" src="assets/icons/eye_open.svg" />
                )}
              </button>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <><div className="invisible peer-invalid:visible text-danger-500 text-sm">{formik.errors.password}</div><div className="container min-w-full center relative flex flex-col justify-center items-center mt-2 invisible peer-valid:text-primary-500 peer-invalid:visible text-danger-500 text-sm">
                <ul className="label-text-medium text-gray-400 flex flex-wrap">
                  <li className="">8 characters minimum</li>
                  <li className="">1 lowercase</li>
                  <li className="">1 uppercase</li>
                  <li className="">1 special character</li>
                  <li className="">1 number</li>
                </ul>
              </div></>
            ) : null}
          </label>
          <div className="min-w-full phone:px-5">
            <Button type="submit" className="button-primary-lg center">
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
