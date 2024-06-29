import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Nopage from "./Pages/Nopage";


const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/nopage" element={<Nopage/>}/>

        </Route>

      </Routes>

    </BrowserRouter>
    </>
  )
}
export default App;