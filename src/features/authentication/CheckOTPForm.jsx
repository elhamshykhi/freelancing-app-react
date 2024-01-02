import { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");

  return (
    <form action="" className="space-y-6">
      <p className="text-center">کد تایید را وارد کنید</p>

      <OTPInput
        containerStyle="flex flex-row-reverse gap-x-2 items-center justify-center"
        inputStyle={{
          width: "2.5rem",
          height: "2.5rem",
          border: "2px solid rgb(var(--color-primary-300))",
          borderRadius: "0.5rem",
          outline: "none",
        }}
        inputType="tel"
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input type="number" {...props} />}
      />

      <button className="btn btn--primary" type="button">
        تایید
      </button>
    </form>
  );
}

export default CheckOTPForm;
