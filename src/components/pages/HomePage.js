import Card from "../UI/Card";

const HomePage = () => {
  return (
    <div>
      <Card>
        <p>
          This is Home Page
          <p> To do list</p>
          <ul>
            <li>Auth work</li>
            <li>img(file) upload to firebase,add usermail too</li>
            <li>
              fetch that data from firebase, to home page and profile page
            </li>
            <li>Search bar should search image name in database</li>
          </ul>
        </p>
      </Card>
    </div>
  );
};

export default HomePage;
