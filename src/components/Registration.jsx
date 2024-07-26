


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const Registration=()=>{
    const[input,setInput]=useState({});
    const handlechange=(e)=>{
        let name=e.target.value;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        setInput(values=>({...values,[name]:value}));
    }
    const handleclick=(e)=>{
        e.preventDefault();
        let url="http://localhost:3000/user";
        axios.post(url,input).then((res)=>{
           alert("You are successfully regitered!!!");
           setInput({
            name:"",
            userid:"",
            email:"",
            pwd:"",
            repwd:""
           })
        })
    }
    return(
        <>
        <h1>Registration page</h1>
        <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handlechange}/> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Userid</Form.Label>
        <Form.Control type="text" name='userid' value={input.userid} onChange={handlechange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email' value={input.email} onChange={handlechange}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name='pwd' value={input.pwd} onChange={handlechange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Re-Enter Password</Form.Label>
        <Form.Control type="password" name='repwd' value={input.pwd} onChange={handlechange}/>
      </Form.Group>

      <Button onClick={handleclick} variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </>
    )
}
export default Registration;