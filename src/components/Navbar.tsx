import {
  // Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const navigation = [
  { id: 1, title: "Galaxy", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Card", path: "/card" },
];

export const NavBar = () => {
  const expand = false;
  return (
    <>
      <Navbar bg="dark" variant={"dark"} expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {navigation.map(({ id, title, path }) => (
                  <Nav.Link key={id} href={path}>
                    {title}
                  </Nav.Link>
                ))}
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

//  <Navbar bg="success" expand="lg" variant="dark">
//       <Container>
//         <Navbar.Brand href="/">Galary</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//
//             {/* <Nav.Link href="#link">Link</Nav.Link> */}
{
  /* //           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar> */
}
