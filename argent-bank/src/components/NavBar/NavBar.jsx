import React from "react";
import argentBankLogo from "./argentBankLogo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/signin" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <span>&nbsp;Sign In</span>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
