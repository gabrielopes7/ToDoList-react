import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

function ToDoList() {

  const todoList = useSelector((state) => {return state})
  const dispatch = useDispatch();

  useEffect(()=>{
    const taskStorage = localStorage.getItem("tasks");
    if(taskStorage){
      dispatch({type: "LOAD", payload: JSON.parse(taskStorage)})
    }
    }, [])

  function deleteTask(event) {
    const divTaskID = event.target.parentNode.parentNode.id;
    const listWithItemRemoved = [...todoList];
    listWithItemRemoved.splice(divTaskID, 1);
    dispatch({type: "REMOVE", payload: listWithItemRemoved});
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
