import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../assets/img/icon-1.png'
import Icon2 from '../../assets/img/icon-2.png'
import Icon3 from '../../assets/img/icon-3.png'
import circle1 from '../../assets/img/circle-2.png';
import Circles from '../Hero/Circles';
import List from '../Hero/List';
import Card from './Card';

const Services = () => {
    return ( 
        <Fragment>
            <div className={`container`}>
                <div className='services'>
                    <div className='services_fluid'>
                        <div className='services_title'>
                            <h3 className='subtitle'>What We Can Do For You</h3>
                            <h2 className='title'>Services we can <br /> help you with</h2>
                        </div>
                        <div className='services_cards'>
                            <Card 
                                align="flex-end" 
                                Icon ={Icon}
                                title ="Design"
                                text="Simply drag and drop photos and videos into your workspace to automatically " 
                                linkT="design"
                            /> 
                            <Card 
                                align="center" 
                                Icon ={Icon2}
                                title ="Development"
                                text="Simply drag and drop photos and videos into your workspace to automatically " 
                                linkT="development"
                            /> 
                            <Card 
                                align="flex-start" 
                                Icon ={Icon3}
                                title ="Marketing"
                                text="Simply drag and drop photos and videos into your workspace to automatically " 
                                linkT="marketing"
                            /> 
                        </div>
                    </div>
                    <ul className='list-unstyled shape-group-19'> 
                        <Circles shape="shape shape-1" animation ="zoomIn" circle="circle c-yellow" time={500}/>
                        <Circles shape="shape shape-3" animation ="zoomIn" circle="circle c-r-c3" time={1000}/>
                        <Circles shape="shape shape-2" animation ="zoomIn" circle="circle c-r-c2" time={1500}/>
                        <List shape="shape shape-4" animation ="zoomIn" source={circle1} />
                    </ul>
                </div>
            </div>
        </Fragment> 
    );
}
 
export default Services;