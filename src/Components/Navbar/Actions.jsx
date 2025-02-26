import React, { useEffect } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Icon = ({
  Iconcomponent,
  label,
  size = 22,
  hideOnSamll,
  setCart,
  setSearch,
}) => (
  <div
    className={`${
      hideOnSamll ? "max-lg:hidden min-lg:block" : ""
    }py-4 cursor-pointer px-2`}
  >
    <Iconcomponent
      size={size}
      aria-label={label}
      style={{ strokeWidth: 2.3 }}
      onClick={() => {
        if (Iconcomponent === FiSearch) {
          setSearch(true);
        } else if (Iconcomponent === HiOutlineShoppingBag) {
          setCart(true);
        } else {
        }
      }}
    />
  </div>
);

const Actions = ({ setCart, setSearch }) => {
  const icons = [
    { IconComponent: FiSearch, label: "Search", hideOnSamll: false },
    { IconComponent: FiUser, label: "User", hideOnSamll: true },
    {
      IconComponent: HiOutlineShoppingBag,
      label: "Shopping Cart",
      hideOnSamll: false,
    },
  ];

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        setCart(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [setCart]);

  return (
    <div className="flex items-center justify-end space-x-6 font-secondary text-sm text-primary">
      {icons.map((icon) => (
        <Icon
          key={icon?.IconComponent}
          Iconcomponent={icon?.IconComponent}
          label={icon?.label}
          hideOnSamll={icon.hideOnSamll}
          setCart={setCart}
          setSearch={setSearch}
        />
      ))}
    </div>
  );
};

export default Actions;
