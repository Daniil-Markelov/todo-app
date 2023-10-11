import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import Col from  'react-bootstrap/Col';
import { useState } from 'react';
import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ToDoItem from './ToDoItem';
const TodoList = () => {

let initialList = [
    {id:1, text: 'clean the gaff', done :true, deleted : false},
    {id:2, text: 'Buy Milk', done :true, deleted : false},
    {id:3, text: 'Create todo app in React', done :false, deleted : false},


];

    const [list, setList] = useState(initialList);
    const [textInput, setTextInput] = useState('');

    const saveToDosToLocalStorage = (updatedList) => {
    localStorage.setItem('todos', JSON.stringify(updatedList));
};

    const handleTextInput =(e) => {
        setTextInput (e.target.value);
    };
    const addTodo = () => {
        let newTodo = {
            id: list.length + 1,
            text: textInput,
            done: false,
            deleted: false,
            
        };

        const updatedList = [...list, newTodo];
        setList(updatedList);
        saveToDosToLocalStorage(updatedList);
        setTextInput('');
        
    };

    const markAsDone = (id) => {
        const newList = list.map((item) => {
            if (item.id === id) {
                item.done = !item.done;
            }
            return item;
        });

        setList(newList);
        saveToDosToLocalStorage(newList);
    };
    const deleteTodo = (id) => {
        const newList = list.map((item) => {
                    if (item.id === id) {
                        item.deleted =true;
                    }
                    return item;
                });
                setList(newList);
                saveToDosToLocalStorage(newList);
                
            };

            let todoItems = list.filter((item) => !item.deleted).map((item) =>{

        
        return (<ToDoItem key={item.id} todo={item} markAsDone={markAsDone} deleteTodo={deleteTodo} />
        );
    });

    
    useEffect(() => {

        const ToDosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
        if (ToDosFromLocalStorage) {
          setList(ToDosFromLocalStorage);
        }
      }, []);

    return (
        <Card>
            <Card.Header>ToDoList</Card.Header>
            <Card.Body>
                <ListGroup>
                {todoItems}
                </ListGroup>
            </Card.Body>
            <Card.Footer>
            <input type='text' value={textInput} onChange={handleTextInput}/>
            <Button variant='primary' onClick={addTodo}> Add</Button>

            </Card.Footer>

        </Card>
    );
};
export default TodoList;