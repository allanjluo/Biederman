// components/calendlyPopup.js
import { PopupWidget } from "react-calendly";
import React from "react";

const CalendlyPop = () => {
  return (
    <PopupWidget
      url="https://calendly.com/wbiedermanphoto/photography-session"
      rootElement={document.getElementById("root")}
      text="Click here to schedule!"
      textColor="#ffffff"
      color="#00a2ff"
    />
  );
};

export default CalendlyPop;
