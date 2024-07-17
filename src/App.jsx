
// ====================Conditional Rendering===================================================

import College from "./College";

const App=(props)=>{
  return(
    <>
    <h1>Welcome to this World</h1>
    <College myval={false}/>
    </>
  )
  }
  export default App;