import {
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
  Image,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const navigation = [
  { id: 1, title: "Galery", path: "/" },
  { id: 2, title: "About", path: "/about" },
];

export const NavBar = () => {
  const expand = false;
  return (
    <>
      <Navbar bg="primary" variant={"dark"} expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Galery</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {navigation.map(({ id, title, path }) => (
                  <Nav.Link key={id} href={path}>
                    {title}
                  </Nav.Link>
                ))}

                <NavDropdown.Divider />
                <NavDropdown.ItemText
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  Надежда Козловская
                </NavDropdown.ItemText>
                <NavDropdown.ItemText>
                  <Image
                    roundedCircle={true}
                    src="../../public/IMG-20200317-WA0048.jpg"
                  />

                  <NavDropdown.Item
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                    href="mailto: kozlovskayan.i@yandex.ru"
                  >
                    kozlovskayan.i@yandex.ru
                  </NavDropdown.Item>
                </NavDropdown.ItemText>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

