import React, { Fragment } from 'react';
import CasesCard from './CasesCard';
import Icon1 from '../../assets/img/icon-7.png'
import Icon2 from '../../assets/img/icon-8.png'
import Icon3 from '../../assets/img/icon-9.png'
import Icon4 from '../../assets/img/apple.png'

const Cases = ({background = 'back_dark'}) => {
    return ( 
        <Fragment>
            <div className={`container ${background}`}>
                <div className='services'>
                    <div className='services_fluid'>
                        <div className='text_center'>
                            <h3 className='subtitle'>Featured Case Study</h3>
                            <h2 className='title'>Design startup movement</h2>
                            <p>
                                In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus.
                            </p>
                        </div>
                        <div className='services_grid_cases'>
                            <CasesCard 
                                icon={Icon1}
                                time="15 +"
                                text="Years of operation"
                            /> 
                            <CasesCard 
                                icon={Icon2}
                                time="200 +"
                                text="Projects deliverd"
                            /> 
                            <CasesCard 
                                icon={Icon3}
                                time="100 +"
                                text="Clients"
                            /> 
                            <CasesCard 
                                icon={Icon4}
                                time="3 +"
                                text="Years of operation"
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Cases;