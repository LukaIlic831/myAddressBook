import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = ({ setuserfirstname, setuserlastname, setfilterusers }) => {

    function findUser() {
        const searchFieldValue = document.querySelector(".search__field").value;
        if (searchFieldValue != "") {
            const searchFieldValueFirstName = searchFieldValue.split(" ")[0];
            const searchFieldValueLastName = searchFieldValue.split(" ")[1];
            setuserfirstname(searchFieldValueFirstName);
            setuserlastname(searchFieldValueLastName);
            setfilterusers(true);
        }
        else {
            setfilterusers(false);
        }
    }

    function onSearchKeyPress(key) {
        key == 'Enter' && findUser();
    }

    return (
        <div className='search__block'>
            <div className="search__field--wrapper">
                <input type="text" className='search__field' onKeyPress={(event) => onSearchKeyPress(event.key)} placeholder='Search by First and Last name' />
            </div>
            <div className="search__button--wrapper">
                <button className='search__button' onClick={findUser}>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='search__icon' />
                </button>
            </div>
        </div>
    );
}

export default Search;
