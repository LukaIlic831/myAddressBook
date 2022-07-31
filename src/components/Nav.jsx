import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav>
            {
                location.pathname == '/' ?
                    <div className="nav__settings">
                        <FontAwesomeIcon icon="fa-solid fa-gear" className='nav__settings--icon' onClick={() => navigate('/settings')} />
                    </div>
                    :
                    <div className="nav__settings">
                        <FontAwesomeIcon icon="fa-solid fa-angle-left" className='nav__back--icon' onClick={() => navigate('/')} />
                    </div>
            }
            <div className="nav__logo--wrapper">
                <h1 className='nav__logo'>My Address Book</h1>
            </div>
        </nav>
    );
}

export default Nav;
