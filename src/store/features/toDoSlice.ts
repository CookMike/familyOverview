import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface Todo{
    id: string;

    title: string;
}

interface TodoState{
    todos: Todo[]
}

const initialState:TodoState={
    todos:[]
}

export const ToDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state, action: PayloadAction<{ title: string }>)=>{
            state.todos.push({
                id: nanoid(),
                title: action.payload.title,
            })
        },
        removeTodo:(state, action: PayloadAction<{ title: string, id: string}>)=>{
                state.todos.filter( todo => todo.id !== action.payload.id )
        }
    }
})

export default ToDoSlice.reducer
export const {addTodo, removeTodo} = ToDoSlice.actions
