import { useSelector } from "react-redux"

function DestinationFact(){
const selectedDestination = useSelector((state)=>
    state.destinationStore.destinationSelected)

if(selectedDestination == undefined)
{
    return (
        <div className="text-center text-warning pt-4">
            Select A Destination!!
            </div>
    )

}
else {
    return (
        <div className="text-center border p-3 m-3">
          <h4 className="text-success">
            {selectedDestination.name}
          </h4>
  Days:{selectedDestination.days} && 
     Exitement News: {selectedDestination.fact}
        </div>
    )

}
}

export default DestinationFact