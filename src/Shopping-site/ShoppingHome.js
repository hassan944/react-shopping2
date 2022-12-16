import { Link } from "react-router-dom";
export function ShoppingHome(){
    return(
        <div className="row">
            <div className="col">
            <div className="card">
                <img src="images/jacket 1.jpg" className="card-img-top" style={{height:'300px'}} />
                <div className="card-footer text-center">
                <button className="btn btn-info w-100">Men's</button>
                </div>

            </div>

            </div>
            <div className="col">
            <div className="card">
                <img src="images/pars 1.jpg" className="card-img-top" style={{height:'300px'}} />
                <div className="card-footer text-center">
                <button className="btn btn-success w-100">Women's</button>
                </div>

            </div>

            </div>
            <div className="col">
            <div className="card">
                <img src="images/cloths 1.jpg" className="card-img-top" style={{height:'300px'}} />
                <div className="card-footer text-center">
                <button className="btn btn-warning w-100">Kid's</button>
                </div>

            </div>

            </div>
        </div>
    )
}