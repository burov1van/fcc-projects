import React from "react";
import "./OTPGenerator.css";
const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [displayText, setDisplayText] = useState(
    "Click 'Generate OTP' to get a code",
  );
  const [hasClicked, setHasClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [secondLeft, setSecondLeft] = useState(0);
  const timerRef = useRef(null);

  function randomPassword() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  useEffect(() => {
    if (!isDisabled) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    timerRef.current = setInterval(() => {
      setSecondLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          setIsDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isDisabled]);

  const handleGenerate = () => {
    setHasClicked(true);
    setDisplayText(randomPassword());
    setIsDisabled(true);
    setSecondLeft(5);
  };

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{displayText}</h2>
      <p id="otp-timer" aria-live="assertive">
        {!hasClicked
          ? ""
          : isDisabled
            ? `Expires in: ${secondLeft} seconds`
            : "OTP expired. Click the button to generate a new OTP."}
      </p>

      <button
        id="generate-otp-button"
        onClick={handleGenerate}
        disabled={isDisabled}
      >
        Generate OTP
      </button>
    </div>
  );
};

export default OTPGenerator;
