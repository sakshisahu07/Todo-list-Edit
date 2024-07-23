import { createContext } from "react";
import { useState } from "react";

const myContext=createContext();
const CourseContext=({children})=>{
    const[course,setCourse]=useState("DCA");
    return(
        <>
        <myContext.Provider value={{course,setCourse}}>
            {children} 
        </myContext.Provider>
        </>
    )
}
export default CourseContext;
export {myContext};