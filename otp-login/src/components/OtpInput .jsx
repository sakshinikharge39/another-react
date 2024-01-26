import React from "react";
import { useState, useRef, useEffect } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setotp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([])

  useEffect(() => {
    if(inputRefs.current[0]) {
        inputRefs.current[0].focus();
    }
  }, [])
  

  console.log(otp);

  const handleChange = () => {};
  const handleClick = () => {};
  const handleKeyDown = () => {};

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index} 
            type="text"
                ref={(input) => (inputRefs.current[index]=input)}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
