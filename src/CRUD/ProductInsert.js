import { useFormik } from "formik";
import axios from "axios";

export function ProductInsert()
{
    const formik = useFormik({
        initialValues:{
            ProductId:0,
            Name:"",
            Price:0,
            Rating:1
        },
        onSubmit:(values)=>{
            axios.post("http://localhost:4000/addproduct",values);
            alert("Record Inserted");
        }
    })
    return(
        <div>
           <form onSubmit={formik.handleSubmit}>
           <h3>Add New Product</h3>
            <dl>
                <dt>Product Id</dt>
                <dd><input type="text" value={formik.values.ProductId} onChange={formik.handleChange} name="ProductId" /></dd>
                <dt>Name</dt>
                <dd><input type="text" name="Name" value={formik.values.Name} onChange={formik.handleChange}  /></dd>
                <dt>Price</dt>
                <dd><input type="text" name="Price" value={formik.values.Price} onChange={formik.handleChange} /></dd>
                <dt>Rating</dt>
                <dd><input type="number" name="Rating" value={formik.values.Rating} onChange={formik.handleChange}  min="1" max="5" step="0.1" /></dd>
            </dl>
            <button className="btn btn-primary">Add Product</button>
           </form>
        </div>
    )
}