// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import LoginPage from './Component/Login';
import Sign from './Component/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AboutUs from './Component/Aboutus';
import ContactUs from './Component/Contactus';
import PopularServices from './Component/PopularServices';
import HireWorkerPage from './Component/HireWorkerPage';
import PaymentPage from './Component/PaymentPage';
import ClientTestimonials from './Component/Workers';
import WorkerProfilePage from './Component/WorkerProfilePage';
import CustomerReview from './Component/CustomerReview';
import Feedback from './Component/Feedback';
import FeedbackPage from './Component/FeedbackPage';
import WhyChoose from './Component/Blog';
import Navbar from './Component/AdminNavbar';
import RegistrationPage from './Component/WorkerRegistration';
import ShowcasePage from './Component/ShowcasePage';
import AdminHome from './Component/AdminHome';
import ServiceSelection from './Component/ServiceSelection';
import CitySelector from './Component/CitySelection';
import ServiceSelector from './Component/ServiceSelector';
import HomeStyleFoodForm from './Component/HomeStyleFoodForm';
import DishWashingForm from './Component/DishWashingForm';
import CustHome from './Component/CustomerHome';
import AdminDashboard from './Component/AdminDashboard';
import DataService from './Component/DataService';
import Profile from './Component/Profile';
import Dashboard from './Component/Dashboard';
import UserManagement from './Component/UserManagement';
import ServicesManagement from './Component/ServicesManagement';
import ServiceDashboard from './Component/ServiceDashboard';
import WorkerManagement from './Component/WorkerManagement';
import BookingPage from './Component/BookingPage';
function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/Login" element={<LoginPage/>} />
                    <Route path="/Registration" element={ <Sign/>} />
                    <Route path="/Aboutus" element={<AboutUs/>}/>
                    <Route path="/Contactus" element={<ContactUs/>}/>
                    <Route path='/PopularServices' element={<PopularServices/>}/>
                    <Route path="/HireWorker" element={<HireWorkerPage/>}/>
                    <Route path="/Payment" element={<PaymentPage/>}/>
                    <Route path="/Worker" element={<ClientTestimonials/>}/>
                    <Route path="/Workerprofile" element={<WorkerProfilePage/>}/>
                    <Route path="/Review" element={<CustomerReview/>}/>
                    <Route path="/Feedback" element={<Feedback/>}/>
                    <Route path="/FeedbackPage" element={<FeedbackPage/>}/>
                    <Route path="/Blog" element={<WhyChoose/>}/>
                    <Route path="/AdminNavbar" element={<Navbar/>}/>
                    <Route path="/WorkerRegistration" element={<RegistrationPage/>}/>
                    <Route path="/Showcase" element={<ShowcasePage/>}/>
                    <Route path="/Admin" element={<AdminHome/>}/>
                    <Route path="/Selection" element={<ServiceSelection/>}/>
                    <Route path="/city" element={<CitySelector/>}/>
                    <Route path="/ServiceSelector" element={<ServiceSelector/>}/>
                    <Route path="/HomeStyle" element={<HomeStyleFoodForm/>}/>
                    <Route path="/Dishwashing" element={<DishWashingForm/>}/>
                    <Route path="/CustomerHome" element={<CustHome/>}/>
                    <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
                    <Route path="/DataService" element={<DataService/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                    <Route path="/UserManagement" element={<UserManagement/>}/>
                    <Route path="ServicesManagement" element={<ServicesManagement/>}/>
                    <Route path="/ServiceDashboard" element={<ServiceDashboard/>}/> 
                    <Route path="/WorkerManagement" element={<WorkerManagement/>}/>
                    <Route path="/BookingPage" element={<BookingPage/>}/>
          </Routes>
      </Router>
      {/* <PopularServices/> */}
    </div>
  );
}

export default App;
