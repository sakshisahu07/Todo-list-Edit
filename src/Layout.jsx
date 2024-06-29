import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="service">Service</Link>
            <Link to="contact">Contact</Link>
            <Link to="nopage">Nopage</Link>


            <hr size="3" color="danger"/>
                <Outlet/>
            <hr size="3" color="danger"/>
                www.mycompany.com 2024

        </>
    )
}
export default Layout;