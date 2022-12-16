import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { NriHome } from "./NriBanking/NriHome";
import { NriLogin } from "./NriBanking/NriLogin";
import { NriRegister } from "./NriBanking/NriRegister";
import { PersonalHome } from "./PersonalBanking/PersonalHome";
import { PersonalLogin } from "./PersonalBanking/PersonalLogin";
import { PersonalRegister } from "./PersonalBanking/PersonalRegister";


export function HdfcIndex()
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <h1>HDFC BANK</h1>
            <nav>
            <span><Link to="/personal">Personal</Link> </span>
            <span>|</span>
            <span><Link to="/nri">NRI</Link> </span>
            </nav>
            <hr/>
            <Routes>
            <Route path="/personal" element={<PersonalHome/>}>
            <Route path="plogin" element={<PersonalLogin />} />  
            <Route path="pregister" element={<PersonalRegister/>}/>
            </Route>
            <Route path="/nri" element={<NriHome/>}>
            <Route path="nlogin" element={<NriLogin/>}/>
            <Route path="nregister" element={<NriRegister/>}/>

            </Route>
            </Routes>
            
            </BrowserRouter>

        </div>
    )
}