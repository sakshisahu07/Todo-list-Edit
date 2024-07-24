


import { useContext, useState } from "react";
import { mybgContext } from "./ColorContext";
const App=()=>{
  const[txtval,setTxtval]=useState("");
  const{color,setColor}=useContext(mybgContext);
  return(
    <>
    <h1>helloooo! My BGColor Appp!</h1>
    Enter Color:<input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>
    <button onClick={()=>{setColor(txtval)}}>Change Color</button><br/><br/>
    <div style={{width:"400px",height:"300px",border:"2px solid grey", backgroundColor:color}}></div>
    </>
  )
}
export default App;