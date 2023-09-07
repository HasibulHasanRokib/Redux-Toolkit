import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/book/bookSlice";


const store=configureStore({
    reducer:{
        bookReducer:bookReducer,
    }
})

export default store