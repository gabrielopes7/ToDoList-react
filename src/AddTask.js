import React, { useState, useContext, useEffect } from "react";
import MyContext from "./context/context";


function AddTask() {
  const [submit, setSubmit] = useState("");
  const [message, setMessage] = useState("")
  const { todoList, setTodoList } = useContext(MyContext)

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }
  }, [message])

  function enterToSubmit(event) {
    if (event.key === "Enter") {
      submitTextToAdd();
    }
  }

  function handleText(event) {
    setSubmit(event.target.value);
  }

  function submitTextToAdd() {
    if (submit.trim() === "") {
      setMessage("É necessário digitar uma tarefa");
    } else {
      setTodoList([...todoList, submit]);
      localStorage.setItem("tasks", JSON.stringify([...todoList, submit]));
      setSubmit("");
    }
  }

  return (
    <div id="addDo">
      <input
        className="inputToAddTask"
        placeholder="Digite sua tarefa"
        onKeyDown={enterToSubmit}
        onChange={handleText}
        value={submit}
      />
      <small style={{ fontSize: 13, alignSelf: 'center', color: "red"}}>{message}</small>
      <button id="buttonAdd" onClick={submitTextToAdd}>
        +
      </button>
    </div>
  );
}

export default AddTask;
