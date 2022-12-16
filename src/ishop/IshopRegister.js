import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export function IshopRegister(){

    const [customers, setCustomers] = useState([]);
    const [userError, setUserError] = useState('');
    const [isUserValid, setUserValid] = useState(false);

    const navigatge = useNavigate();

    const formik = useFormik({
        initialValues: {
            UserId: '',
            UserName:'',
            Password:'',
            Email: '',
            Mobile: ''
        },
        onSubmit: (values)=>{
            axios.post("http://localhost:4000/registercustomer",values);
            alert("Registered Successfully..");
            navigatge("/login");
        }
    });
    useEffect(()=>{
        axios.get("http://localhost:4000/customers")
        .then((response)=>{
            setCustomers(response.data);
        })
    },[]);

    function VerifyUserId(e){
        for(var customer of customers){
            if(customer.UserId==e.target.value){
                setUserError("User Id Taken - Try Another");
                setUserValid(false);
                break;
            } else {
                setUserError("User Name Available");
                setUserValid(true);
            }
        }
    }

    return(
        <div>
            <h2>Customer Register</h2>
            <form onSubmit={formik.handleSubmit}>
              <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={VerifyUserId} name="UserId" value={formik.values.UserId} onChange={formik.handleChange} /></dd>
                <dd className={(isUserValid==true)?'text-success':'text-danger'} >{userError}</dd>
                <dt>User Name</dt>
                <dd><input type="text" name="UserName" value={formik.values.UserName} onChange={formik.handleChange} /></dd>
                <dt>Password</dt>
                <dd><input type="password" name="Password" value={formik.values.Password} onChange={formik.handleChange} /></dd>
                <dt>Email</dt>
                <dd><input type="email" name="Email" value={formik.values.Email} onChange={formik.handleChange} /></dd>
                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile" value={formik.values.Mobile} onChange={formik.handleChange} /></dd>
              </dl>
              <button className="btn btn-primary">Register</button>
            </form>
            <p>
                <Link to="/login">Existing User?</Link>
            </p>
        </div>
    )
}
