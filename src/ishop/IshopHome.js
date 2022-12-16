import { Link } from "react-router-dom";


export function IshopHome(){
    return(
        <div>
            <h2>Shopping Home</h2>
            <span><Link to="/register">New User Register</Link></span>
            <span>|</span>
            <span><Link to="/login">Existing User Login</Link></span>
        </div>
    )
}
