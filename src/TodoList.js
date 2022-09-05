import React from "react";


function ToDoList({todoList}) {


  function deleteTask(event){
    const divParent = event.target.parentNode.parentNode;
    divParent.remove() 
  }
  

  return (
    <div id="cardBody">
      {todoList.map((list, element) =>(
        <div className="tasks" key={element}>
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
