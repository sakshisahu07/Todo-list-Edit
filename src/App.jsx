

// ====================useRef======================================================

// const App=()=>{
//   const myref= useRef(0);  ///data={current:0}
//   const display=()=>{
//     myref.current.style.backgroundColor="yellow"
//   }
//   return(
//     <>
//     <h1>Welcome to the City of lakes</h1>
//     <input type="text" ref={myref}/>
//     <button onClick={display}>Click here</button>
//     </>
//   )
// }
// export default App;

// ========================================================================================
import { useRef,useEffect,useState } from "react";
const App=()=>{
  const [mydata, setMydata]=useState("");
  const myref= useRef(0);    //myref={current:0}
  const txtRef= useRef(0);

  useEffect(()=>{
    myref.current=myref.current+1
  })

  const display=()=>{
    txtRef.current.style.backgroundColor="pink";
  }
  return(
    <>
    <h1>Welcome to bhopal!!!</h1>
    <textarea value={mydata} ref={txtRef} onChange={(e)=>{setMydata(e.target.value)}}/>
      <h1>Total Count: {myref.current}</h1>
      <button onClick={display}>Clickhere!!!</button>
    </>
  )
}
export default App;

