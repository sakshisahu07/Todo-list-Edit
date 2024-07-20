// import { BrowserRouter, Routes ,Route} from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Home";
// import About from "./About";
// import Placement from "./Placement";
// import Gallery from "./Gallery";
// import Contact from "./Contact";
// const App=()=>{
//     return(
//         <>
//         <BrowserRouter>
//         <Routes>
//         <Route path="/" element={<Layout/>}>
//         <Route index element={<Home/>}/>
//         <Route path="home" element={<Home/>}/>
//         <Route path="about" element={<About/>}/>
//         <Route path="placement" element={<Placement/>}/>
//         <Route path="gallery" element={<Gallery/>}/>
//         <Route path="contact" element={<Contact/>}/>
//         </Route>
//         </Routes>
//         </BrowserRouter>
//         </>
//     )
// }
// export default App;





// ============================================Ques 2nd===================================================

// const App=()=>{
//     return(
//         <>
//         <div style={{border:"2px solid black", backgroundColor:"yellow", width:"800px",height:"350px",borderRadius:"60%" }}>
//             <div style={{border:"2px solid black", backgroundColor:"blue", width:"500px",height:"200px",margin:"auto",marginTop:"80px"}}>
//                 <div style={{border:"2px solid black", backgroundColor:"red",width:"300px",height:"150px",borderRadius:"60%",margin:"auto",marginTop:"20px"}}>
//                     <div style={{fontSize:"30px",margin:"auto",marginTop:"40px",color:"white"}}><center>CYBROM</center></div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
// export default App;


// ==========================================Ques 3rd============================================================

// import axios from "axios";
// import { useState,useEffect } from "react";
// import { Table } from "react-bootstrap";
// const App=()=>{
//   const [mydata,setMydata]=useState([]);

//   const loadData=()=>{
//     let url="http://localhost:3000/employee";
//     axios.get(url).then((res)=>{
//       setMydata(res.data)
//     })

//   }
//   useEffect(()=>{
//     loadData()
//   },[])
//   const ans=mydata.map((key)=>{
//     return(
//       <>
//       <tr>
//         <td>{key.id}</td>
//         <td>{key.name}</td>
//         <td>{key.designation}</td>
//         <td>{key.department}</td>
//         <td>{key.salary}</td>

//       </tr>
//       </>
//     )
//   })
//   return(
//     <>
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Employee ID</th>
//           <th> Name</th>
//           <th>Designation</th>
//           <th>Department</th>
//           <th>Salary</th>

//         </tr>
//       </thead>
//       <tbody>
//         {ans}
//       </tbody>
//       </Table>
//     </>
//   )
// }
// export default App;
// ==================================Ques 4th====================================================

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// const App=()=>{


//   const [input,setinput]=useState({})

//   const handlechange=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;
//     setinput(values=>({...values,[name]:value}))
//   }

// const handleclick=()=>{
//   let url="http://localhost:3000/employee"
//   axios.post(url,input).then((res)=>{
//     alert(" Data successfully posted")
//     setinput({
//       id:"",
//       name:"",
//       designation:"",
//       department:"",
//       salary:"",
      
//     })
//   }).catch((err)=>{
//     console.log("error",err)
//   })
// }
//     return(
//       <>
//       <h1>Insert page</h1>
    
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Employee Id</Form.Label>
//         <Form.Control type="text" name='id' value={input.id}placeholder="Enter id" onChange={handlechange} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" name='name' value={input.name} placeholder="Enter name" onChange={handlechange}/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Designation</Form.Label>
//         <Form.Control type="text" name='designation' value={input.designation} placeholder="Enter designation" onChange={handlechange}/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Department</Form.Label>
//         <Form.Control type="text" name='department' value={input.department}placeholder="Enter department" onChange={handlechange} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Salary</Form.Label>
//         <Form.Control type="text" name='salary' value={input.salary}placeholder="Enter salary" onChange={handlechange} />
//       </Form.Group>
      
//       <Button variant="primary" type="submit" onClick={handleclick}>
//         Submit
//       </Button>
    
//       </>
//     ) 
//   }
//   export default App;

//   ===========================================================Ques 5th==================================
// import { useState } from "react";

// const App=()=>{
//   const [cnt,setCnt]=useState(0)
//   const myInc=()=>{
//     setCnt(cnt+15)
//   }
//   const myDec=()=>{
//     setCnt(cnt-15)
//   }
//   return(
//     <>
//     <h1>Welcome to my Counter App</h1>
//     <h2>My Count:{cnt}</h2>
//     <button onClick={myInc}>Increment</button>
//     <button onClick={myDec}>Decrement</button>
//     </>
//   )
// }
// export default App;


// ========================================6th======================================
// import { useState,useEffect } from "react"
// const App=()=>{
//     const[cnt,setCnt]=useState(0)
//     const[multi,setMulti]=useState(2)
   
//    useEffect(()=>{
//      setMulti(cnt*2)
//    },[cnt])
   
   
//     return(
//      <>
//     <h1> this is the effect method {cnt}</h1>
//     <h1> this is the multiplication {multi}</h1>
//     <button onClick={()=>{setCnt(cnt+1)}}>CLICK HERE</button>
//      </>
//     )
//    }
   
//    export default App;


// ===========================================7th===============================================

// import { useState } from "react";



// const Seventh=()=>{

//     const [roll,setroll]=useState("");
//     const [name,setname] =useState("");
//     const [phy,setphy] =useState("");
//     const [che,setche] =useState("");
//     const [math,setmath] =useState("");
//     const [eng,seteng] =useState("");
//     const [hindi,sethindi] =useState("");


//     const display=()=>{
//         /*let val={empno:empno,ta:ta,da:da,salary:salary};
//         alert(JSON.stringify(val));*/

//         let a=Number(phy)+Number(che)+Number(math)+Number(eng)+Number(hindi);
//         console.log(a);

//         let b=0;
//         if(a>60){
//             console.log("first")
//         }

//         else if(a<45 && a<60){
//             console.log("second")
//         }

//         else if(a<33 && a<45){
//             console.log("third")
//         }

//         else{
//             console.log("fail")
//         }



//         alert(b);
//     }



//     return(
//         <>
//         <input type="text" placeholder="rollno"  value={roll}  onChange={(e)=>{setroll(e.target.value)}}/>
//        <br/>
//        <input type="text" placeholder="name"  value={name}  onChange={(e)=>{setname(e.target.value)}}/>
//        <br/>
//        <input type="text" placeholder="phy"  value={phy}  onChange={(e)=>{setphy(e.target.value)}}/>
//        <br/>
//       <input type="text" placeholder="che"  value={che}  onChange={(e)=>{setche(e.target.value)}}/>
//        <br/> 
//        <input type="text" placeholder="math"  value={math}  onChange={(e)=>{setmath(e.target.value)}}/>
//        <br/> 
//        <input type="text" placeholder="eng"  value={eng}  onChange={(e)=>{seteng(e.target.value)}}/>
//        <br/> 
//        <input type="text" placeholder="hindi"  value={hindi}  onChange={(e)=>{sethindi(e.target.value)}}/>
//        <br/> 

//        <button onClick={display}>click here</button>
        
        
//         </>
//     )
// }

// export default Seventh;