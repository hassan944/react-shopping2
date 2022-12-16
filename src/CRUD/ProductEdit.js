import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function ProductEdit(){
    
    const params = useParams();
    const[products,setProducts]=useState([{}]);
   const formik=useFormik({
        initialValues:{
            ProductId:params.id,
            Name:params.name,
            Price:params.price,
            Rating:params.rating
        },
        onSubmit:(values)=>{
          axios.put(`http://localhost:4000/updateProduct/${params.id}`,values);
          alert("record updated successfully");
        }
    });
    useEffect(()=>{
          axios.get(`http://localhost:4000/details/${params.id}`)
          .then((response)=>{
              setProducts(response.data);
              formik.values.ProductId=response.data[0].ProductId;
              formik.values.Name=response.data[0].Name;
              formik.values.Price=response.data[0].Price;
              formik.values.Rating=response.data[0].Rating;
          })
     },[params.id]);
    return (
        <div className="container-fluid">
          <h2>Edit the product details</h2>
          <form onSubmit={formik.handleSubmit}>
          <dl>
                <dt>Product Id</dt>
                <dd><input type="text" name="ProductId" value={formik.values.ProductId} onChange={formik.handleChange} /></dd>
                <dt>Name</dt>
                <dd><input type="text" name="Name" value={formik.values.Name} onChange={formik.handleChange} /></dd>
                <dt>Price</dt>
                <dd><input type="text" name="Price" value={formik.values.Price} onChange={formik.handleChange} /></dd>
                <dt>Rating</dt>
                <dd><input type="number" name="Rating" value={formik.values.Rating} onChange={formik.handleChange} /></dd>
             </dl>
             <button className="btn btn-primary">Update Product</button>
          </form>
        </div>
    )
}