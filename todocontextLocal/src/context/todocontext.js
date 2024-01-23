import { createContext, useContext} from "react"

export const todocontext = createContext({
    todos:[
        {
            id:1,
            todo: "To Do msg",
            completed: false,
        }
    ],
    
})

export const useTodo = () =>{
    return useContext(todocontext)
}

export const Todoprovider = todocontext.Provider