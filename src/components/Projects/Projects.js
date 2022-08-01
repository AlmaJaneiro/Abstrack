import React, { Fragment } from 'react';
import Circles from '../Hero/Circles';
import List from '../Hero/List';
import circle1 from '../../assets/img/circle-2.png'
import project1 from '../../assets/img/project-1.png'
import project2 from '../../assets/img/project-2.png'
import project3 from '../../assets/img/project-3.png'
import project4 from '../../assets/img/project-4.png'
import project5 from '../../assets/img/project-5.png'
import project6 from '../../assets/img/project-6.png'
import CardPortfolio from './CardPortfolio';

const Projects = ({background = "back_light"}) => {
    return ( 
        <Fragment>
            <div className={`container ${background}`}>
                <div className='services'>
                    <div className='services_fluid'>
                        <div className='services_title'>
                            <h3 className='subtitle'>Our Project</h3>
                            <h2 className='title'>Some of our<br /> finest work.</h2>
                        </div>
                        <div className='services_grid_portfolio'>
                            <CardPortfolio
                                project={project1}
                                title ="Creative Agency"
                                tags="Branding Website App"
                            />
                            <CardPortfolio
                                project={project2}
                                title ="Digital Marketing"
                                tags="Logo, Website, Mobile"
                            />
                            <CardPortfolio
                                project={project3}
                                title ="Digital Agency"
                                tags="Website UI/UX"
                            />
                            <CardPortfolio
                                project={project4}
                                title ="Plan Management"
                                tags="Branding Website Mobile"
                            />
                            <CardPortfolio
                                project={project5}
                                title ="Social Engagement"
                                tags=" Branding Design Copy"
                            />
                            <CardPortfolio
                                project={project6}
                                title ="Web Application"
                                tags=" Logo, Website, Mobile"
                            />
                        </div>
                    </div>
                    <ul className='list-unstyled shape-group-19'> 
                        <Circles shape="shape shape-5" animation ="zoomIn" circle="circle c-purple" time={500}/>
                        <List shape="shape shape-4" animation ="zoomIn" source={circle1} />
                    </ul>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Projects;