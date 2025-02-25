import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import St from './componentsSt.jsx'
import Ajay from './Ajay.jsx'
import Footer from './HomeScreen/footer.jsx'
import MenuBar from './Components/MenuBar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login.jsx'
import Signup from './SignUp.jsx'
import About from './about.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}

    {/* <St /> */}
    {/* <Ajay /> */}
    {/* <MenuBar /> */}
    
  </StrictMode>,
)
