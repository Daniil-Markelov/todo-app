import TodoList from "./components/ToDoList";
import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';


function App() {
  return (
    <Container className="mr-5">
<Row>
          <Col>
        <h1>Hello from app</h1>
    <TodoList/>
    </Col>

</Row>

    </Container>


  );
}

export default App;
