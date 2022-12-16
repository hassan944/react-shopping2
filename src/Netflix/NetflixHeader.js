import './NetflixHeader.css';
export function NetflixHeader(){
    return (
        <header className="d-flex p-4 justify-content-between">
            <div>
                <span className="brand">NETFLIX</span>
            </div>
            <div className="d-flex">
                <select className="form-select me-2">
                    <option>Language</option>
                    <option>English</option>
                    <option>हिन्दी</option>
                </select>
                <button className="btn btn-danger">Signin</button>
            </div>
        </header>
    )
}