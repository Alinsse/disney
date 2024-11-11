import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Result } from "../pages/result";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home/>} />
                <Route path="/result" element={<Result/>} />  
               
            </Routes>
        </BrowserRouter>
    )
}

export default Router;