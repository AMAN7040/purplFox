import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const Icon = ({ Iconcomponent, label, size = 22 }) => (
  <div className="py-4 px-2 cursor-pointer">
    <Iconcomponent
      size={size}
      aria-label={label}
      style={{ strokeWidth: 2.5 }}
    />
  </div>
);

const Actions = () => {
  const icons = [
    { IconComponent: FiSearch, label: "Search" },
    { IconComponent: FiUser, label: "User" },
    { IconComponent: FiShoppingCart, label: "Shopping Cart" },
  ];

  return (
    <div className="flex justify-end items-center space-x-6 font-secondary text-primary text-sm">
      {icons.map((icon) => (
        <Icon
          key={icon?.IconComponent}
          Iconcomponent={icon?.IconComponent}
          label={icon?.label}
        />
      ))}
    </div>
  );
};

export default Actions;
