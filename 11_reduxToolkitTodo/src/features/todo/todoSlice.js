import { createSlice,nanoid } from "@reduxjs/toolkit";
//nanoid--> create unique id

const initialState={
    todos:[{id:1,text:"Hello World"}]
}

//creating slice. Note that slice is better version of reducer
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        //in redux-toolkit, function declrations as well as definition both are written in the same code
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id!==action.payload)
        },
    }
})

//exporting the reducers and we have to export individuals reducers
export const {addTodo,removeTodo}=todoSlice.actions;

export default todoSlice.reducer