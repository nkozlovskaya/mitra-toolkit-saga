import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { router } from "../router/Router";

export const NotFound = () => {
  return (
    <section className="section">
      <div className="error">
        <span className="error__number">404</span>
        <span className="error__message">Данная страница не существует</span>
        <Nav.Item>
          <Nav.Link className="error__link" as={Link} to={router.galery.link}>
            Вернуться на главную
          </Nav.Link>
        </Nav.Item>
      </div>
    </section>
  );
};
