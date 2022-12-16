import React from "react";


export class ClassApiDemo extends React.Component
{
    constructor(){
        super();
        this.state = {
            categories : []
        }
    }
    componentDidMount(){
        fetch("http://fakestoreapi.com/products/categories")
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                categories : data
            })
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>Categories</h2>
                <ol>
                    {
                        this.state.categories.map(category=>
                            <li key={category}>{category}</li>
                            )
                    }
                </ol>
            </div>
        )
    }
}