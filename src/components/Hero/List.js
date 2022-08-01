import React from 'react';


const List = ({shape, animation, source} ) => {
    return ( 
        <li className={`${shape}`}>
            <div className={`animate__animated ${animation}`}  style={{animationDuration: '1s'}}>
                <img src={source} />
            </div>
        </li> 
     );
}
 
export default List;