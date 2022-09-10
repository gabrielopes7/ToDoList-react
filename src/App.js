import "./styles/App.css";
import "./styles/Body.css";
import AddTask from "./AddTask";
import ToDoList from "./TodoList";
import Title from "./Title.js";

function App() {
  return (
    <div id="container">
      <Title />
      <ToDoList />
      <AddTask />
    </div>
  );
}

export default App;
