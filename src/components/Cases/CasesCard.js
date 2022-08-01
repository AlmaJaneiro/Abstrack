import React from 'react';

const CasesCard = ({icon, time, text}) => {
    return ( 
        <div className='cases_card'>
            
            <div className='cases_icon'>
                <img src={icon} />
            </div>
            <div className='cases_time'>
                <h4> {time} </h4>
            </div>
            <div className='cases_text'>
                <h5>{text}</h5>
            </div>
        </div>
     );
}
 
export default CasesCard;