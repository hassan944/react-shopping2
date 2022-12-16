import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { ProductInsert } from "./ProductInsert";
import { useFormik } from "formik";
import { ProductDetails } from "./ProductDetails";
import { ProductEdit } from "./ProductEdit";


export function ProductsIndex()
    {
        const [products, setProducts] = useState([]);
        

      useEffect(()=>{
     axios.get("http://localhost:4000/products")
     .then(response=>{
        setProducts(response.data);
     })
      },[])

        function handleDeleteClick(e){

            axios.delete(`http://localhost:4000/deleteproduct/${e.currentTarget.value}`);
            alert ("Record delete");

        }

        return(
            <div className="container-fluid">
            <BrowserRouter>
            <h2>Products Index</h2>
            <div className="mb-3">
            <Link to="/insert" className="btn btn-primary">New Product</Link>
            </div>
           <div className="row">
            <div className="col-5">
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th className="colSpan-3">Actions</th>
                </tr>
            </thead>
            <tbody>
             {
                products.map(product=>
                   <tr key={product.ProductId}>
                    <td>{product.Name}</td>
                    <td>
                        <Link to={'/details/' + product.ProductId} className="btn btn-info"><span className="bi bi-eye-fill"></span></Link>
                    </td>
                    <td>
                        <Link to={'/editProduct/'+product.ProductId+'/'+product.Name+'/'+product.Price+'/'+product.Rating} className="btn btn-warning"><span className="bi bi-pen"></span></Link>
                    </td>
                    <td>
                        <button value={product.ProductId} onClick={handleDeleteClick} className="btn btn-danger"><span className="bi bi-trash"></span></button>
                    </td>
                   </tr> 
                    )
             }
            </tbody>
          
           </table>
            </div>
            <div className="col-7">
           <Routes>
            <Route path="/insert" element={<ProductInsert/>} />
            <Route path="/details/:id" element={<ProductDetails />} />
            <Route path="/editProduct/:id/:name/:price/:rating" element={<ProductEdit/>}/>
           </Routes>
            </div>
           </div>
          
            </BrowserRouter>
            </div>
        )
    }
