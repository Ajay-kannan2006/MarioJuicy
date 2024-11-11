import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import St from './componentsSt.jsx'
import Ajay from './Ajay.jsx'
import Footer from './HomeScreen/footer.jsx'
import MenuBar from './Components/MenuBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <St /> */}
    {/* <Ajay /> */}
    <MenuBar />
  </StrictMode>,
)
