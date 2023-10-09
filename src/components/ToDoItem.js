import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const ToDoItem = (props) => {
    
    return(
        <>
        
<ListGroup.Item>{props.todo.text}</ListGroup.Item>
    

        </>
    );
};
 export default ToDoItem;