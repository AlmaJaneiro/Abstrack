import React, { Fragment } from 'react';
import List from './List';
import banner1 from '../../assets/img/banner-shape-1.png'
import banner2 from '../../assets/img/banner-shape-2.png'
import Circles from './Circles';
import { Link } from 'react-router-dom';

const Hero = () => {
    return ( 
        <Fragment>
            <div className='container'>
                <div className='hero'>
                    <div className='hero_fluid'>
                        <div className='hero_content'>
                            <h1 className='hTitle'>Technology & design studio</h1>
                            <Link className='btn btn-primary' to={`/projects`}>Link to</Link>
                        </div>
                    </div>
                    <ul className='list-unstyled shape-group-18'>
                        <List shape="shape shape-1" animation ="slideInRight" source={banner1} />
                        <List shape="shape shape-2" animation ="slideInLeft" source={banner2} />
                        <Circles shape="shape shape-3" animation ="slideInDown" circle="circle c-main" time={350}/>
                        <Circles shape="shape shape-4" animation ="zoomIn" circle="c-c2" time={500}/>
                        <Circles shape="shape shape-5" animation ="zoomIn" circle="c-c3" time={1000}/>
                        <Circles shape="shape shape-6" animation ="zoomIn" circle="circle c-c4" time={1500}/>
                        <Circles shape="shape shape-7" animation ="zoomIn" circle="circle c-c5" time={2000}/>
                    </ul>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Hero;