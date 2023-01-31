import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import items from "../Books/fantasy.json";

class AllTheBooks extends Component {
    state = {
        selectedBook: null,
    }
    render() {
        return (            
            <Container>
            <Row>
                <Col><Card >
            <Card.Img variant="top" src="holder.js/100px180" />
             </Card></Col>
                <Col><Card >
            <Card.Img variant="top" src="holder.js/100px180" />
             </Card></Col>
                <Col><Card >
            <Card.Img variant="top" src="holder.js/100px180" />
             </Card></Col>
            </Row>
            </Container>
        )
    }
}

export default AllTheBooks