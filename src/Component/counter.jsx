import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "../redux/slice/counterSlice"

function counter(){
    const selectCount = useSelector((state)=>
        state.counterStore.count)
    const dispatch = useDispatch()
return(
    <div className="m-4 rounded border text-center">
         <h1 className="text-warning pt-3">Counter App</h1>
    <hr />
    <div className="pb-2">
    <span className="badge bg-secondary fs-1 p-3 mb-3">
        {selectCount}
    </span>
    <div>
        <button onClick={()=>dispatch(decrement())}
        className="btn btn-danger mx-2">
            Decrement
            </button>
             <button onClick={()=>dispatch(increment())} 
             className="btn btn-success mx-2">
            Increment
            </button>
    </div>
    </div>
    </div>
)
}

export default counter