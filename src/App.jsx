

// this is the exapmple of useeffect//


// import { useEffect, useState } from "react";
// const App=()=>{
//   const[cnt,setCnt]=useState(0);
// useEffect(()=>{
//   setTimeout(()=>{
//     setCnt(cnt+1);
//   },5000)
// },[])
// return(
//   <>
//   <h1> this is there method of use effect {cnt}</h1>
//   </>
// )
// }
// export default App;




//this is the method  of use effect and the use state effect //

const App=()=>{
 const[cnt,setCnt]=useState(0)
 const[multi,setMulti]=useState(2)


useEffect(()=>{
  setMulti(cnt*2)
},[cnt])
 return(
  <>
 <h1> this is the useeffect method {cnt}</h1>
 <h1> this is the multiplication {multi}</h1>
 <button onClick={()=>{setCnt(cnt+1)}}>CLICK HERE</button>
  </>
 )
}

export default App;




