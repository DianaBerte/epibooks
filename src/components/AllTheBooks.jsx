import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import items from "../Books/fantasy.json";
import SingleBook from "./SingleBook";

class AllTheBooks extends Component {
    state = {
        selectedBook: null,
    }
    render() {
        return (
            <>
            <h5 className= "d-flex justify-content-center">All the Books:</h5>
            <br />            
            <Container>
            <Row md={2} lg={3} xl={4} className=" justify-content-center">
                 {this.props.SingleBook.map((book) => {
                        return (
                           <Col key={book.asin} className="mb-4">
                                <SingleBook book={book}/>
                            </Col>)
            })}               
            </Row>
            </Container>
            </>
        )
    }
}

export default AllTheBooks