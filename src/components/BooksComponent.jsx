import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import fantasy from "../data/fantasy.json"

class AllTheBooks extends Component{
    render(){
        return(
            <Container>
                <Row className="mt-3">
                        {fantasy.map((card) => {
                            return(
                                <Col xs={6} md={4} lg={3} className="text-center my-3">
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={card.img} alt="card img" style={{height: "25rem"}}/>
                                <Card.Body style={{height: "15.5rem"}}>
                                  <Card.Title>{card.title}</Card.Title>
                                  <Card.Text>
                                    {card.category}
                                  </Card.Text>
                                  <Button variant="primary">{card.price} $</Button>
                                </Card.Body>
                                </Card>
                                </Col>
                            )
                        })}
                </Row> 
            </Container>
        )
    }
}
export default AllTheBooks