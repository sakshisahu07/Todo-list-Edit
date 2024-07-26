import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";


const App=()=>{
  return(
    <>
    <h1>Welcome to my App</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="login" element={<Login/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;