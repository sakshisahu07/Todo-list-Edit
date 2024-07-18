import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";



const Contact=()=>{
    const {id}=useParams
    const navigate=useNavigate();
    setTimeout(()=>{
        navigate("/about")
    },5000);
    return(
      <>
      <h1>Contact uss!{id}</h1>
      </>
    )
  }
  export default Contact;