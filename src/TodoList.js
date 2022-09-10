import React, { useContext, useEffect } from "react";
import MyContext from "./context/context";

function ToDoList() {
  const { todoList, setTodoList } = useContext(MyContext)

  const TASKS = "tasks"

  useEffect(() => {
    const taskStorage = localStorage.getItem(TASKS);
    if (taskStorage) {
      setTodoList(JSON.parse(taskStorage));
    }
  }, [setTodoList]);

  useEffect(() => {
    // limpa localStorage de title caso estiver sem o uso
    const taskStorage = JSON.parse(localStorage.getItem(TASKS))
    if (taskStorage?.length <= 0) {
      localStorage.removeItem(TASKS)
    }
  })

  const handleDelete = e => {
    const taskList = [...todoList]
    taskList.splice(e.target.parentNode.parentNode.id, 1)
    setTodoList(taskList)
    localStorage.setItem(TASKS, JSON.stringify(taskList));
  }

  return (
    <div id="cardBody">
      {todoList.map((list, element) => (
        <div className="tasks" key={element} id={element}>
          <div>
            <input id="check" type="checkbox" />
            <label className="labelCheck" htmlFor="check">
              {list}
            </label>
          </div>
          <div>
            <button className="buttonDel" onClick={handleDelete}>
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
