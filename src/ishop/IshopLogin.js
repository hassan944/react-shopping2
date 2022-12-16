import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import  { useCookies } from 'react-cookie';
import { useEffect } from "react";

export function IshopLogin(){

    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();
    const formik = useFormik({
        initialValues: {
            UserId:"",
            Password:""
        },
        onSubmit: (values)=>{
            axios.get("http://localhost:4000/customers")
            .then(response=>{
                for(var customer of response.data){
                    if(customer.UserId==values.UserId && customer.Password==values.Password) {
                        setCookie("userid", values.UserId);
                        navigate("/categories");
                        break;
                    } else {
                        navigate("/error");
                    }
                }
            })
        }
    })

    useEffect(()=>{
        if(cookies["userid"]) {
            navigate("/categories");
        }
    },[])
    return(
        <div>
            <h2>Customer Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input name="UserId" onChange={formik.handleChange} value={formik.values.UserId} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input name="Password" onChange={formik.handleChange} value={formik.values.Password} type="password"/></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
            </form>
            <p>
                <Link to="/register">New User?</Link>
            </p>
        </div>
    )
}
