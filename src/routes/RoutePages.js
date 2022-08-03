import { Routes, Route} from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import ResetPassword from "../pages/ResetPassword";
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


export const RoutePages = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/SignIn" element={<SignIn/>}/>
            <Route exact path="/SignUp" element={<SignUp/>}/>
            <Route exact path="/ResetPassword" element={<ResetPassword/>}/>
            <Route exact path="*" element={<Error404/>}/>
        </Routes>
    )
}
