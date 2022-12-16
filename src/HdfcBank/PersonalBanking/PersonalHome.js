import { Link, Outlet } from "react-router-dom";

export function PersonalHome(){
    return(
        <div>
            <h2>Personal Home </h2>
            <nav>
                <span><Link to="plogin">Login</Link> </span>
                <span>|</span>
                <span><Link to="pregister">Register</Link> </span>
            </nav>
            <hr/>
            <Outlet/>
        </div>
    )
}