import React from "react";
import SideBar from "./SideBar";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <div>
      <Navbar/>
      <SideBar/>
    </div>
  );
};

export default Header;