import Button from "../UI/Button";
import Card from "../UI/Card";
import UploadInput from "../Upload/UploadInput";

const Upload = () => {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <UploadInput />
        <input
          type="text"
          placeholder="Write a name for your picture"
          style={{
            margin: "1rem",
            padding: "2rem",
            display: "flex",
            width: "70%",
            maxWidth: "40rem",
            borderRadius: "10px",
            border: "1px solid black",
          }}
        ></input>
        <Button>Upload</Button>
      </div>
    </Card>
  );
};

export default Upload;
