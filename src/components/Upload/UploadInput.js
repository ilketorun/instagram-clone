import classes from "./UploadInput.module.css";
import Button from "../UI/Button";
import { Fragment, useRef, useState, useEffect } from "react";
import { storage } from "../Firebase/Firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const UploadInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const textInputRef = useRef();
  const navigate = useNavigate();

  const onUploadPost = () => {
    if (selectedFile === null) return;

    const inputText = textInputRef.current.value;

    const imageRef = ref(storage, `images/${inputText + " " + v4()}`);

    setIsUploading(true);

    uploadBytes(imageRef, selectedFile).then(() => {
      alert("Image Uploaded");
      setIsUploading(false);
      navigate("/", { replace: true });
    });
  };

  const onSelectFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple

    setSelectedFile(event.target.files[0]);
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <label htmlFor="file-upload" className={classes.uploadButton}>
          Choose Picture
        </label>
        <input id="file-upload" type="file" onChange={onSelectFile} />
        {selectedFile && <img className={classes.image} src={preview} alt="" />}
        <input
          type="text"
          maxLength="30"
          placeholder="Write a name for your picture"
          ref={textInputRef}
          style={{
            margin: "1rem",
            padding: "2rem",
            display: "flex",
            width: "70%",
            maxWidth: "40rem",
            borderRadius: "10px",
            border: "1px solid black",
          }}
        />
        {isUploading && <p>Uploading...</p>}
        <Button onClick={onUploadPost}>Upload</Button>
      </div>
    </Fragment>
  );
};

export default UploadInput;
