import {BrowserRouter, Routes,Route} from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPwd from "./pages/ForgotPwd";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/forgot-password" element={<ForgotPwd/>}></Route>

        </Routes>
        </BrowserRouter>
    );
}
export default App;