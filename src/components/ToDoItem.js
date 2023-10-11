import { Badge } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import {Button} from 'react-bootstrap';
//import ListGroupItem from 'react-bootstrap/ListGroupItem';
const ToDoItem = (props) => {

let itemHTML = (<>

{props.todo.text}
       <Badge onClick= {() => props.markAsDone(props.todo.id)} pill bg='success ' className='float-end'>❗ </Badge> 
              
                          <Button
                onClick={() => props.deleteTodo(props.todo.id)}
                variant="danger"
                className="float-end me-2"
            >
                Delete
            </Button>


</>);

if(props.todo.done){

    itemHTML = (<>

    <span className='done'>{props.todo.text} </span>
    <span className='float-end '>&#128077;</span>
    <Button
                onClick={() => props.deleteTodo(props.todo.id)}
                variant="danger"
                className="float-end me-2"
            >
                Delete
            </Button>
    
    </>);


}
    return(
        <>
        
<ListGroup.Item>
   
{itemHTML}

   
</ListGroup.Item>
    

        </>
    );
};
 export default ToDoItem;