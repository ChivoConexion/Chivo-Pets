import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import SignIn from '../pages/SignIn';


export const RoutePages = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/SignIn" element={<SignIn/>}/>
        </Routes>
    )
}
