import React from 'react'
import HomePage from './Pages/HomePage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import Products from "./Pages/Products.jsx"
import Header from './Components/Common/Header.jsx'
import Footer from './Components/Common/Footer.jsx'
import { BrowserRouter,Routes,Route  } from 'react-router-dom'
import Portfolio from './Pages/Portfolio.jsx'
import Contactpage from './Pages/ContactPage.jsx'
const App = () => {
  return (
    <>
    <BrowserRouter>
   <div className="sticky top-0 z-10">
     <Header />
   </div>
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contactpage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App