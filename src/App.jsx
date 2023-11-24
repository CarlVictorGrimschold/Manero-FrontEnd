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
import Myprofileview from './components/view/MyProfileView'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginview" element={<LoginView/>} />
        <Route path="/registerview" element={<RegisterView />} />
        <Route path="/accountcreated" element={<AccountCreated/>} />
        <Route path="/myprofile" element={<Myprofileview/>} />
        <Route path="/homepageview" element={<Homepageview/>} />
        <Route path='loginview' element={<Login2/>}/>
        <Route path='/PaymentMethod' element={<PaymentMethod/>}/>
        <Route path='/AddANewCard' element={<AddANewCard/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
