
import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function Header() {
    const history=useNavigate();

    const user = JSON.parse(localStorage.getItem('user-info'));
    console.log(user);

    const logout = () => {
        localStorage.clear();
        history("/register");
    }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0  menu-header"
            navbarScroll
          >
            {
                localStorage.getItem('user-info')?
                <>
                    <NavLink to="/add">Add Product</NavLink>   
                    <NavLink to="/">Produc tList</NavLink>   
                    <NavLink to="/update">Update Product</NavLink>  
                    <NavLink to="/search">Search Product</NavLink>  
                </>
                :
                <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </>
            }               
          </Nav>
          {
        localStorage.getItem('user-info')?
          <Nav>
            <NavDropdown title={user.name}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                <NavDropdown.Item >Profile</NavDropdown.Item> 
            </NavDropdown>
          </Nav>:
          null}
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;