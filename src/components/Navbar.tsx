import {
  // Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
  Image,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const navigation = [
  { id: 1, title: "Galaxy", path: "/" },
  { id: 2, title: "About", path: "/about" },
  // { id: 3, title: "Card", path: "/card" },
];

export const NavBar = () => {
  const expand = false;
  return (
    <>
      <Navbar bg="dark" variant={"dark"} expand={expand} className="mb-3">
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
                    src="https://via.placeholder.com/50"
                  />

                  <NavDropdown.Item
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                    href="mailto: kozlovskayan.i@yandex.ru"
                  >
                    kozlovskayan.i@yandex.ru
                  </NavDropdown.Item>
                </NavDropdown.ItemText>

                {/* <Nav.Link href="#action1">Galery</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link> */}
                {/* <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
