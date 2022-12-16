import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export function ProductDetails(){
    const params = useParams();
    const [product, setProduct] = useState({id:0,title:'',price:0,description:'',rating:{rate:0, count:0}});

    useEffect(()=>{
        fetch(`http://fakestoreapi.com/products/${params.id}`)
        .then(response=>response.json())
        .then(data=>{
            setProduct(data);
        })
    },[])

    return(
        <div>
            <h2>Product Details</h2>
            <div className="row">
              <div className="col-3">
                <img src={product.image} width="200" height="200"/>
              </div>
              <div className="col-3">
                <dl>
                    <dt>Title</dt>
                    <dd>{product.title}</dd>
                    <dt>Price</dt>
                    <dd>{product.price}</dd>
                    <dt>Rating</dt>
                    <dd> <span className="bi bi-star-fill text-success"></span> {product.rating.rate}</dd>
                </dl>
              </div>
              <div className="col-6">
                  <h4>Description</h4>
                  <p className="w-50" style={{textAlign:'justify'}}>{product.description}</p>
              </div>
            </div>
            <div>
                <Link to={'/products/' + product.category}>Back to Products</Link>
            </div>
        </div>
    )
}