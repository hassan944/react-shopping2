import { useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function ShoppingLogin(){
const[userName, setUserName] = useState('');
const[password,setPassword] = useState('');
const[Cookies, setCookie,removeCookie] = useCookies();
const navigate = useNavigate();


     function handleUserChange(e){
        setUserName(e.target.value);
    }
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }
    function LoginClick(){
       if(password=="admin"){
        setCookie("username", userName );
        navigate("/categories");
       }else{
        navigate("/error");
       }
    }
    return(
        <div>
        <h1>UserLogin</h1>
        <dl>
            <dt>User Name</dt>
            <dd><input type="text" onChange={handleUserChange} /> </dd>
            <dt>Password</dt>
            <dd><input type="password" onChange={handlePasswordChange} /> </dd>
        </dl>
        <button onClick={LoginClick} className="btn btn-info">Login</button>
        </div>
    )
}