import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const MainHeader = () => {
  const authCtx = useContext(AuthContext);

  const onLogoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <NavLink to="/" className={classes.logo}>
          Instagram
        </NavLink>
      </nav>
      <div className={classes.nav}>
        <div>
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
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
