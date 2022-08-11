import { NavBar } from "../components/navbar";
import { useParams } from "react-router";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { useTypedSelector, useAppDispatch } from "../hooks/redux";
import { CardPhoto } from "../components/ cardPhoto";
import { getPhotoByID } from "../store/reducers/photoByIDReduser/actionCreator";
// import photoByID from '../store/reducers/photoByIDReduser/photoByIdReducer'

export const Card = () => {
  const { id = "" } = useParams();
  const dispatch = useAppDispatch();

  const { photo, loading, error } = useTypedSelector(
    (state) => state.photoByIDReducer
  );

  useEffect(() => {
    dispatch(getPhotoByID(id));
  }, [dispatch]);

  if (loading) return <Spinner animation="border" className="spinner" />;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <NavBar />
      <CardPhoto photo={photo} />
    </>
  );
};
