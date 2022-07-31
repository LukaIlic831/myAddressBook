import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserInfo from './UserInfo';

const User = ({ users, selecteduser, setselecteduser }) => {

    const openUserInfo = (user) => {
        document.querySelector(".selected-user__block--wrapper").style.display = "flex";
        setselecteduser(user);
    }

    return (
        <>
            <UserInfo selecteduser={selecteduser} />
            {
                users?.map(user =>
                    <div className='user__card' data-testid="userCard" key={user.login.uuid} onClick={() => openUserInfo(user)}>
                        <div className="user__card--info">
                            <figure className='user__card--picture-wrapper'>
                                <img src={user.picture.thumbnail} className='user__card--picture' alt="" />
                            </figure>
                            <div className="user__card--firstname-lastname">
                                <span className='user__card--firstname'>{user.name.first}</span>
                                <span className='user__card--lastname'>{user.name.last}</span>
                            </div>
                            <div className="user__card--username">
                                <p>{user.login.username}</p>
                            </div>
                            <div className="user__card--email">
                                <p className='email'>{user.email}</p>
                                <FontAwesomeIcon icon="fa-solid fa-envelope" className='user__card--email-icon' />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default User;
