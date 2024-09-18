import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Home from '../componets/pages/Home/Home.js';
import Header from '../componets/Header/Header.js';
import Footer from '../componets/Footer/Footer.js';
import Courses from '../componets/pages/Courses/Courses.js';
import Plans from '../componets/pages/Plans/Plans.js';
import AboutUs from '../componets/pages/AboutUs/AboutUs.js';
import ContactUs from '../componets/pages/ContactUs/ContactUs.js';
import NotFound from '../componets/pages/NotFound/NotFound.js';

function LayoutRoutes() {
  return (
    <Router>
<Header/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Plans/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/*' element={<NotFound/>}/>


            </Routes>
        <Footer/>

</Router>

 )
}

export default LayoutRoutes
