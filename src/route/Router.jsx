import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Router } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
import Forgotpassword from '../components/ForgotPassword/Forgotpassword';
import Reset from '../components/ForgotPassword/Reset';
import Login from '../components/Login/Login';
import LandingPage from "../pages/LandingPage";
import  Hotels  from "../pages/Hotels";
import { Destinations } from "../pages/Destinations";
import { Bookings } from "../pages/Bookings";
import { Flights } from "../pages/Flights";

const RouterPage = () => {

return (
<Router>
<Routes>
<Route path="/" element={ <SignUp/> } />
<Route path="/login" element={ <Login/> } />
<Route path="/forgotpassword" element={ <Forgotpassword/> } />
<Route path="/reset" element={ <Reset/> } />
<Route path="/landingpage" element={ <LandingPage/> } />
<Route path="/hotels" element={ <Hotels /> } />
<Route path="/destinations" element={ <Destinations /> } />
<Route path="/bookings" element={ <Bookings/> } />
<Route path="/flights" element={ <Flights/> } />
</Routes> 
</Router>
)
}
export default RouterPage;