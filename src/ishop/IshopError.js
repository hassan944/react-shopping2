import { Link } from "react-router-dom";

export function IshopError(){
    return(
        <div>
            <h2 className="text-danger">Invalid UserId / Password</h2>
            <Link to="/login">Try Again</Link>
        </div>
    )
}