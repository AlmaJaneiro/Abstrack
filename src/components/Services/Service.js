import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

const Service = () => {
    const { card} = useParams();
    return ( 
        <Fragment>
            <h2>Welcome to {card} </h2>
        </Fragment> 
    );
}
 
export default Service;