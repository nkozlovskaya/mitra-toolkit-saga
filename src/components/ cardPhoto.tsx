import { FC } from "react";
import { Card, Button } from "react-bootstrap";
import {  useNavigate } from "react-router";

interface ICardPhotoProps {
  photo: {
    urls: {
      small: string;
    };
    alt_description: string;
    description: string;
  };
}

export const CardPhoto: FC<ICardPhotoProps> = ({ photo }) => {
  const navigate = useNavigate();

  const { urls, alt_description, description } = photo;
  return (
    <>
      <Card style={{ width: "30rem" }} className="card">
        <Card.Img variant="top" src={urls.small} />
        <Card.Body>
          <Card.Title>{alt_description}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={() => navigate(-1)}>
            BACK
          </Button>
         
        </Card.Body>
      </Card>
    </>
  );
};
