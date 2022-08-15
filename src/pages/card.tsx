import { NavBar } from "../components/navbar";
import { useParams } from "react-router";
import { Spinner } from "react-bootstrap";
import { useEffect, useCallback } from "react";
import { useTypedSelector } from "../hooks/redux";
import { CardPhoto } from "../components/ cardPhoto";
// import { getPhotoByID } from "../store/reducers/photoByIDReduser/actionCreator";
import { useActions } from "../hooks/useActions";
// import photoByID from '../store/reducers/photoByIDReduser/photoByIdReducer'

export const Card = () => {
  const { id = "" } = useParams();
  const { getPhotoByID } = useActions();

  const { photo, loading, error } = useTypedSelector(
    (state) => state.photoByIDReducer
  );

  const fetchPhoto = useCallback(() => getPhotoByID(id), [id]);

  useEffect(() => {
    fetchPhoto();
  }, [fetchPhoto]);

  if (loading) return <Spinner animation="border" className="spinner" />;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <NavBar />
      <CardPhoto photo={photo} />
    </>
  );
};
