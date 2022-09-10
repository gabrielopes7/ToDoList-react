import PropTypes from "prop-types"
import { useState } from "react";
import MyContext from "../context/context";


const Provider = ({children}) => {
  const [todoList, setTodoList] = useState([]);

  const contextValue = {
    todoList,
    setTodoList,
  }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node
}.isRequired

export default Provider