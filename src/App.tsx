import "./App.css";
import { useDispatch } from "react-redux";
import { getPhotosFetch } from "./store/reducers/photoReducer";
import { useTypedSelector } from "./hooks/redux";
import { useEffect } from "react";
import Photos from "./components/Photos";
// import Ring from "react-cssfx-loading/lib/Ring";
// import { PhotoState } from "./store/redusers/photoReduser";

function App() {
  const dispatch = useDispatch();

  const { photosLondon, photosParis, photosBerlin, photosMoscow } =
    useTypedSelector((state) => state.photoReducer);

  useEffect(() => {
    dispatch(getPhotosFetch());
    // eslint-disable-next-line
  }, []);

  // if (isLoading) return <Ring />;

  // if (error) return <h1>{error}</h1>;

  // const getPhotoClick = () => {
  //   dispatch(getPhotosFetch());
  // };
  // console.log(photos);

  return (
    <div className="App">
      <Photos photos={photosLondon} title="LONDON" />
      <Photos photos={photosParis} title="PARIS" />
      <Photos photos={photosBerlin} title="BERLIN" />
      <Photos photos={photosMoscow} title="MOSCOW" />
    </div>
  );
}

export default App;

//<p className="photo_p">
//   {photo.description || photo.alt_description}
// </p>
