import { Link ,Outlet} from "react-router-dom";



const Layout=()=>{
    const myval=800
    return(

      <>
      <Link to="home">Home</Link>
      <Link to="about/500">About</Link>
      <Link to={"contact/"+myval}>Contact</Link>

        <hr size="4" color="red"/>

        <Outlet/>

        <hr size="4" color="red"/>
        www.mycompany.com
      </>
    )
  }
  export default Layout;