
import {createSlice} from "@reduxjs/toolkit"

export const counterSlice=createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        increment:(state)=>{
            state.count=state.count+1
        },
        incrementByValue:(state,action)=>{
            state.count=state.count+action.payload
        }
    }
});

export const {increment,incrementByValue}=counterSlice.actions;

export default counterSlice.reducer
