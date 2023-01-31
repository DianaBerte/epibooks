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
            <Row md={2} lg={3} xl={4} className=" justify-content-center">
                    
                        {items.map((books) => {
                            return (
                                <Col className="mb-4">
                                <Card style={{width: '12rem'}}>
                                <Card.Img
                                key={books.asin}
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