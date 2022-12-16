// Module -  LoginComponent

import React from "react";
import './LoginComponent.css';

export  function LoginComponent(prop) {
    return(
        <React.Fragment>
            <div className="container-fluid d-flex justify-content-center mt-3">
            <form className="border border-2 border-primary p-3 rounded rounded-3">
            <h2> <span className="bi bi-person-fill"> </span>{prop.title} </h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" className="form-control"/> </dd>
                <dt>Password</dt>
                <dd><input type="text" className="form-control"/> </dd> 
                <button className="btn btn-primary w-100">Login</button>
            </dl>
            </form>
            </div>




        </React.Fragment>
    );
}
