import classes from "./LoadSpinner.module.css";

const LoadSpinner = (props) => {
  return <div className={classes.loadSpinner}>{props.children}</div>;
};

export default LoadSpinner;
