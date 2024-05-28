import React from "react";

const ConvertIcon = ({ icon, param }) => {
  const Icon = icon;

  return (
    <span>
      <Icon {...param} />{" "}
    </span>
  );
};

export default ConvertIcon;
