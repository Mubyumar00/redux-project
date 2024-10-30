import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer



const me = {
    firstname: "Mubee",
    lastname: "Umar"
}

// const firstname1 = me.firstname   --> both same way of getting the contents of the variable me .

// const first = {firstname} = me ---> just like the dot notation, this helps you access the properties of firtname using another method.