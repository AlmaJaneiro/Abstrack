import React from 'react';


const CardPortfolio = ({project, title, tags = ""}) => {
    return ( 
        <div className='portfolio_card'>
            <div className='portfolio_card_thumbnail'>
                <img src={project} />
            </div>
            <div className='portfolio_card_content'>
                <h2>{title}</h2>
                <p>{tags}</p>
            </div>
        </div>
     );
}
 
export default CardPortfolio;