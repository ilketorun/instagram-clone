import classes from "./SearchInput.module.css";

const SearchInput = (props) => {
  return (
    <input
      onClick={props.onFocus}
      className={classes.search}
      placeholder="Search"
      type="text"
    ></input>
  );
};

export default SearchInput;
