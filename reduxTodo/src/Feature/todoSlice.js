import { createSlice, nanoid } from "@reduxjs/toolkit";


const  initialState = {
    todos:[{
        id: 1,
        word:'Chandan'
    }]
}

export  const todoSlice = createSlice({
    name : 'todo' ,
    initialState ,
    reducers :{
        addTodo: (state , action) => {
            const todo={
                id : nanoid() ,
                word: action.payload
            }
            state.todos.push(todo)
        } , 
        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => (
                todo.id !== action.payload
            ))
        } , 
        updateTodo: (state, action) => {
            const { id, word } = action.payload;
            state.todos = state.todos.map((todo) =>
                todo.id === id ? { ...todo, word } : todo
            );
        }
    }
})
export const {addTodo, removeTodo , updateTodo} =todoSlice.actions

export default todoSlice.reducer