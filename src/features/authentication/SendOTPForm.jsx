import { useState } from "react";
import TextField from "../../ui/TextField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <form action="" className="space-y-6">
      <TextField
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type="button" className="btn btn--primary">
        ارسال کد تایید
      </button>
    </form>
  );
}

export default SendOTPForm;
