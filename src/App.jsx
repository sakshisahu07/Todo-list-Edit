import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTask,compTask,deltask } from "./todoSlice";
const App=()=>{
    const mytask=useSelector((state)=>state.todolist.task);
    const[val,setVal]=useState("");
    const dispatch=useDispatch();
    const taskAdd=()=>{
        dispatch(addTask({id: Date.now(),task:val,status:"uncomplete"}));
        setVal("")
    }
    const recdel=(id)=>{
       dispatch(deltask(id))
    }
    const recComp=(id)=>{
        dispatch(compTask(id))
    }
    let sno=0
    const ans=mytask.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.status=="complete"? key.task}<span style={{color:"red",textDecoration:"line through"}}></span></td>
               <td> <button onClick={()=>{recdel(key.id)}}>Delete</button></td>
               <td>
                <button onClick={()=>{recComp(key.id)}}>Complete Task</button>
               </td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>To Do App</h1>
        Enter Task:
        <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
        <button onClick={taskAdd}>Add</button>
       
        <hr size="4" color="blue"/>
        <table border="1" width="400">
            <tr>
                <th>Sno</th>
                <th>Task</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default App;


