import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const About=()=>{
    const {myid}=useParams();
    const navigate=useNavigate();
    const goToHome=()=>{
        navigate("/contact")
    }
    return(
      <>
      <h1>About us!!{myid}</h1>
      <button onClick={goToHome}>Click here</button>
      </>
    )
  }
  export default About;