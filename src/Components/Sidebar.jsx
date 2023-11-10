import {
  Container,
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import Logo from "../Assets/logo/logo.png";
import { useDispatch, useSelector } from "react-redux";
import searching from "../redux/action/index";

function Sidebar() {
  const searchValue = useSelector((state) => state.search.searcValue);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.searchField.value;
    dispatch(searching(inputValue));
  };
  return (
    <div className="col col-2">
      <Navbar expand="md" fixed="left" justify-content="between" id="sidebar">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img src={Logo} alt="Spotify Logo" width="131" height="40" />
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
                    <i className=" ms-1 bi bi-house-door-fill"></i>
                    Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <i className=" ms-1 bi bi-book-fill"></i>
                    Your Library
                  </Nav.Link>
                </li>
                <li>
                  <Form className="input-group mt-3" onSubmit={handleSearch}>
                    <FormControl
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={(e) => dispatch(searching(e.target.value))}
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
          <Button
            className="btn signup-btn rounded-pill"
            variant="light "
            type="button"
          >
            Sign Up
          </Button>
          <Button
            className="btn login-btn rounded-pill"
            variant="outline-light"
            type="button"
          >
            Login
          </Button>
          <p href="#" className="text-white-50">
            Cookie Policy | <span href="#"> Privacy</span>
          </p>
        </div>
      </Navbar>
    </div>
  );
}

export default Sidebar;
