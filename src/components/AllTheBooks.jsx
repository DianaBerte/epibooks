import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import items from "../Books/fantasy.json";

class AllTheBooks extends Component {
    state = {
        selectedBook: null,
    }
    render() {
        return (            
            <Container>
            <Row>
                <Col>
                    <Card style={{width: '12rem'}}>
                        {items.map((books) => {
                            return (
                                <Card.Img
                                key={books.id}
                                className="d-block w-100"
                                src={books.img}
                                alt="First image"/>
                            )
                        })}
                        
                    </Card>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default AllTheBooks