import React from "react";
import argentBankLogo from "./argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/user/userSlice";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let isConnected = useSelector((state) => state.user.connected);
  const firstName = useSelector((state) => {
    if (state.user.userInfos.firstName) {
      return state.user.userInfos.firstName;
    } else {
      return null;
    }
  });
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch(logOut());
    navigate("/", { replace: true });
  };

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
        {!isConnected ? (
          <Link to="/signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <span>&nbsp;Sign In</span>
          </Link>
        ) : (
          <>
            <Link to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              <span className="first-name-navbar">&nbsp;{firstName}</span>
            </Link>
            <Link
              to="/"
              role="button"
              className="main-nav-item"
              onClick={(e) => handleLogout(e)}
            >
              <i className="fa fa-sign-out"></i>
              <span>&nbsp;Sign Out</span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
