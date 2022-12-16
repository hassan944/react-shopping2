import { useContext } from "react"
import { MainComponent } from "./MainComponent"

export function Section(){

    const userDetails = useContext(userDetailsContext);

    return(
        <div className="m-3 p-3 bg-warning">
           <h3>Section Component - {userDetails.UserName}</h3>
           <MainComponent/>
        </div>
        
    )
}