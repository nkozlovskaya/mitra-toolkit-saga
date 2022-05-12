import { Navbar, Nav, Container } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

// const navigation = [
//   { id: 1, title: "Galaxy", path: "/" },
//   { id: 2, title: "About", path: "/about" },
//   { id: 3, title: "Card", path: "/card" },
// ];

export const NavBar = () => {
  return (
    <Navbar bg="success" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Galary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* {navigation.map(({ id, title, path }) => (
              <Nav.Link key={id} href={path}>
                {title}
              </Nav.Link>
            ))} */}
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
