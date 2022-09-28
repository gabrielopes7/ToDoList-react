import "./styles/App.css";
import "./styles/Body.css";
import AddTask from "./components/AddTask";
import ToDoList from "./components/TodoList";
import Title from "./components/Title.js";
import { legacy_createStore } from "redux";
import {Provider} from "react-redux";
import todoReducer from "./reducers/todoReducer";

function App() {

  const store = legacy_createStore(todoReducer);

  return (
    <div id="container">
      <Title/>
      <Provider store={store}>
        <ToDoList/>
        <AddTask/>
      </Provider>
    </div>
  );
}

export default App;
