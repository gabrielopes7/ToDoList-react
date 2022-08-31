import React from "react";
import './styles/Body.css'

function Body(){

    function add(){
        console.log("Clicou")
    }

    return(
        <div id="container">
            <div id="title"></div>
            <div id="cardBody"><input type="checkbox"></input><label>Essa é uma tarefa</label></div>
            <div id="addDo"><button onClick={add}>+</button></div>
        </div>
    );
}


export default Body;