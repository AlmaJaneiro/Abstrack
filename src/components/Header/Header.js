import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-2.svg'

const Header = () => {
    const [hover, setHover] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            const isTop = window.scrollY < 250;
            if(isTop !== true)
                setHover(true);
            else
                setHover(false)
        };
        // clean up code
        window.removeEventListener('scroll', onScroll, (console.log("removed addLis")));
        window.addEventListener('scroll', onScroll);
        return function cleanup() { 
            window.removeEventListener('scroll', onScroll);
        }
    }, []);
    
    return ( 
        <Fragment>
            {/* ${(hover) ? 'header_container_hove' : '' } */}
            <header className={`header ${(hover) ? 'header_container_hove' : '' }`}>
                <div className='header_container'>
                    <div className='header_content'>
                        <div className='logo'>
                            <Link to="/">
                                <img src={logo} />
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
     );
}
 
export default Header;