
import React, {useState, createContext, useEffect} from 'react';


export const ContextAPI = createContext();


export function ContextState(props){
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const taskStorage = localStorage.getItem("tasks");
        if (taskStorage) {
          setTodoList(JSON.parse(taskStorage));
        }
      }, []);

    return(
        <ContextAPI.Provider value={[todoList, setTodoList]}>
            {props.children}
        </ContextAPI.Provider>

    );

}