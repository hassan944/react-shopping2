import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { IshopCategories } from "./IshopCategories";
import { IshopError } from "./IshopError";
import { IshopHome } from "./IshopHome";
import { IshopLogin } from "./IshopLogin";
import { IshopRegister } from "./IshopRegister";


export function IshopIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="bg-dark text-white text-center p-2">
                <h2><span className="bi bi-cart4"></span> IShop - Smart Shopping</h2>
            </header>
            <section className="row mt-3">
               <nav className="col-3">
                  <Link className="btn btn-dark mb-2 w-100" to="/home">Home</Link>
                  <Link className="btn btn-dark mb-2 w-100" to="/login">Login</Link>
                  <Link className="btn btn-dark mb-2 w-100" to="/register">Register</Link>
                  <Link className="btn btn-dark mb-2 w-100" to="/categories">Categories</Link>
               </nav>
               <main className="col-9">
                  <Routes>
                     <Route  path="/" element={<IshopHome/>} />
                     <Route path="/home" element={<IshopHome/>} />
                     <Route path="/login" element={<IshopLogin />} />
                     <Route path="/register" element={<IshopRegister />} />
                     <Route path="/categories" element={<IshopCategories />} />
                     <Route path="/error" element={<IshopError/>} />
                  </Routes>
               </main>
            </section>
            </BrowserRouter>
        </div>
    )
}