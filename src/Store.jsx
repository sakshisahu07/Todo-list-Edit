

import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./ColorSlice"

const store=configureStore({
    reducer:{
        mycolor:myreducer,
    }
})
export default store;

