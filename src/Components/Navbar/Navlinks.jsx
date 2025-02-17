import React from "react";

const Navlinks = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.name}>{link.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;
