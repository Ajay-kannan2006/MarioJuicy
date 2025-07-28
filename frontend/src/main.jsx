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
import Home from './home.jsx'
import FoodMenu from './foodmenu.jsx'
import Myorders from './myorders.jsx'
import Feedback from './Feedback.jsx'
import PrivateRoute from './Components/privateRoute.jsx'
import EditProfile from './HomeScreen/Edit-profile.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>}></Route>
        <Route path='/food_menu' element={<PrivateRoute><FoodMenu/></PrivateRoute>}></Route>
        <Route path='/edit-profile' element={<PrivateRoute><EditProfile/></PrivateRoute>}></Route>
        <Route path='/my_orders' element={<PrivateRoute><Myorders/></PrivateRoute>}></Route>
        <Route path='/feedback' element={<PrivateRoute><Feedback /></PrivateRoute>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}

    {/* <St /> */}
    {/* <Ajay /> */}
    {/* <MenuBar /> */}
    
  </StrictMode>,
)
