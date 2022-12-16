import { Link, Outlet } from "react-router-dom"
export function NriHome(){
    return(
        <div>
            <h1>NRI Home </h1>
            <nav>
            <span><Link to="nlogin">Login</Link></span>
            <span>|</span>
            <span><Link to="nregister">Register</Link> </span>
           
            </nav>
            <hr/>
            <Outlet/>
            </div>
    )
}