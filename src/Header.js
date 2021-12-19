import React from "react";

function Header() {
  return (
    <nav className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
      <div className="header__option">
        <span className="header__optionLineOne">Hello, User</span>
        <span className="header__optionLineTwo">Sign In or Sing Out</span>
      </div>
    </nav>
  );
}

export default Header;
