import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Layout = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="tex">
        <Container>
      <nav>
            <Link  style={{padding:"10px"}} to="/Home">Home</Link>
            <Link style={{padding:"25px"}} to="/About">About</Link>    
      </nav>
          </Container>
          </Navbar>
      <Outlet />
    </>
  )
};

export default Layout;

