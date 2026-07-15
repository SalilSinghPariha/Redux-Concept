import {configureStore} from "@reduxjs/toolkit"
import { counterReducer } from "./slice/counterSlice"
import { destinationSliceReducer } from "./slice/destinationSlice"

export const store = configureStore({
    reducer:{
       counterStore: counterReducer,
       destinationStore: destinationSliceReducer
       
    },
})

console.log(store.getState())
// we are exporting counter reducer and now assigning it here in main store