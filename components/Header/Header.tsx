import React from "react";
import Logo from "components/Logo";
import { AppBar, MenuAppBar } from ".";

const Header = () => {
  return (
    <header className="main_header  clearfix">
      <div className="padding_wrapper">
        <div className="right">
          <div className="logo right">
            <Logo />
          </div>
          <MenuAppBar />
        </div>
        <div className="left">
          <AppBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
