import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

function Email_sent() {
  return (
    <div className="bg-gray-50 grid grid-cols-1">
      <div className="w-11/12 m-auto">
        <Link to="/">
          <img src="assets/icons/arrow_left.svg" alt="" className="mt-5 text-primary-500" />
        </Link>
      </div>
      <div className="container min-w-full center  relative flex flex-col justify-center items-center">
        <img className="w-84 mb-1" src="assets/images/Frame 807-2.png" alt="" />
        <h2 className="mt-2 mb-1">Email Sent!</h2>
        <p
          style={{
            color: 'grey',
          }}
          className="w-1/3"
        >
          We’ve sent a password reset link to your email. Use this link to change your password.
        </p>
        <p
          style={{
            color: 'grey',
          }}
        >
          Didn’t receive a link?{' '}
          <span className="text-md font-semibold align-bottom cursor-pointer" style={{ color: 'rgb(56 133 123 /1)' }}>
            {' '}
            <Link to="/"> Resend Link </Link>
          </span>
        </p>
      </div>
      <div className="container min-w-full center pt-9 relative flex flex-col justify-center items-center">
        <div className="w-1/2">
          <div className="">
            <Button type="submit" className="button-primary-lg  button mb-2" style={{ borderRadius: '10px' }}>
              <Link to="/ResetPassword">Set New Password ?</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email_sent;
