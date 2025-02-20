import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Icon = ({ Iconcomponent, label, size = 22, hideOnSamll }) => (
  <div
    className={`${
      hideOnSamll ? "max-lg:hidden min-lg:block" : ""
    }py-4 px-2 cursor-pointer`}
  >
    <Iconcomponent
      size={size}
      aria-label={label}
      style={{ strokeWidth: 2.3 }}
    />
  </div>
);

const Actions = () => {
  const icons = [
    { IconComponent: FiSearch, label: "Search", hideOnSamll: false },
    { IconComponent: FiUser, label: "User", hideOnSamll: true },
    {
      IconComponent: HiOutlineShoppingBag,
      label: "Shopping Cart",
      hideOnSamll: false,
    },
  ];

  return (
    <div className="flex justify-end items-center space-x-6 font-secondary text-primary text-sm">
      {icons.map((icon) => (
        <Icon
          key={icon?.IconComponent}
          Iconcomponent={icon?.IconComponent}
          label={icon?.label}
          hideOnSamll={icon.hideOnSamll}
        />
      ))}
    </div>
  );
};

export default Actions;
