import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import book from "./Books/fantasy.json";
import { Component } from "react";
import CommentArea from "./components/CommentArea";
import { Col } from "react-bootstrap";

class App extends Component {
  state = {
    selectedBook: undefined,
  };

  changeAppState = (bookClicked) =>
    this.setState({ selectedBook: bookClicked });

  render() {
    return (
      <div>
        <MyNav />
        <Welcome />
        <Col sm={6}>
          <AllTheBooks
            SingleBook={book}
            selectedValueFromApp={this.state.selectedBook}
            changeAppStateFromApp={this.changeAppState}
          />
        </Col>
        <Col sm={6}>
          <CommentArea selectedValueFromApp={this.state.selectedBook} />
        </Col>
        <MyFooter />
      </div>
    );
  }
}

export default App;
