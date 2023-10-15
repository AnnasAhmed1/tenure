import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import Email_sent from './pages/ForgetPassword/Email_sent';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Sucess from './pages/ForgetPassword/Sucess';
import Step1 from './pages/OnBoarding/Step1';
import Step2 from './pages/OnBoarding/Step2';
import Step3 from './pages/OnBoarding/Step3';
import Step4_dc from './pages/OnBoarding/Step4_dc';
import Login from './pages/Login/Login';
import Layout from './components/Layout/Layout';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/*', element: <Layout /> },
  { path: '/SignUp', element: <SignUp /> },
  { path: '/ForgetPassword', element: <ForgetPassword /> },
  { path: '/EmailSent', element: <Email_sent /> },
  { path: '/ResetPassword', element: <ResetPassword /> },
  { path: '/RasswordResetSuccess', element: <Sucess /> },
  { path: '/OnBoarding1', element: <Step1 /> },
  { path: '/OnBoarding2', element: <Step2 /> },
  { path: '/OnBoarding3', element: <Step3 /> },
  { path: '/OnBoarding4', element: <Step4_dc /> },
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
