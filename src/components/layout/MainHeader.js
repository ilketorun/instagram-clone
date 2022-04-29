import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import SearchIcon from "../Search/SearchIcon";
import ClearIcon from "../Search/ClearIcon";
import SearchInput from "../Search/SearchInput";
import AuthContext from "../store/auth-context";

const MainHeader = () => {
  const authCtx = useContext(AuthContext);

  const [isFocusedSearch, setIsFocusedSearch] = useState(false);

  const focusOnSearchHandler = () => {
    setIsFocusedSearch(true);
  };

  const searchCanceledHandler = () => {
    setIsFocusedSearch(false);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <NavLink to="/" className={classes.logo}>
          Instagram
        </NavLink>
      </nav>
      <div className={classes.nav}>
        <div className={classes.searchBar}>
          {!isFocusedSearch && <SearchIcon />}
          <SearchInput onFocus={focusOnSearchHandler} />
          {isFocusedSearch && (
            <ClearIcon onSearchCanceled={searchCanceledHandler} />
          )}
        </div>
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
                <NavLink to="/profile">Profile</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
