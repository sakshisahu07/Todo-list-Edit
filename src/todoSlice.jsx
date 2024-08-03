import { createSlice } from "@reduxjs/toolkit";
const todoSlice=createSlice({
    name:"todolist",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            state.task.push(actions.payload);
        },
        delrec:(state,actions)=>{
            state.task(actions.payload)
        }
    }
})
export default todoSlice.reducer;
export const {addTask,delrec}=todoSlice.actions;

