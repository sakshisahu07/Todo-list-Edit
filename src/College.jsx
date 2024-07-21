
import { useContext } from "react";
import { myContext } from "./App";

const College=()=>{
    const {user}= useContext(myContext)
    return(
      <>
      <h1>My College:{user}</h1>
      </>
    )
  }
  export default College;