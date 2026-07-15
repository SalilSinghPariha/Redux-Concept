import { useDispatch } from "react-redux"
import { resetCounter } from "../redux/slice/counterSlice"
import { resetDestination } from "../redux/slice/destinationSlice"


function ResetApp(){
    const dispatch = useDispatch()
    const resetCounterDestination = () =>
    {
        dispatch(resetCounter())
        dispatch(resetDestination())
    }
    return (
        <div className="text-center pt-4">
         <button className=" btn btn-danger"
         onClick={resetCounterDestination}
         >
            Reset App
         </button>
        </div>
    )

}

export default ResetApp