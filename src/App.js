import "./styles/App.css";
import "./styles/Body.css";
import AddTask from "./AddTask";
import ToDoList from "./TodoList";
import Title from "./Title.js";
import { ContextState } from "./Context"

function App() {

  return (
    <div id="container">
      <Title/>
      <ContextState>
        <ToDoList/>
        <AddTask/>
      </ContextState>
    </div>
  );
}

export default App;
