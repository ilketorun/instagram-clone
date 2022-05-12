import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import React from "react";
import logo from "../Images/Logo/instaLogo.png";

const MainHeader = () => {
  const authCtx = useContext(AuthContext);

  const onLogoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <nav>
        <NavLink to="/">
          <img className={classes.logo} src={logo} alt="Instagram Logo" />
        </NavLink>
      </nav>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!authCtx.isLoggedIn && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}

          {authCtx.isLoggedIn && (
            <li>
              <NavLink to="/upload">Upload</NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <NavLink onClick={onLogoutHandler} to="/login">
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
