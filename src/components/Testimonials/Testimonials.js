import React, { Fragment } from 'react';
import Circles from '../Hero/Circles';
import yelp from '../../assets/img/yelp-2.png'
import google from '../../assets/img/google-2.png'
import fb from '../../assets/img/fb-2.png'
import CardTestimonial from './CardTestimonial';

const Testimonials = ({background = "back_white"}) => {
    return ( 
        <Fragment>
            <div className={`container ${background}`}>
                <div className='services'>
                    <div className='services_fluid'>
                        <div className='services_title'>
                            <h3 className='subtitle'>Testimonial</h3>
                            <h2 className='title'>From getting started</h2>
                            <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet.</p>
                        </div>
                        <div className='services_grid_testimonials'>
                            <CardTestimonial 
                                source={yelp}
                                text="Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. "
                            />
                            <CardTestimonial 
                                source={google}
                                text="Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. "
                            />
                            <CardTestimonial 
                                source={fb}
                                text="Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. "
                            />
                        </div>
                    </div>
                    <ul className='list-unstyled shape-group-19'> 
                        <Circles shape="shape shape-6" animation ="zoomIn" circle="circle c-pink" time={500}/>
                    </ul>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Testimonials;