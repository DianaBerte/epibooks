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
            <Row className="justify-content-center">
                    
                        {items.map((books) => {
                            return (
                                <Col>
                                <Card style={{width: '12rem'}}>
                                <Card.Img
                                key={books.id}
                                className="d-block w-100"
                                src={books.img}
                                alt="First image"/>
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