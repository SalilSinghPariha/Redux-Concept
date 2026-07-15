import { createSlice } from "@reduxjs/toolkit"

const initialState = 
{
     destination: [
        {
        name:"Salil Singh",
        days:"7",
        fact:"It's Party Time"
    },
     {
        name:"Shishu Singh",
        days:"8",
        fact:"It's Pool Time"
    },
     {
        name:"Singh Parihar",
        days:"10",
        fact:"It's Farming Time"
    },
],

destinationSelected : null
}

const destinationSlice = createSlice({
    name: "Destination",
    initialState:initialState,
    reducers:{
        destinationClick:(state, action)=>{
            state.destinationSelected=action.payload
            console.log(action)
        },
    
        resetDestination:(state)=>{
            state.destinationSelected=null
        }
    }

})

export const destinationSliceReducer = destinationSlice.reducer

export const { destinationClick, resetDestination} = destinationSlice.actions