import React, { useContext } from "react";
import {ContextAPI} from "./Context"

function ToDoList() {
  const [todoList, setTodoList] = useContext(ContextAPI);

  function deleteTask(event) {
    const divTaskID = event.target.parentNode.parentNode.id;
    const listWithItemRemoved = [...todoList];
    listWithItemRemoved.splice(divTaskID, 1);
    setTodoList(listWithItemRemoved);
    localStorage.setItem("tasks", JSON.stringify(listWithItemRemoved));
  }

  return (
    <div id="cardBody">
      {todoList.map((list, element) => (
        <div className="tasks" key={element} id={element}>
          <div>
            <input id="check" type="checkbox"></input>
            <label className="labelCheck" htmlFor="check">
              {list}
            </label>
          </div>
          <div>
            <button className="buttonDel" onClick={deleteTask}>
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
