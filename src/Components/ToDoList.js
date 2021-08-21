import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todos, setTodos}) => {
    return (
        <div className='todoContainer'>
            <ul className='todoList'>
                {todos.map( todo => (
                    <ToDo todo={todo} key={todo.id} text={todo.text} todos={todos} setTodos={setTodos}/>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;