import { FC, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavBar } from "../components/navbar";
import Photos from "../components/photos";
import { useTypedSelector } from "../hooks/redux";
import { getPhotosFetch } from "../store/reducers/photoReducer";
import { Spinner } from "react-bootstrap";

export const Galery = () => {
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

  if (isLoading) return <Spinner animation="border" />;

  return (
    <div>
      <NavBar />
      <Photos photos={photosLondon} title="LONDON" error={photosLondonError} />
      <Photos photos={photosParis} title="PARIS" error={photosParisError} />
      <Photos photos={photosBerlin} title="BERLIN" error={photosBerlinError} />
      <Photos photos={photosMoscow} title="MOSCOW" error={photosMoscowError} />
    </div>
  );
};
