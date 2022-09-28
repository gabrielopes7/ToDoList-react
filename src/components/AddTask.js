import React, { useState} from "react";
import {useSelector, useDispatch} from "react-redux";

function AddTask() {
  const [submitText, setSubmitText] = useState("");
  const todoList = useSelector((state) => {return state})
  const dispatch = useDispatch();

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
      dispatch({type: "ADD", payload: submitText});
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
