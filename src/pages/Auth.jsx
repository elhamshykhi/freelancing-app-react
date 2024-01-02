import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";

function Auth() {
  return (
    <div className="w-full sm:max-w-lg mx-auto flex items-center justify-center min-h-screen">
      <div className="border border-primary-300 rounded-2xl py-16 px-8 w-full">
        {/* <SendOTPForm /> */}
        <CheckOTPForm />
      </div>
    </div>
  );
}

export default Auth;
