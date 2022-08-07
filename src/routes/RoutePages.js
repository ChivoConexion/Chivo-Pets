import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Graphics from "../pages/Graphics";
import Form from "../pages/Form";
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Error404 from "../pages/Error404";
import ResetPassword from "../pages/ResetPassword";


export const RoutePages = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/signIn" element={<SignIn/>}/>
            <Route exact path="/signUp" element={<SignUp/>}/>
            <Route exact path="/resetPassword" element={<ResetPassword/>}/>
            <Route exact path="/graphics" element={<Graphics/>}/>
            <Route exact path="/form" element={<Form/>}/>
            <Route exact path="*" element={<Error404/>}/>
        </Routes>
    )
}
