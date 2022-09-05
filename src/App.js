import "./styles/App.css";
import "./styles/Body.css";
import AddTask from "./AddTask";
import ToDoList from "./TodoList";
import Title from "./Title.js"
import {useState}  from 'react'

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div id="container">
      <Title></Title>
      <ToDoList todoList={todoList}></ToDoList>
      <AddTask todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
