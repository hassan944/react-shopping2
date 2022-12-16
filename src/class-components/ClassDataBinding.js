import React from "react";


export class ClassDataBinding extends React.Component
{
    constructor(){
        super();
        this.state = {
            Name: '',
            City: '',
            Stock: false
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
    }

    handleNameChange(e){
        this.setState({
            Name: e.target.value,
            City: this.state.City,
            Stock: this.state.Stock
        })
    }
    handleCityChange(e){
        this.setState({
            Name: this.state.Name,
            City: e.target.value,
            Stock: this.state.Stock
        })
    }
    handleStockChange(e){
        this.setState({
            Name: this.state.Name,
            City: this.state.City,
            Stock: e.target.checked
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <h2>Register Product</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={this.handleNameChange}/></dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={this.handleCityChange}>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dt>Stock</dt>
                    <dd><input type="checkbox" onChange={this.handleStockChange} /> Available</dd>
                </dl>
                <h3>Product Details</h3>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.state.Name}</dd>
                    <dt>City</dt>
                    <dd>{this.state.City}</dd>
                    <dt>Stock</dt>
                    <dd>{(this.state.Stock==true)?"Available":"Out of Stock"}</dd>
                </dl>
            </div>
        )
    }
}
