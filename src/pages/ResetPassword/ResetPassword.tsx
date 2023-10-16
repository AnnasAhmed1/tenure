import { useState } from 'react';
import CreatePassword from '../../components/ResetPassword/CreatePassword';
import ConfirmResetPassword from '../../components/ResetPassword/ConfirmResetPassword';

export default function ResetPassword() {
  const [isResetPassword/*,setIsResetPassword*/] = useState(false);

  return (
    <div className="bg-gray-50 grid grid-cols-1 content-center">
        <div className="desktop:pt-24 phone:pl-8 pt-10 relative flex inline w-full">
            <a href="/Login" className="flex align-baseline text-primary-500 font-bold cursor-pointer">
                <img className="mr-2" src="assets/icons/arrow_left_green.svg" alt="back to the previus page" />
                Back
            </a>
        </div>
        {isResetPassword ? <CreatePassword/> : <ConfirmResetPassword/>}
        
    </div>
  );
}
