import Card from "../UI/Card";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { Fragment, useEffect, useState } from "react";
import { storage } from "../Firebase/Firebase";

const HomePage = () => {
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      console.log(response);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prevList) => [...prevList, { url, name: item.name }]);
        });
      });
    });
  }, []);

  return (
    <div>
      <Card>
        <p>This is Home Page</p>
        <p> To do list</p>
        <ul>
          <li>Auth work</li>
          <li>img(file) upload to firebase,add usermail too</li>
          <li>fetch that data from firebase, to home page and profile page</li>
          <li>Search bar should search image name in database</li>
        </ul>
        <div>
          {imageList.map((item) => {
            return (
              <Fragment key={item.name + item.url}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "2rem auto",
                    height: "auto",
                    width: "85%",
                    maxWidth: "55rem",
                    padding: "2rem auto",
                  }}
                >
                  <div style={{ display: "flex", margin: "0.25rem auto" }}>
                    <h2>{item.name}</h2>
                  </div>
                  <img src={item.url} alt="" />
                </div>
              </Fragment>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
