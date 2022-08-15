import { FC, useCallback, useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import { NavBar } from "../components/navbar";
import PhotosList from "../components/photosList";
import { useTypedSelector } from "../hooks/redux";
import { getPhotosFetch } from "../store/reducers/photoReducer";
import { Spinner } from "react-bootstrap";

export const Galery:FC = () => {
  const dispatch = useAppDispatch();

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

  if (isLoading)
    return (
      <Spinner
        animation="border"
        className="spinner"
        variant="primary"
        // size=""
        // animation="grow"
      />
    );

  return (
    <div>
      <NavBar />
      <PhotosList
        photos={photosLondon}
        title="LONDON"
        error={photosLondonError}
      />
      <PhotosList photos={photosParis} title="PARIS" error={photosParisError} />
      <PhotosList
        photos={photosBerlin}
        title="BERLIN"
        error={photosBerlinError}
      />
      <PhotosList
        photos={photosMoscow}
        title="MOSCOW"
        error={photosMoscowError}
      />
    </div>
  );
};
