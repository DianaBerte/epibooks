import {Card } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";
// import props from "../Books/fantasy.json";

class SingleBook extends Component {
    state = {
        
        selected: false,
    }


  

    render() {
    return (
        <div>
        <Card onClick={() => this.setState({ selected: !this.state.selected  }) }
        style={{ border: this.state.selected ? '5px solid green' : 'none' }}
        >
        <Card.Img
        className="d-block w-100"
        src={this.props.book.img}
        alt="First image"/>
        <Card.Body className="d-flex flex-column">
            <Card.Title><h6>{this.props.book.title}</h6></Card.Title>
        </Card.Body>
        </Card>
        </div>
    )
}
}

export default SingleBook