import React, { useEffect } from "react";


function ToDoList({todoList, setTodoList}) {

  useEffect(()=>{
    const taskStorage = localStorage.getItem("tasks");
    if(taskStorage){
      setTodoList(JSON.parse(taskStorage))
    }
  }, [])


  function deleteTask(event){
    const divTasksToRemove = event.target.parentNode.parentNode;
    const divTaskID = divTasksToRemove.id;
    const listWithItemRemoved = [...todoList];
    listWithItemRemoved.splice(divTaskID,1);    
    setTodoList(listWithItemRemoved)
    localStorage.setItem("tasks", JSON.stringify(listWithItemRemoved))
  }
  

  return (
    <div id="cardBody">
      {todoList.map((list, element) =>(
        <div className="tasks" key={element} id={element}>
          <div>
            <input id="check" type="checkbox"></input>
            <label className="labelCheck" htmlFor="check">{list}</label>
          </div>
          <div>
            <button className="buttonDel" onClick={deleteTask}>X</button>
          </div>

        </div>
      ))}
      
     
    </div>
    
  );
}

export default ToDoList;
