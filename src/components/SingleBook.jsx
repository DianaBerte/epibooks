import {Card } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";
// import props from "../Books/fantasy.json";

class SingleBook extends Component {
    state = {
        comments: [],
        selected: false,
    }

    fetchComments = async () => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/0316438960',{
                    headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJiN2U3MzczODAwMTUzNzQzNzQiLCJpYXQiOjE2NzUzMzkyODEsImV4cCI6MTY3NjU0ODg4MX0.YkFj9nZ1BdbaigHRiklfnWBAA8uV0osFvcB1J0tNJOY"
            }
            } 
            )
            console.log(response)
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                this.setState({
                    comments: data,
                    selected: true,
                })
            } else {
                this.setState({
                    selected: false, 
                })
            }
        } catch (error) {
            console.log(error)
            this.setState({
                selected: false,
            })
        }
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