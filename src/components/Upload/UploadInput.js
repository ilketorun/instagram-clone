import classes from "./UploadInput.module.css";
import { Fragment } from "react";

const UploadInput = () => {
  return (
    <Fragment>
      <label htmlFor="file-upload" className={classes.uploadButton}>
        Choose Picture
      </label>
      <input id="file-upload" type="file" />
    </Fragment>
  );
};

export default UploadInput;
