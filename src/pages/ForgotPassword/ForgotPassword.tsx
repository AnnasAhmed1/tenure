import { useState } from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import Button from '../../components/Button/Button';
import EnterEmail from '../../components/ForgotPassword/EnterEmail';
import EmailSent from '../../components/ForgotPassword/EmailSent';

export default function ForgotPassword() {
  const [isValidEmail/*,setIsValidEmail*/] = useState(true);

  return (
    <div className="bg-gray-50 grid grid-cols-1 content-center">
        <div className="desktop:pt-24 phone:pl-8 pt-10 relative flex inline w-full">
            <a href="/Login" className="flex align-baseline text-primary-500 font-bold cursor-pointer">
                <img className="mr-2" src="assets/icons/arrow_left_green.svg" alt="back to the previus page" />
                Back
            </a>
        </div>
        {isValidEmail ? <EnterEmail/> : <EmailSent/>}
        
    </div>
  );
}
