import React from "react";

export class LoginClassComponent extends React.Component
{
constructor(){
    super();
}
Title = "User Login";

Loginclick(){
    alert("Welcome to delhi");
}
render(){
    return(
         <div className="container-fluid">
            <h3>{this.Title}</h3>
           <dl>
            <dt>User Name</dt>
            <dd><input type="text" /></dd>
            <dt>Password</dt>
            <dd><input type="password" /></dd>
           </dl>
           <button onClick={this.Loginclick}>Login</button>
         </div>
        )
    
}
    
}