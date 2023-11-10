import {
  Container,
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

function Sidebar() {
  return (
    <div className="col col-2">
      <Navbar expand="md" fixed="left" justify-content="between" id="sidebar">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img
              src="../Assets/logo/logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <ul className="list-unstyled">
                <li>
                  <Nav.Link
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    &nbsp; Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    &nbsp; Your Library
                  </Nav.Link>
                </li>
                <li>
                  <Form className="input-group mt-3">
                    <FormControl
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <Button
                      variant="outline-secondary"
                      className="btn btn-sm h-100"
                      type="submit"
                    >
                      GO
                    </Button>
                  </Form>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <p href="#">Cookie Policy</p> |<p href="#"> Privacy</p>
        </div>
      </Navbar>
    </div>
  );
}

export default Sidebar;
