import { createSlice } from "@reduxjs/toolkit";
import { addTodoAPI, deleteTodoApi, updateTodoApi,toggleTodoApi } from "../actions/todoAction";

const initialState = {
   listTodo: [] 
}

const todoSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
     
       addTodo(state, action) {
         state.listTodo.push(action.payload);
     },
   },
   extraReducers: builder => {
      
    },

    
})

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;