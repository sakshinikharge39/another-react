import React from "react";
import { useState } from "react";
import OtpInput from '../components/OtpInput '

const PhoneOtpForm = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [showOtpInput, setshowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setphoneNumber(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    //phone Validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber) || phoneNumber.length > 10) {
      alert("Invalid Phone Number");
      return;
    }

    // call BE API
    //show otp field
    setshowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Succesful", otp)
  }
  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
