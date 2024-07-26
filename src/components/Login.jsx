import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from 'axios';
const Login=()=>{
    const[uid,setUid]=useState("");
    const[pass,setPass]=useState("");

    const handleclick=(e)=>{
        e.preventDefault()
        let url=`http://localhost:3000/user/?userid=${uid}`
        axios.get(url).then((res)=>{

            if(res.data.length>=1){
                if(res.data[0].password==pass){
                    alert("Good!!!")
                }
                else{
                    alert("Invalid password");
                }
            }
            else{
                alert("Invalid user ID")
            }
        })
    }   
    return(
        <>
        <h1>Login page</h1>
        <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email Userid</Form.Label>
        <Form.Control type="text"  value={uid} onChange={(e)=>{setUid(e.target.value)}}/> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password"  value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
      </Form.Group>
      <Button onClick={handleclick} variant="primary" type="submit">
        Submit
      </Button>
      </Form>
        </>
    )
}
export default Login;