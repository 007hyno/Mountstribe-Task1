import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import './assets/css/navbarStyle.css'
import './assets/js/styles.js'

import { Route, Routes } from 'react-router-dom';
  


import Home from './pages/HomePage.js'
import About from './pages/AboutPage.js'
import Login from './pages/LoginPage.js'
import Store from './pages/StorePage.js'
import Contact from './pages/ContactPage.js'
import NotFound from './components/NotFound.js'

//store
import Product from './pages/Products.js'

//components
import TermsAndConditions from './components/Footer/TermsAndConditions.js'
import PrivacyPolicy from './components/Footer/PrivacyPolicy.js'
import Policy from './components/Footer/Policy.js'


function App() {
  return (
    <div>
      <Routes>

        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route exact path='/Store' element={< Store />}></Route>
        <Route exact path='/Login' element={< Login />}></Route>

        {/* Store */}
        <Route exact path='/store/:id' element={< Product />}></Route>

        {/* Footers */}
        <Route exact path='/terms-and-conditions' element={< TermsAndConditions />}></Route>
        <Route exact path='/privacy-policy' element={< PrivacyPolicy />}></Route>
        <Route exact path='/policies' element={< Policy />}></Route>

        <Route exact path='*' element={< NotFound />}></Route>

        {/* <Route exact path='/Blog' element={< Blog />}></Route> */}
      </Routes>

    </div>
  );
}

export default App
