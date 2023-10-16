import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp/SignUp.tsx';
import Login from './pages/Login/Login.tsx';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword.tsx';
import ResetPassword from './pages/ForgetPassword/ResetPassword.tsx';
import Success from './pages/ForgetPassword/Sucess.tsx'; // Corrected the import
import EmailSent from './pages/ForgetPassword/Email_sent.tsx'; // Corrected the import
import Step1 from './pages/OnBoarding/Step1.tsx';
import Step2 from './pages/OnBoarding/Step2.tsx';
import Step3 from './pages/OnBoarding/Step3.tsx';
import Step4_dc from './pages/OnBoarding/Step4_dc.tsx';
import Layout from './components/Layout/Layout.tsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/EmailSent" element={<EmailSent />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/PasswordResetSuccess" element={<Success />} />
        <Route path="/OnBoarding1" element={<Step1 />} />
        <Route path="/OnBoarding2" element={<Step2 />} />
        <Route path="/OnBoarding3" element={<Step3 />} />
        <Route path="/OnBoarding4" element={<Step4_dc />} />
        {/* Catch-all route should be placed at the end */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}
