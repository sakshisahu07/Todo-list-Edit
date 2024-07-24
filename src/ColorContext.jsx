





import { useState } from "react";
import { createContext } from "react";
const mybgContext=createContext();
const ColorContext=({children})=>{
    const[color,setColor]=useState("pink");
    return(
      <>
      <mybgContext.Provider value={{color,setColor}}>
        {children}
      </mybgContext.Provider>
      </>
    )
  }
  export default ColorContext;
  export {mybgContext};