import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import LoginView from './components/view/LoginView'
import RegisterView from './components/view/RegisterView'
import AccountCreated from './components/partials/AccountCreated'
import Homepageview from './components/view/homepageview'
import Login2 from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginview" element={<LoginView/>} />
        <Route path="/registerview" element={<RegisterView />} />
        <Route path="/accountcreated" element={<AccountCreated/>} />
        <Route path="/homepageview" element={<Homepageview/>} />
        <Route path='loginview' element={<Login2/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
