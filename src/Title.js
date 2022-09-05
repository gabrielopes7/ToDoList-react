import React, { useEffect } from "react";

function Title() {

  useEffect(()=>{
    document.getElementById("inputSetTitle").value = localStorage.getItem("title")
  },[])

  function handleText(event){
    const titleToDo = event.target.value;
    localStorage.setItem("title", titleToDo);
  }


  return (
    <div id="title">
      <input
        id="inputSetTitle"
        type="text"
        maxLength={20}
        placeholder="Título"
        onChange={handleText}
      ></input>
    </div>
  );
}

export default Title;
