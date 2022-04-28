import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "../search/SearchIcon";
import ClearIcon from "../search/ClearIcon";
import SearchInput from "../search/SearchInput";

const MainHeader = () => {
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
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
