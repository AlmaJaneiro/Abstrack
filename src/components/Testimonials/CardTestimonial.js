import React from 'react';


const CardTestimonial = ({source,text}) => {
    return (  
    <div className='testimonials_card'>
        <div className='testimonials_card_thumbnail'>
            <img src={source} />
        </div>
        <div className='testimonials_card_content'>
            <h4>“{text}”</h4>
        </div>
    </div>
    );
}
 
export default CardTestimonial;