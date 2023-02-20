import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Home } from './components/Home';
import { Images } from './components/Images';
import MyAccess from './components/MyAccess';
import { Share } from './components/Share';

function BasicExample() {
  return (

    <Router>


      <><Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand >React-Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/images">My Image</Nav.Link>
              <Nav.Link as={Link} to="/share">Share</Nav.Link>
              <Nav.Link as={Link} to="/myaccess">My Access</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar><div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/images' element={<Images />}></Route>
            <Route path='/share' element={<Share />}></Route>
            <Route path='/myaccess' element={<MyAccess />}></Route>
          </Routes>
        </div>
      </>
    </Router>

  );
}

export default BasicExample;