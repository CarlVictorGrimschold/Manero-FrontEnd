import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import LoginView from './components/view/LoginView'
import RegisterView from './components/view/RegisterView'
import AccountCreated from './components/partials/AccountCreated'
import Homepageview from './components/view/homepageview'
import Login2 from './contexts/AuthContext'
import PaymentMethod from './views/Components/Victor/PaymentMethod'
import AddANewCard from './views/Components/Victor/AddANewCard'
import EditCard from './views/Components/Victor/EditCard'
import Myprofileview from './components/view/MyProfileView'
import FeaturedView from './views/Components/Kevin/FeaturedView'
import BestSellerProducts from './views/Components/Kevin/BestSellerProducts'
import BestSellerview from './views/Components/Kevin/BestSellerView'
import PaymentmethodeSite from './components/view/Paymentmethodview'
import EditProfileView from './components/view/EditprofileView'
import AddANewPromocode from'./views/Components/Victor/AddANewPromocode' 
import PromoCode from'./views/Components/Victor/PromoCode'
import CategoryView from './views/Components/Kevin/CategoryView'
import MyAddressView from './components/view/MyAddressView'
import AddAddressView from './components/view/AddAddressView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginview" element={<LoginView/>} />
        <Route path="/registerview" element={<RegisterView />} />
        <Route path="/accountcreated" element={<AccountCreated/>} />
        <Route path="/myprofile" element={<Myprofileview/>} />
        <Route path="/homepageview" element={<Homepageview/>}/>
        <Route path='loginview' element={<Login2/>}/>
        <Route path='/PaymentMethod' element={<PaymentMethod/>}/>
        <Route path='/AddANewCard' element={<AddANewCard/>}/>
        <Route path='/EditCard' element={<EditCard/>}/>
        <Route path='/ViewAllFeatrued' element={<FeaturedView/>}/>
        <Route path='/BestSeller' element={<BestSellerProducts/>}/>
        <Route path='/ViewAllBestSeller' element={<BestSellerview/>}/>
        <Route path ="/paymentmethodsite" element={<PaymentmethodeSite/>}/>
        <Route path="/editeprofileview" element={<EditProfileView/>}/>
        <Route path="/AddANewPromocode" element ={<AddANewPromocode/>}/> 
        <Route path="PromoCode" element = {<PromoCode/>}/>
        <Route path='/Categoryview' element = {<CategoryView/>}/>
        <Route path="/myaddressview" element={<MyAddressView/>} />
        <Route path="/addaddressview" element = {<AddAddressView/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
