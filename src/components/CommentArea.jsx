import { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
// import CommentsList from "./CommentsList";
// import AddComment from "./AddComment"

class CommentArea extends Component {
    state = {
        comments: [],
      }

      fetchComments = async () => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin ,{
                    headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJiN2U3MzczODAwMTUzNzQzNzQiLCJpYXQiOjE2NzUzMzkyODEsImV4cCI6MTY3NjU0ODg4MX0.YkFj9nZ1BdbaigHRiklfnWBAA8uV0osFvcB1J0tNJOY"
            }
            } 
            )
            if (response.ok) {
                let data = await response.json();
                console.log(data);
                this.setState({
                    comments: data,
                })
            } else {
                alert("error");
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    componentDidMount() {
        this.fetchComments();
    }

    render() {
        return (
            <>
            <h5 className= "d-flex justify-content-center">Comments:</h5>
            <br /> 
            <Container>
                <ListGroup>
                    <h6>Book Reviews:</h6>
                    <ListGroup.Item data={this.state.data}>Lorem</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                {/* <h6>Book Reviews:</h6>
                     <ListGroup>
                         <CommentsList data="this.state.data">Lorem, ipsum dolor.</CommentsList>
                    </ListGroup>
                <h6>Add a comment:</h6>
                    <AddComment /> */}
            </Container>
            </>
        )
    }
}

export default CommentArea