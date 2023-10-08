import {createContext,useContext} from "react"

//creating context and exporting it
export const TodoContext=createContext({
    //setting by default values of todo
    //values of todo will be used in another file
    todos:[
        {
        id:1,
        todo:" Todo msg",
        completed:false,
    },
    //next todos will be added here {},{},{} etc...
    ],
    //function which will add todo . it is declared here but defined in App.jsx or main.jsx
    addTodo:(todo)=>{},//adding todo will require todo
    updateTodo:(id, todo)=>{},//updating todo will require id and todo
    deleteTodo:(id)=>{},//deleting todo will require only id
    toggleComplete:(id)=>{}// it's funcionalities is that when we click on complete mark button then line over that todo will appear
})


export const useTodo=()=>{
    return useContext(TodoContext);
    //useContext()--> app kis sandarbh ke bare me baat karna chahte hai
    //Here we are taking about TodoContext 
    //it may be LoginContext, SignupContext  etc...
}


//exporting the provider
export const TodoProvider=TodoContext.Provider
