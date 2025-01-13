import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { count } = useSelector((store) => store.counterReducer);
  const { tasks } = useSelector((store) => store.crudReducer);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Redux Toolkit</Navbar.Brand>

        <Nav className="me-1">
          <NavLink to="/" className="me-4">
            Crud
            <span className="rounded p-1">({tasks.length})</span>
          </NavLink>

          <NavLink to="/counter">
            Sayaç
            <span className="rounded p-1">({count})</span>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
