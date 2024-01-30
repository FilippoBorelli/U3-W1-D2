import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const myNav = () => {
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
        <Row>
        <Col>
      <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#browse">Browse</Nav.Link>
      </Nav>
      </Col>
      </Row> 
    </Container>
  </Navbar>
}
export default myNav