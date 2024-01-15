import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="navColor">
      <Container fluid>
        <i className="fa fa-align-left"></i>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto  my-lg-0" style={{ maxHeight: "100px" }}>
            <Nav.Link className="">
              <i
                className="fa fa-user"
                style={{ color: "var(--main-color)" }}
              ></i>
            </Nav.Link>
            <NavDropdown
              title="Alzubair"
              className=""
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Setting</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
