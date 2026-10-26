import {createSlice, nanoid} from "@reduxjs/toolkit"

const intialState = {
    todos: [{id: 1, text: "learn redux"}]
}

export const todoSlice = createSlice({
    name: "todo",
    intialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: () =>{}
    }
})