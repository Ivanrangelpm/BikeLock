import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <>

      <Navbar />
      <Home />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
