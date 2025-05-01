import React, { createContext, useContext } from 'react'

  export const TodoContext= createContext({
    todos:[
        {
        id:Date.now(),
        
        todo:"Todo msg" ,
        completed : false ,
    }],
addTodo: (todo) => {} ,
updateTodo : (id , todo) => {} ,
deleteTodo : (id) => {}  ,
ToggleComplete : (id) => {}
 })
   
  export  const TodoProvider =  TodoContext.Provider
  export  const useTodo = () => {
    return useContext(TodoContext)
  }

  