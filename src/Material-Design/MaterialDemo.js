import { Card, CardContent, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";

export function MaterialDemo(){
   
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("http://fakestoreapi.com/products")
        .then(response=>response.json())
        .then(data=>{
            setProducts(data);
        })
    },[]);

    return(
        <div className="container-fluid">
            <h2>Products Catalog</h2>
            <div className="d-flex flex-wrap">
                {
                    products.map(product=>
                        <Card style={{width:'200px', margin:'20px', padding:'10px'}}>
                          <CardMedia
                            component="img"
                            height="150"
                            image={product.image}
                            alt={product.price}
                            />
                            <CardContent>
                                <p>{product.title}</p>
                            </CardContent>
                        </Card>
                        )
                }
            </div>
        </div>
    )
}