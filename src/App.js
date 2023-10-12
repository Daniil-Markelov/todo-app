import TodoList from "./components/ToDoList";
import Container from  'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';


function App() {
  return (
    <Container className="mr-5">


       <Row className="text-center m-5">
          <h1>My To Do List</h1>
        </Row>  
       <Row>
    <Col> 
    <TodoList/>
    </Col>

</Row>

    </Container>


  );
}

export default App;
