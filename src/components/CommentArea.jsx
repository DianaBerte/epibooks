import { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";

class CommentArea extends Component {
    state = {
        selected: false,
      }
    render() {
        return (
            <Container>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Container>
        )
    }

}

export default CommentArea