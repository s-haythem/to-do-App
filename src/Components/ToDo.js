import	React from 'react';
import { AiFillCloseCircle,AiFillCheckCircle } from "react-icons/ai";


const ToDo = ({todo,text, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const checkHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed : !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className="todo">
            <li style={{listStyleType: 'none'}}
                className={`todo-item ${todo.completed ? "completed":""}`}
            >{text}</li>
            <button onClick={checkHandler} className="checkBtn"><AiFillCheckCircle/></button>
            <button onClick={deleteHandler} className="deleteBtn"><AiFillCloseCircle/></button>

        </div>
    )
}

export default ToDo;   