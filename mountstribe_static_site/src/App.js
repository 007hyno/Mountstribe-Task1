import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import './assets/css/navbarStyle.css'
import './assets/js/styles.js'

import { Navigate , Route, Routes } from 'react-router-dom';


import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Login from './pages/LoginPage'
import Blog from './pages/BlogPage'
import Store from './pages/StorePage'
import Contact from './pages/ContactPage'
import NotFound from './components/NotFound'


function App() {
  return (
    <div>
<Routes>

    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/contact' element={< Contact />}></Route>
    <Route exact path='/Blog' element={< Blog />}></Route>
    <Route exact path='/Store' element={< Store />}></Route>
    <Route exact path='/Login' element={< Contact />}></Route>
    <Route exact path='*' element={< NotFound />}></Route>

</Routes>

    </div>
  );
}

export default App
