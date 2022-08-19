import { NavBar } from "../components/navbar";
import { useParams } from "react-router";
import { Spinner } from "react-bootstrap";
import { useEffect, useCallback } from "react";
import { useTypedSelector } from "../hooks/redux";
import { CardPhoto } from "../components/ cardPhoto";
import { useActions } from "../hooks/useActions";

export const Card = () => {
  const { id = "" } = useParams();

  const { getPhotoByID } = useActions();

  const { photo, loading, error } = useTypedSelector(
    (state) => state.photoByIDReducer
  );

  const fetchPhoto = useCallback(() => getPhotoByID(id), [getPhotoByID, id]);

  useEffect(() => {
    fetchPhoto();
    //eslint-disable-next-line
  }, []);

  if (loading) return <Spinner animation="border" className="spinner" />;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <NavBar />
      <CardPhoto photo={photo} />
    </>
  );
};
