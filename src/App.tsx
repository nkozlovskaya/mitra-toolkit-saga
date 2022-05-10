import "./App.css";
import { useDispatch } from "react-redux";
import { getPhotosFetch } from "./store/reducers/photoReducer";
import { useTypedSelector } from "./hooks/redux";
import { useEffect } from "react";
// import Ring from "react-cssfx-loading/lib/Ring";
// import { PhotoState } from "./store/redusers/photoReduser";

function App() {
  const dispatch = useDispatch();

  const { photos } = useTypedSelector((state) => state.photoReducer);

  useEffect(() => {
    dispatch(getPhotosFetch());
  }, [dispatch]);

  // if (isLoading) return <Ring />;

  // if (error) return <h1>{error}</h1>;

  // const getPhotoClick = () => {
  //   dispatch(getPhotosFetch());
  // };
  console.log(photos);

  return (
    <div className="App">
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.urls.small} alt={photo.alt_description} />
          <p>{photo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

{
  /* <button onClick={getPhotoClick}>getPhotoClick</button> */
}
// eslint-disable-next-line
