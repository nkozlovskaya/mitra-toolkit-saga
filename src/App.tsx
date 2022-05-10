import "./App.css";
import { useDispatch } from "react-redux";
import {
  getPhotosFetch,
  // PhotoState,
  // getPhotosSuccess,
} from "./store/reducers/photoReducer";
import { useTypedSelector } from "./hooks/redux";
// import { useEffect } from "react";
// import { useEffect } from "react";
// import Ring from "react-cssfx-loading/lib/Ring";
// import { PhotoState } from "./store/redusers/photoReduser";

function App() {
  const dispatch = useDispatch();

  const { photos } = useTypedSelector((state) => state.photoReducer);

  // const photos = useSelector((state: PhotoState) => state.photos);

  // useEffect(() => {}, [dispatch]);

  // useEffect(() => {
  //   dispatch(getPhotosFetch());
  //   // eslint-disable-next-line
  // }, []);

  // if (isLoading) return <Ring />;

  // if (error) return <h1>{error}</h1>;

  const getPhotoClick = () => {
    dispatch(getPhotosFetch());
  };
  console.log(photos);

  return (
    <div className="App">
      <button onClick={getPhotoClick}>getPhotoClick</button>
    </div>
  );
}

export default App;

// eslint-disable-next-line
// eslint-disable-next-line
