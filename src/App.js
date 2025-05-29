import React from 'react';
import Navbar from './component/header/header'
import Footer from './component/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import WhatsApp from "./component/Whatsapp/WhatsApp";
import Home from './component/home/home'
import About from './component/about/about'
import Learn from './component/learn/learn'
import Contact from './component/contact/contact'


function App() {

  return (
    <>
      <Router>
        <ScrollToTop>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/learn' element={<Learn />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
            <WhatsApp />
        </ScrollToTop>
      </Router>
    </>
  );
}
export default App;


 // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <a
    //       className="App-link"
    //       href="#"
    //       rel="noopener noreferrer"
    //     >
    //       NEXINVENTIX TECHNOLOGY
    //     </a>
    //     <p>
    //       DESIGN - DEVELOPMENT - TRAINING - STORE
    //     </p>
    //     <marquee>
    //     <p>
    //       COMING SOON...
    //     </p>
    //     </marquee>
    //   </header>
    // </div>