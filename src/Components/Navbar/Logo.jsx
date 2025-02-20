import React from "react";
import logo from "../../assets/Purplfox_Logo.png";

const Logo = () => {
  return (
    <div className="flex font-secondary text-sm text-primary">
      <div className="p-4">
        <img src={logo} alt="Purplfox Logo" className="w-auto cursor-pointer" />
      </div>
    </div>
  );
};

export default Logo;
