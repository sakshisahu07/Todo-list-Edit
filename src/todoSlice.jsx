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
        deltask:(state,actions)=>{
            state.task=state.task.filter(item=>item.id!=actions.payload)
        },
        compTask:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload)
                {
                    state.task[i].status="complete";
                }
            }
        }
    }
})
export default todoSlice.reducer;
export const {addTask,deltask,compTask}=todoSlice.actions;

