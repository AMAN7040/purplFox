import React from "react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
