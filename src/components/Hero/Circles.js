import React, { Fragment, useState } from 'react';

const Circles = ({shape, animation, circle, time = 1000}) => {
    const [ready, setReady] = useState(false);
    const setTime = (time) =>{
        setTimeout(() => {
            setReady(true)
        }, time);
    }
    setTime(time);
        return (
            (ready) ? (
                <li className={`${shape}`}>
                    <div className={`animate__animated ${animation}`}  style={{animationDuration: '1s'}}>
                        <div className={`${circle}`}></div>
                    </div>
                </li>  
            ) : 
            ( 
                <Fragment></Fragment>
            )
        ); 
    
}
 
export default Circles;