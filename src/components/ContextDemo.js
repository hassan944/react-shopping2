import { useContext } from "react"
import React from "react";

let userDetailsContext = React.createContext(null);

export function ContextDemo(){

    return(
        <div className="container-fluid bg-dark text-white p-2">
          <userDetailsContext.Provider value={{UserName:"john"}}>
          <h2>Context Demo Index</h2>  
          <Section />
          </userDetailsContext.Provider>
        </div>
    )
}

export function Section(){

    const userDetails = useContext(userDetailsContext);

    return(
        <div className="m-3 p-3 bg-warning">
           <h3>Section Component - {userDetails.UserName}</h3>
           <MainComponent/>
        </div>
        
    )
}

export function MainComponent(){

    const userDetails = useContext(userDetailsContext);
    return(
        <div className="m-3 p-3 bg-primary">
            <h3>Main Component - {userDetails.UserName} </h3>
            
        </div>
    )
}