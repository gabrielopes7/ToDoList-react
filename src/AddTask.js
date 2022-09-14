import React, { useState, useContext } from "react";
import {ContextAPI} from "./Context"

function AddTask() {
  const [submitText, setSubmitText] = useState("");
  const [todoList, setTodoList] = useContext(ContextAPI);

  function enterToSubmit(event) {
    if (event.key === "Enter") {
      submitTextToAdd(event);
    }
  }

  function handleText(event) {
    setSubmitText(event.target.value);
  }

  function submitTextToAdd() {
    if (submitText.trim() === "") {
      window.alert("Por favor, insira uma tarefa!")
    } else {
      setTodoList([...todoList, submitText]);
      localStorage.setItem("tasks", JSON.stringify([...todoList, submitText]));
      setSubmitText("");
    }
  }

  return (
    <div id="addDo">
      <input
        className="inputToAddTask"
        placeholder="Digite sua tarefa"
        onKeyDown={enterToSubmit}
        onChange={handleText}
        value={submitText}
        autoFocus
      ></input>
      <button id="buttonAdd" onClick={submitTextToAdd}>
        +
      </button>
    </div>
  );
}

export default AddTask;
