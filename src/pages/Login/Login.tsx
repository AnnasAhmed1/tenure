import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '../../components/Button/Button';
import '../SignUp/SignUp.css';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
// interface FormLogin {
//   email: string;
//   password: string;
// }

export default function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [formData, setFormData] = useState('');
  const [typePassword, setTypePassword] = useState('password');
  let navigate = useNavigate();
  // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   setPassword(event.target.value);
  // };

  const togglePassword = () => {
    setTypePassword((prevType) => (prevType === 'password' ? 'text' : 'password'));
    // event.preventDefault();
    // if (typePassword === 'password') {
    //   setTypePassword('text');
    //   return;
    // } else {
    //   setTypePassword('password');
    //   return;
    // }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Email invalid').required('Your email is required'),
      password: yup.string().required('Your password is required'),
    }),
    onSubmit: (_values) => {
      navigate('/Dashboard');
    },
  });

  return (
    <div className="bg-gray-50 grid grid-cols-1">
      <div className="container min-w-full center pt-48 relative flex flex-col justify-center items-center">
        <img className="w-72 phone:w-24 tablet:w-32" src="assets/icons/logo_icon.svg" alt="Tenure logo" />
        <h2 className="flex flex-col center largest-text text-gray-500">Welcome back</h2>
      </div>
      <div className="container min-w-full center pt-10 relative flex flex-col justify-center items-center">
        <form onSubmit={formik.handleSubmit}>
          <TextField
            type="email"
            name="email"
            label="Enter your email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            style={{
              marginBottom: '0.5rem',
              padding: '0px',
            }}
            InputProps={{
              className: `border-2 border-solid border-gray-300  focus:border-gray-400 ring-gray-400 ${
                formik.touched.email && formik.errors.email ? 'border-[red] border-[1px]' : ''
              }`,
            }}
            className="mb-2 w-96 login-textfeild"
          />
          <div className="mb-4">
            {formik.touched.email && formik.errors.email ? (
              <div className="text-start ml-1 mb-4 peer-invalid:visible text-danger-500 text-sm">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="flex items-center justify-end">
            <TextField
              type={typePassword}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              label="Enter your password"
              variant="outlined"
              error={formik.touched.email && Boolean(formik.errors.email)}
              style={{
                marginBottom: '0.5rem',
                padding: '0px',
                width: '100%',
                // paddingLeft: '5px',
                // border: formik.touched.password && formik.errors.password ? '1px solid red' : '',
              }}
              InputProps={{
                className: `border-2 border-solid border-gray-300  focus:border-gray-400 ring-gray-400 ${
                  formik.touched.password && formik.errors.password ? 'border-[red] border-[1px]' : ''
                }`,
              }}
              className="mb-2 w-120 login-textfeild border-solid border-gray-300 focus:border-gray-400 ring-gray-400"
            />
            <div className="absolute mb-[16.5px] mr-[10px]">
              <button type="button" className="relative end-36p phone: end-8p   " onClick={togglePassword}>
                {typePassword === 'password' ? (
                  <img alt="eye" src="assets/icons/eye_closed.svg" />
                ) : (
                  <img alt="eye" src="assets/icons/eye_open.svg" />
                )}
              </button>
            </div>
          </div>
          {/* <div className="mb-4">
            {formik.touched.email && formik.errors.email ? (
              <div className="text-start ml-6 mb-4 peer-invalid:visible text-danger-500 text-sm">
                {formik.errors.email}
              </div>
            ) : null}
          </div> */}
          {/* <label className="block">
            <div className="pl-5">
              <input
                type={typePassword}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                placeholder="Enter your password"
                className="mb-2 form-input appearance-none px-4 py-2 w-96 border-2 rounded-lg border-solid border-gray-300 focus:border-gray-400 ring-gray-400 visible peer ..."
                style={{ border: formik.touched.password && formik.errors.password ? '1px solid red' : '' }}
              />
              <button type="button" className="relative end-36p phone: end-8p " onClick={togglePassword}>
                {typePassword === 'password' ? (
                  <img alt="eye" src="assets/icons/eye_closed.svg" />
                ) : (
                  <img alt="eye" src="assets/icons/eye_open.svg" />
                )}
              </button>
            </div>
          </label> */}
          <div className="mb-4">
            {formik.touched.password && formik.errors.password ? (
              <div className="text-start ml-1 mb-4 peer-invalid:visible text-danger-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <a href="/ForgetPassword" className="mb-2 pr-1 float-right">
            <span className="relative font-semibold text-primary-500"> Forgot Password?</span>
          </a>
          <div className="">
            <Button
              type="submit"
              className="button-primary-lg center button"
              style={{ borderRadius: '10px', backgroundColor: 'rgb(56 133 123 /1)' }}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
      <div className="container min-w-full center pt-10 relative flex flex-col justify-center items-center">
        <blockquote className="body-text-medium blockquote-form text-gray-500">
          Don’t have an account?
          <a href="/SignUp">
            <span className="relative font-semibold text-primary-500"> Create An Account</span>
          </a>
        </blockquote>
      </div>
    </div>
  );
}
