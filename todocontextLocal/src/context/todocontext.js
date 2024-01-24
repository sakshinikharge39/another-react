import { createContext, useContext} from "react"

export const todocontext = createContext({
    todos:[
        {
            id:1,
            todo: "To Do msg",
            completed: false,
        }
    ],
    addTodo: (todo) =>  {},
    updatedTodo: (id, todo) =>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () =>{
    return useContext(todocontext)
}

export const TodoProvider = todocontext.Provider