
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./CounterSlice";

const App=()=>{
  const count=useSelector((state)=>state.mycounter.cnt);
  const dispatch= useDispatch();
  return(
    <>
    <h1>Welcome to Counter App</h1>
    <button onClick={()=>{dispatch(increment())}}>Increment</button>
    <h1>{count}</h1>
    <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}
export default App;