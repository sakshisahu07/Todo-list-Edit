
import Bhopal from "./Bhopal";
import Cybrom from "./Cybrom";

const College=(props)=>{
    if(props.myval){
        return(
            <>
            <Bhopal/>
            </>
        )
    }
    else{
        return(
            <>
            <Cybrom/>
            </>
        )
    }
}
export default College;