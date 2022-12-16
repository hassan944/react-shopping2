import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie'

export function ShoppingCategories(){
    const [categories, setCategories] = useState([]);
    const [userName, setUserName] = useState('');
    const[Cookies,setCookie,removeCookie] = useCookies();
    const navigate = useNavigate();
    useEffect(()=>{
       if(Cookies["username"]==undefined){
        navigate ("/login");
       }else{
        fetch("http://fakestoreapi.com/products/categories")
        .then(response=>response.json())
        .then(data=>{
            setCategories(data);
        });
        setUserName(Cookies["username"])
       }
},[]);
     
     function LogoutClick(){
        removeCookie("username");
        navigate("/login");
     }
    return(
        <div className="d-flex justify-content-between">
         <div className="w-50">
         <ul className="list-unstyled">
            {
                categories.map(category=>
                    <li className="btn btn-dark mb-2 w-25 d-block" key={category}> <Link to={"/products/" + category}>{category}</Link> </li>
                    )
            }
          </ul>
         </div>
         <div>
            <h3>{userName} | <button onClick={LogoutClick} className="btn btn-link">Signout</button> </h3>
         </div>
        </div>
    )
}