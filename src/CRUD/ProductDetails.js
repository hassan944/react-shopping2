import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";



export function ProductDetails()
{ 
    const [product, setProduct] = useState([{}]);
    const params = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:4000/details/${params.id}`)
        .then(response=>{
            setProduct(response.data);
        })

    },[params.id])

    return(
        <div>
            <h3>Product Details</h3>
            <dl>
                <dt>Name</dt>
                <dd>{product[0].Name}</dd>
                <dt>Price</dt>
                <dd>{product[0].Price } </dd>
                <dt>Rating</dt>
                <dd>
                    <span className="bi bi-star-fill text-success"></span>
                    {product[0].Rating }
                </dd>
            </dl>
        </div>
    )
}