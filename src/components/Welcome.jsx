import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';

const Welcome = (props) => {
return (
<Jumbotron fluid>
  <Container>
    <h1>Welcome to EpiBooks!</h1>
    <h5>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet vel culpa voluptates, temporibus magni?
    </h5>
  </Container>
</Jumbotron>
)
}

export default Welcome