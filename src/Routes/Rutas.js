import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import Service from '../components/Services/Service';
import Services from '../components/Services/Services';

const Rutas = () => {
    return ( 
        <Fragment>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index path="/" element={<Landing />} />
                    <Route path="/service" element={<Services />} />
                    <Route path="/service/:card" element={<Service />} />
                    <Route path="/projects" element={<Projects background='back_white' />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
     );
}
 
export default Rutas;