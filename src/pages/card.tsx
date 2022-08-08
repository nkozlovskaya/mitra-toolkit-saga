import { NavBar } from "../components/navbar";
import { useParams } from "react-router";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { useTypedSelector, useAppDispatch } from "../hooks/redux";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { getPhotoByID } from "../store/reducers/photoByIDReduser/actionCreator";

export const CardPhoto = () => {
  const { id = "" } = useParams();
  const dispatch = useAppDispatch();

  const { photo, loading, error } = useTypedSelector(
    (state) => state.photoByIDReducer
  );
  const navigate = useNavigate();

  // const memoizedPhoto = useCallback(
  //   () => {
  //     dispatch(getPhotoByID());
  //   },
  //   [dispatch]
  // );

  useEffect(() => {
    dispatch(getPhotoByID(id));
  }, [dispatch, id]);

  const { urls, alt_description } = photo;

  if (loading) return <Spinner animation="border" className="spinner" />;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <NavBar />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={urls.small} />
        <Card.Body>
          <Card.Title>{alt_description}</Card.Title>
          <Button variant="primary" onClick={() => navigate(-1)}>
            BACK
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
