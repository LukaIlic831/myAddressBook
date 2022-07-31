import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserInfo = ({ selecteduser }) => {

    function closeUserInfo() {
        document.querySelector(".selected-user__block--wrapper").style.display = "none";
    }

    return (
        <div className='selected-user__block--wrapper'>
            {
                selecteduser?.id &&
                <div className="selected-user__block">
                    <FontAwesomeIcon icon="fa-solid fa-xmark" className='x-mark' onClick={closeUserInfo} />
                    <div className="selected-user__main-info">
                        <div className="selected-user__first-info">
                            <figure className="selected-user__image--wrapper">
                                <img src={selecteduser.picture.thumbnail} className="selected-user__image" alt="" />
                            </figure>
                            <div className="selected-user__name">
                                <span className='selected-user__firstname' data-testid="first">{selecteduser.name.first}</span>
                                <span className='selected-user__lastname' data-testid="last">{selecteduser.name.last}</span>
                            </div>
                            <div className="selected-user__username">
                                <p data-testid="username">{selecteduser.login.username}</p>
                            </div>
                            <div className="selected-user__email">
                                <FontAwesomeIcon icon="fa-solid fa-envelope" className='selected-user__email-icon' />
                                <p data-testid="email">{selecteduser.email}</p>
                            </div>
                        </div>
                        <div className="selected-user__second-info">
                            <div className="selected-user__second-info--title">
                                <h2>Location and Phone number</h2>
                            </div>
                            <div className="selected-user__location--info">
                                <div className="selected-user__location--street">
                                    <p data-testid="streetName">Street: {selecteduser.location.street.name}</p>
                                    <p className='street__number'>{selecteduser.location.street.number}</p>
                                </div>
                                <div className="selected-user__location--city">
                                    <p data-testid="city">City: {selecteduser.location.city}</p>
                                </div>
                                <div className="selected-user__location--state">
                                    <p data-testid="state">State: {selecteduser.location.state}</p>
                                </div>
                                <div className="selected-user__location--postcode">
                                    <p data-testid="postcode">Postcode: {selecteduser.location.postcode}</p>
                                </div>
                                <div className="selected-user__phone--info">
                                    <p data-testid="phone">Phone: {selecteduser.phone}</p>
                                    <p>Cell: {selecteduser.cell}</p>
                                </div>
                                <div className="selected-user__nationality">
                                    <p data-testid="nat">Nationality: {selecteduser.nat}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default UserInfo;
