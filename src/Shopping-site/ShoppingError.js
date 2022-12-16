import { Link } from "react-router-dom"


export function ShoppingError(){


    return(
        <div>
            <h3 className="text danger">Invalid User Nmae/Password </h3>
            <Link to="/login">Try Again</Link>
        </div>
    )
}