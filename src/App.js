import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>What do we have for today ?</h1>
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <ToDoList todos={todos} setTodos={setTodos}/>
     
    </div>
  );
}

export default App;
