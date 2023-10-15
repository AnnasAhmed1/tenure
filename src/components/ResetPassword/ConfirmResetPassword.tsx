export default function ConfirmResetPassword() {

  return (
    <div className="pt-16">
      <div className="container min-w-full center pt-8 relative flex flex-col justify-center items-center">
        <img className="desktop:w-1/4 phone:w-2/4" src="assets/images/email-sent.svg" alt="Tenure logo" />
        <h2 className="flex flex-col pt-4 center largest-text text-gray-500">Reset password</h2>
        <p className="flex flex-col center pt-4 px-4 phone:body-small-text-regular desktop:body-text-regular  text-gray-500">
        Password has been changed
        </p>
        <div className="flex flex-col center pt-8 min-w-full desktop:px-96 phone:px-5">
            <a href="/" className="button-primary-lg center">
              Login
            </a>
        </div>
      </div>
    </div>
  );
}
