import { useNavigate } from "react-router";
import { NavBar } from "../components/navbar";
import { Button, Nav } from "react-bootstrap";

export const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="about">
        <Nav
          fill
          variant="tabs"
          defaultActiveKey="https://hh.ru/resume/5dfac1a0ff09aa8a2b0039ed1f704561486537?customDomain=1"
        >
          <Nav.Item>
            <Nav.Link href="https://hh.ru/resume/5dfac1a0ff09aa8a2b0039ed1f704561486537?customDomain=1">
              Обо мне
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Button variant="primary" onClick={() => navigate(-1)}>
          BACK
        </Button>
      </div>
    </>
  );
};
