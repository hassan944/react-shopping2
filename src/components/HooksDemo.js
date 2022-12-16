import { useState } from "react";
import { useEffect } from "react"

export function SuccessComponent(){
    useEffect(()=>{
        alert("Success Component Requested");
       return(()=>{
        alert("Success component will unmount")
       })
    },[]);
    return(
        <h2>Login Success..</h2>
    )
}

export function ErrorComponent(){
    useEffect(()=>{
        alert("Error Component Requested");
       return(()=>{
        alert("Error component will unmount")
       })
    },[]);
    return(
        <h2>Invalid Credentials</h2>
    )
}

export function HooksDemo(){

    const [msg, setMsg] = useState();

    function LoginClick(){
        var username = "john";
        if(username=="john"){
          setMsg(<SuccessComponent />)  
        }else{
            setMsg(<ErrorComponent/>)
        }
    }

    return(
        <div className="container-fluid">
            <h2>Hooks Demo</h2>
            <button onClick={LoginClick}>Login</button>
            <p>{msg}</p>

        </div>
    )
}