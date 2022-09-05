import React, { useState } from "react";



function AddTask({todoList, setTodoList}){
    
    const [submit, setSubmit] = useState("");

    function enterToSubmit(event){
        if(event.key === "Enter"){submitTextToAdd()};
    }

    function handleText(event){
        setSubmit(event.target.value)
    }
    
    function submitTextToAdd(){
        if(submit.trim() === ""){
            window.alert("É necessário digitar uma tarefa")
        }else{
            setTodoList([...todoList,submit]);
        }
    }
    
    
    return(
        <div id="addDo">
            <input className="inputToAddTask" placeholder="Digite sua tarefa" onKeyDown={enterToSubmit} onChange={handleText} value={submit}></input>
            <button id="buttonAdd" onClick={submitTextToAdd}>+</button>
        </div>
    );
}

export default AddTask;
