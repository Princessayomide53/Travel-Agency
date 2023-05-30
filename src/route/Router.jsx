import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Router } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
import Forgotpassword from '../components/ForgotPassword/Forgotpassword';
import Reset from '../components/ForgotPassword/Reset';
import Login from '../components/Login/Login';

const RouterPage = () => {

return (
<Router>
<Routes>
<Route path="/" element={ <SignUp/> } />
<Route path="/login" element={ <Login/> } />
<Route path="/forgotpassword" element={ <Forgotpassword/> } />
<Route path="/reset" element={ <Reset/> } />
</Routes> 
</Router>
)
}
export default RouterPage;