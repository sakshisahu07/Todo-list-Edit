
// import Bhopal from "./Bhopal";
// import { myContext } from "./CourseContext";
// import { useContext } from "react";

// const App=()=>{
//   const [course,setCourse]=useContext(myContext);
//   return(
//     <>
//     <h1>Welcome to Cybrom Technology pvt ltd:{course}</h1>
//     <button onClick={()=>{setCourse("PGDCA")}}>Click here</button>
//     <Bhopal/>
//     </>
//   )
// }
// export default App;

import React, { useContext } from "react";  // Import React and useContext
import Bhopal from "./Bhopal";  // Import your component Bhopal
import { myContext } from "./CourseContext";  // Import your context
// Make sure myContext is properly defined and exported from CourseContext

const App = () => {
  const [course, setCourse] = useContext(myContext);  // useContext hook to consume context
  
  return (
    <>
      <h1>Welcome to Cybrom Technology Pvt Ltd: {course}</h1>
      <button onClick={() => { setCourse("PGDCA") }}>Click here</button>
      <Bhopal />  {/* Render your Bhopal component */}
    </>
  );
};

export default App;
