// slice will be combination of reducer and action

import { createSlice } from "@reduxjs/toolkit";

const initialState = {count:10}

export const counterSlice = createSlice({
    name:"counter",
    initialState: initialState,
    reducers:{
        increment:(state)=>{
                   state.count+=1
        },

         decrement:(state)=>{
                   state.count-=1
        },
         incrementMultiplier:(state,action)=>{
                   state.count+=Number(action.payload)
        },
         decrementMultiplier:(state,action)=>{
                   state.count-=Number(action.payload)
        },

        resetCounter:(state)=>{
            state.count=10
        }
    }
})

export const {increment,decrement,incrementMultiplier,decrementMultiplier,resetCounter}= counterSlice.actions
export const counterReducer = counterSlice.reducer

// if we observe here we ar ehaving reducers whereas in
//  store we are having reducer
// state here is not centralized state it's within current slice