import { createContext, useContext } from "react";

export const todoContext = createContext({
    todo: [
        {
        id: 1,
        todo: "todo msg",
        completed: false,
        }
    ],
    addTodo : (todo) => {
        console.log("Added",todo);
    },
    updateTodo: (id,todo) => {console.log("Updatedd",id, todo)},
    deleteTodo: (id) => {console.log("Deleted",id)},
    toggleTodo: (id) => {console.log("Toggled",id)}
})

export const TodoProvider = todoContext.Provider

export const useTodo = () => {
    return useContext(todoContext)
}