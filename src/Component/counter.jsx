import { useSelector, useDispatch } from "react-redux"
import { decrement, decrementMultiplier, increment, incrementMultiplier } from "../redux/slice/counterSlice"
import { useState } from "react"

function counter(){
    const [multiplier, setMutliplier] = useState(10)
    const selectCount = useSelector((state)=>
        state.counterStore.count)
    const dispatch = useDispatch()
return(
    <div className="m-4 rounded border text-center">
         <h1 className="text-warning pt-3">Counter App</h1>
    <hr />
    <div className="row pb-2">
    <span className=" col-4 offset-4 badge bg-secondary fs-1 p-3 mb-3">
        {selectCount}
    </span>
    <div className="pb-2 col-6">
    <div className="border p-2">
        <p className="text-success h3">
            Basic Counter
        </p>
        <button onClick={()=>dispatch(decrement())}
        className="btn btn-danger m-2">
            Decrement
            </button>
             <button onClick={()=>dispatch(increment())} 
             className="btn btn-success m-2">
            Increment
            </button>
    </div>
    </div>
      <div className="pb-2 col-6">
    <div className="border p-2">
        <p className="text-success h3">
            Multiplier
        </p>
        <input type="text"
        placeholder="Multiplier...."
        className="form-control my-2" 
        value={multiplier}
        onChange={(e)=> setMutliplier(e.target.value)}/>
        <button onClick={()=>dispatch(decrementMultiplier(multiplier))}
        className="btn btn-danger m-2">
            Decrement
            </button>
             <button onClick={()=>dispatch(incrementMultiplier(multiplier))} 
             className="btn btn-success m-2">
            Increment
            </button>
    </div>
    </div>
    </div>
    </div>
)
}

export default counter