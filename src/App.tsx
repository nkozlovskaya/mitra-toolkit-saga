import "./App.css";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getPhotosFetch } from "./store/reducers/photoReducer";
import { useTypedSelector } from "./hooks/redux";
import { useEffect } from "react";
import Photos from "./components/Photos";
import { NavBar } from "./components/Navbar";
import Ring from "react-cssfx-loading/lib/Ring";

function App() {
  const dispatch = useDispatch();

  const { photosLondon, photosParis, photosBerlin, photosMoscow, isLoading } =
    useTypedSelector((state) => state.photoReducer);
  const {
    photosLondonError,
    photosParisError,
    photosBerlinError,
    photosMoscowError,
  } = useTypedSelector((state) => state.errorReducer);

  const memoPhotos = useCallback(() => dispatch(getPhotosFetch()), [dispatch]);

  useEffect(() => {
    memoPhotos();
  }, [memoPhotos]);

  if (isLoading) return <Ring />;

  return (
    <div>
      <NavBar />
      <Photos photos={photosLondon} title="LONDON" error={photosLondonError} />
      <Photos photos={photosParis} title="PARIS" error={photosParisError} />
      <Photos photos={photosBerlin} title="BERLIN" error={photosBerlinError} />
      <Photos photos={photosMoscow} title="MOSCOW" error={photosMoscowError} />
    </div>
  );
}

export default App;

// eslint-disable-next-line
