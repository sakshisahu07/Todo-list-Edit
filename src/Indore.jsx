

import {myContext} from "./CourseContext"
import { useContext } from "react";
const Indore=()=>{
    const {course,setCourse}=useContext(courseContext);
    return(
        <>
        
        <h1>Welcome to Indore city!!!{course}</h1>
        <button onClick={()=>{setCourse("MCA")}}>click here</button>
        </>
    )
}
export default Indore;