import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { MensClothing } from "./MensClothing";
import { ProductDetails } from "./ProductDetails";
import { ProductsComponent } from "./ProductsComponent";
import { ShoppingCategories } from "./ShoppingCategories";
import { ShoppingError } from "./ShoppingError";
import { ShoppingHome } from "./ShoppingHome";
import './ShoppingIndex.css';
import { ShoppingLogin } from "./ShoppingLogin";
import { WomensClothing } from "./WomenClothing";

export function ShoppingIndex(){
    return(
        <div className="container-fluid"> 
        <BrowserRouter>
        <header className="d-flex justify-content-between bg-dark text-white p-2 ">
            <div>
            <span style={{fontWeight:'bold', fontSize:'22px'}}>Shopper.</span>
            </div>
            <div>
            <span className="me-3"><Link to="home">Home</Link></span>
                    <span className="me-3"><Link to="men">Mens</Link></span>
                    <span className="me-3"><Link to="women">Women</Link></span>
                    <span className="me-3">Kids</span>
                    <span className="me-3"><Link to="categories">Categories</Link></span>
           
            </div>
            <div>
            <Link to="login"><span className="bi bi-person me-3"></span></Link>
            <span className="bi bi-heart me-3"></span>
            <span className="bi bi-cart4 me-3"></span>
            </div>
        </header>
        <section style={{height:"400px"}} className="mt-2">
            <Routes>
            <Route path="/" element={<ShoppingHome />} />
                    <Route path="/home" element={<ShoppingHome />} />
                    <Route path="/men" element={<MensClothing />} />
                    <Route path="/women" element={<WomensClothing />} />
                    <Route path="/categories" element={<ShoppingCategories/>} />
                    <Route path="/products/:category" element={<ProductsComponent/>} />
                    <Route path="/details/:id" element={<ProductDetails />} />
                    <Route path="/login" element={<ShoppingLogin/>} />
                    <Route path="/error" element={<ShoppingError />} />
                    <Route path="*" element={<code>Page you requested - Not Found</code>} />
                    
            </Routes>
            </section>  
            <footer className="row p-3 bg-dark text-white m-1">
                <div className="col">
                <ul className="list-unstyled">
                   <li>Contact Us</li>
                   <li>FAQs</li>
                   <li>Size Guide</li>
                   <li>Shipping & Returns</li>
                   </ul>
                </div>
                <div className="col">
                <ul className="list-unstyled">
                   <li>Contact Us</li>
                   <li>FAQs</li>
                   <li>Size Guide</li>
                   <li>Shipping & Returns</li>
                   </ul>
                    </div>
                    <div className="col">
                    <ul className="list-unstyled">
                   <li>Contact Us</li>
                   <li>FAQs</li>
                   <li>Size Guide</li>
                   <li>Shipping & Returns</li>
                   </ul>
                    </div>
                    <div className="col">
                    <ul className="list-unstyled">
                   <li>Contact Us</li>
                   <li>FAQs</li>
                   <li>Size Guide</li>
                   <li>Shipping & Returns</li>
                   </ul>
                    </div>
                </footer> 
                </BrowserRouter>
        </div>
    )
}