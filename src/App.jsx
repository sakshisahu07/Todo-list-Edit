import { useContext } from "react";
import { myloginContext } from "./LoginContext";
import AuthUser from "./AuthUser";
import UnauthUser from "./UnauthUser.jsx";
const App=()=>{
  const {user}=useContext(myloginContext);
  return(
    <>
    <h1>My Login App</h1>
    {user.auth ? <AuthUser/>  : <UnauthUser/>}
    </>
  )
}
export default App;