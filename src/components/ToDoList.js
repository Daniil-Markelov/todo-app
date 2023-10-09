import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from  'react-bootstrap/Col';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ToDoItem from './ToDoItem';
const TodoList = () => {

let initialList = [
    {id:1, text: 'clean the gaff', done :true},
    {id:2, text: 'Buy Milk', done :true},
    {id:3, text: 'Create todo app in React', done :false},
    {id:4, text: 'Create todo app in React', done :false},

];

    const [list, setList] = useState(initialList);
    const [textInput, setTextInput] = useState(initialList);

    const handleTextInput =(e) => {
        setTextInput (e.target.value);
    }


    let todoItems = list.map((item) =>{
        return <ToDoItem todo={item}/>
    });

    return (
        <Card>
            <Card.Header>ToDoList</Card.Header>
            <Card.Body>
                <ListGroup>
                {todoItems}
                </ListGroup>
            </Card.Body>
            <Card.Footer>
            <input type='text' onChange={handleTextInput}/>

<Button variant='primary' className='float-end'> Add</Button>
            </Card.Footer>

        </Card>
    );
};
export default TodoList;