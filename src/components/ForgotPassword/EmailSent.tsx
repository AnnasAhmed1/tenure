export default function EmailSent() {

  return (
    <div className="pt-16">
      <div className="container min-w-full center pt-8 relative flex flex-col justify-center items-center">
        <img className="desktop:w-1/4 phone:w-2/4" src="assets/images/email-sent.svg" alt="Tenure logo" />
        <h2 className="flex flex-col pt-4 center largest-text text-gray-500">Email sent!</h2>
        <p className="flex flex-col center pt-4 px-4 phone:body-small-text-regular desktop:body-text-regular  text-gray-500">
        We’ve sent a password reset link to your email. Use this link to change your password.
        </p>
      </div>
      
      <div className="container min-w-full center relative flex flex-col justify-center items-center">
        <blockquote className="pt-4 body-text-medium blockquote-form text-gray-500">
            Didn’t receive a link?  
          <a href="/">
            <span className="relative font-semibold text-primary-500"> Resend Link</span>
          </a>
        </blockquote>
      </div>
    </div>
  );
}
