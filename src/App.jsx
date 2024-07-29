
import { useSelector,useDispatch } from "react-redux";
import { myinc,mydec } from "./CounterSlice";


const App=()=>{
  const counter=useSelector((state)=>state.mycounter.cnt);
  const mydis= useDispatch();
  return(
    <>
    <h1>Welcome to Counter App</h1>
    <button onClick={()=>{mydis(myinc())}}>Increment</button>
    <h1>{counter}</h1>
    <button onClick={()=>{mydis(mydec())}}>Decrement</button>
    </>
  )
}
export default App;

