import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({align ,Icon ,title ,text,linkT}) => {
    return ( 
        <div className='card' style={{alignItems: align}}>
            <div className='services_style_2'>
                <div className="card_thumbnail">
                    <img src={Icon} />
                </div>
                <div className="card_content">
                    <h3>{title}</h3>
                    <p>{text} </p>
                    <Link to={`/service/${linkT}`}>Link to</Link>
                </div>
            </div>
        </div> 
     );
}
 
export default Card;