import React, { Fragment } from 'react';
import Cases from '../Cases/Cases';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Landing = () => {
    return ( 
        <Fragment>
            <Hero />
            <Services /> 
            <Projects />
            <Cases />
            <Testimonials />
        </Fragment>
     );
}
 
export default Landing;