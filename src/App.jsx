

// this is the exapmple of useeffect//


import { useEffect, useState } from "react";


const App=()=>{


  const[cnt,setCnt]=useState(0);


useEffect(()=>{
  setTimeout(()=>{
    setCnt(cnt+1);
  },5000)
},[])



return(
  <>
  <h1> this is there method of use effect {cnt}</h1>
  </>
)


}

export default App;



//this is the method  of use effect and the use state effect //

const App=()=>{
 const[cnt,setCnt]=useState(0)
 const[multi,setMulti]=useState(2)


useEffect(()=>{
  setMulti(cnt*2)
},[cnt])



 return(
  <>
 <h1> this is the effentn method {cnt}</h1>
 <h1> this is the multiplication {multi}</h1>
 <button onClick={()=>{setCnt(cnt+1)}}>CLICK HERE</button>
  </>
 )
}

export default App;

// ====================================================================================================

import { useState, useEffect } from "react"
import axios from "axios"
const App=()=>{
  const [mydata, setMydata]=useState ([]);
  const loadData=()=>{
    let url="https://jsonplaceholder.typicode.com/todos/";
    axios.get(url).then((res)=>{
      setMydata(res.data);
    });
  }
  useEffect(()=>{
    loadData();
  },[])

  let status="";
  const ans=mydata.map((key)=>{
    if(key.completed==true){
      status="TRUE"
    }
    else{
      status="false"
    }
  return(
    <>
    <tr>
      <td>{key.userId}</td>
      <td>{key.id}</td>
      <td>{key.id}</td>
      <td>{status}</td>
    </tr>
    </>
  )
})
return(
  <>
  <h1>Welcome to cybrom</h1>
  <table>
    <tr>
      <th>User ID</th>
      <th>ID</th>
      <th>Title</th>
      <th>Completed</th>
    </tr>
    {ans}
  </table>
  </>
)
}
export default App;

