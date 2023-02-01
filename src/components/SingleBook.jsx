import {Card } from "react-bootstrap";
// import props from "../Books/fantasy.json";

const SingleBook = (props) => {
    return (
        <div>
        <Card style={{width: '12rem'}}>
        <Card.Img
        className="d-block w-100"
        src={props.book.img}
        alt="First image"/>
        <Card.Body className="d-flex flex-column">
            <Card.Title><h6>{props.book.title}</h6></Card.Title>
        </Card.Body>
        </Card>
        </div>
    )
}

export default SingleBook