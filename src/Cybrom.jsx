



import { useContext } from "react";
import { mycolorContext } from "./ColorContext";

const Cybrom=()=>{
    const {color}=useContext(mycolorContext)
    return(
      <>
      <h1>Welcome to Cybrom Technology pvt.ltd.!: {color}</h1>
      </>
    )
  }
  export default Cybrom;

