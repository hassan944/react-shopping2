import { useState } from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export function IshopCategories(){
    const [cookies, setCookie, removeCookie] = useCookies();
    const [UserId, setUserId] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        if(cookies["userid"]==undefined){
            navigate("/login");
        } else {
            setUserId(cookies["userid"]);
        }
    },[]);

    function Signout(){
        removeCookie("userid");
        navigate("/login");
    }

    return(
        <div>
            <h2>Shop Categories   -  Hello ! {UserId} | <button onClick={Signout} className='btn btn-link'>Signout</button> </h2>
        </div>
    )
}
