import { useNavigate } from "react-router";
import { NavBar } from "../components/navbar";
import { Button } from "react-bootstrap";

export const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Button variant="primary" onClick={() => navigate(-1)}>
        BACK
      </Button>
    </>
  );
};
