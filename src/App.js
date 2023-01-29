
import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import CustomerViewChannel from './components/customer/ViewChannels'
import CustomerViewPlans from './components/customer/viewPlans'
import CustomerSubscribe from './components/customer/SubscribeChannel'
import CustomerViewSub from './components/customer/viewSubscriptions'
// importing login
import Login from './components/login/Login'
import Register from './components/login/SignUp'
import Logout from './components/login/Logout'
// importing promoter
import ViewChannels from './components/promoter/ViewChannels';
import AddChannel from './components/promoter/AddChannel'
import AddPlans from './components/promoter/AddPlans'
import ViewPlans from './components/promoter/Viewplans';
import Promoters from './components/promoter/Promoters';
import UpdatePlans from './components/promoter/UpdatePlans';
// importing transaction
import DeleteTransaction from './components/transaction/DeleteTransaction';
import Transaction from './components/transaction/Transaction';
import ViewTransaction from './components/transaction/ViewTransaction';
function App() {
  return (
    <Router>
    <div className='App'>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="logout" element={<Logout/>}/>

        <Route path="/viewChannels" element={<CustomerViewChannel/>}/>
        <Route path="/viewPlans" element={<CustomerViewPlans/>}/>
        <Route path="/subscribe" element={<CustomerSubscribe/>}/>
        <Route path="/viewSubscription" element={<CustomerViewSub />} />

        <Route path="/ViewChannelsPromoter" element={<ViewChannels />} />
        <Route path="/AddChannel" element={<AddChannel />} />
        <Route path="/AddPlans" element={<AddPlans/>} />
        <Route path="/viewplansPromoter" element={<ViewPlans />} />
        <Route path="/Promoters" element={<Promoters />} />
        <Route path="/UpdatePlans/:id" element={<UpdatePlans />} />
          
        <Route path="/deletetransaction" element={<DeleteTransaction />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/viewtransaction" element={<ViewTransaction />} />
      </Routes>
      </div>
      </Router>
  );
}

export default App;

