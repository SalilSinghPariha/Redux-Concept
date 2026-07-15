import { useSelector, useDispatch } from "react-redux"
import { destinationClick } from "../redux/slice/destinationSlice"

function DestinationList(){
    const destinationList = useSelector((state)=>
    state.destinationStore.destination
)

const dispatch = useDispatch()

console.log(destinationList)
return destinationList.map((destination, index)=>{
    return(
        <div className="text-center row border-bottom"
        key={index}
  >
            <div className="col-8 pt-2">
                {destination.name}
                 </div>
                <div className="col-4">
                    <button className="btn btn-success form-control m-1"
                    onClick={()=>dispatch(destinationClick(destination))}
                    >
                        Details
                    </button>
                </div>
        </div>
    )
})
}

export default DestinationList