import React from "react";

const Button = ({ className, icon, text }) => {
  return (
    <button className={className}>
      {icon ?? icon}
      {text}
    </button>
  );
};

export default Button;
