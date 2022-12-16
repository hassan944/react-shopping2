import { useState } from "react"

import "./ClassBinding.css";

export function ClassBinding(){
    const [users, setUsers] = useState([{UserName:"john"}, {UserName:"john12"}, {UserName:"david"}]);
    const [userMsg, setUserMsg] = useState("");
    const [errorClass, setErrorClass] = useState("");
    const [elementStyle, setElementStyle] = useState("");

    function VerifyUser(e){
        for(var user of users){
            if(user.UserName==e.target.value){
                setUserMsg("User Name Taken - Try Another");
                setErrorClass("text-danger");
                setElementStyle("invalid-style");
                break;
            } else {
                setUserMsg("User Name Available");
                setErrorClass("text-success");
                setElementStyle("valid-style");
            }
        }
      }  return(
        <div className="container-fluid d-flex justify-content-center align-items-center ">
        <div className="w-25 border border-2 border-dark p-2" >
        <form>
        <h1>Register User</h1>
        
        <dl>
            <dt>User Name</dt>
            <dd><input type="text"  onChange={VerifyUser} className={elementStyle} /> </dd>
            <dd className={errorClass} >{userMsg}</dd>
            <dt>Password</dt>
            <dd><input type="password" className="form-control" /> </dd>
            <dt>Email</dt>
            <dd><input type="email" className="form-control"/> </dd>
        </dl>
        <button className="btn btn-dark w-100">Register</button>
      </form>
        </div>
        </div>
    )
}