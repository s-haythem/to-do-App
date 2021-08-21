import React from 'react';
import { AiOutlinePlus} from "react-icons/ai";


const Form = ({inputText, setInputText, todos, setTodos}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const todoSubmitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed : false, id: Math.random()*1000}]);
        setInputText("");
    }
    return (
        <form className="form">
            <input value={inputText} onChange={inputTextHandler} type='text' className='todoInput'/>
            <button onClick={todoSubmitHandler} className='todoSubmit' type='submit'><AiOutlinePlus/></button>
        </form>
    )
}

export default Form;