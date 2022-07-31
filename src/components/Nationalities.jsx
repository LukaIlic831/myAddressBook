import React from 'react';
import { useEffect } from 'react';


const Nationalities = ({ setnationalities, setchangednationalities, selectednationalities, setselectednationalities, setpage, setfilterusers}) => {

    const checkbox = document.getElementsByClassName("checkbox");

   /**
    * Setting the nationalities chosen by the user in state
    *
    * @param {object} event  data from checkbox that we checked
    */

    function changeNationalities(event) {

        if (event.target.checked) {
            setselectednationalities([...selectednationalities, event.target.value]);
        }

        else {
            setselectednationalities(selectednationalities.filter(nationality => nationality !== event.target.value));
        }


    }

   /**
    * Confirmation of the nationalities chosen by the user
    *
    */

    const confirmNationalities = () => {
        setchangednationalities(true);
        setfilterusers(false);
        setpage(1);
        setnationalities(`&nat=${selectednationalities.toString()}`);
        if (selectednationalities.length > 0) {
            window.alert("Nationalities confirmed, return to home page");
        }
        else {
            window.alert("confirmed without Nationalities")
        }
    }

    useEffect(() => {

        // saves the nationalities previously selected by the user and displays them as checked

        selectednationalities.length > 0 && selectednationalities.map(nationality => {
            for (var i = 0; i < checkbox.length; i++) {
                if (checkbox[i].value == nationality) {
                    checkbox[i].checked = true;
                }
            }
        }
        )
    }, []);


    return (
        <>
            <div className="nationalities__title">
                <h1>Choose Nationality</h1>
                <div className="back__icon--wrapper">
                </div>
            </div>
            <div className="nationalities__wrapper">
                <div className="nationality__block--wrapper">
                    <div className="nationality__block">
                        <p>CH</p>
                    </div>
                    <div className="nationality__block--checkbox">
                        <input type="checkbox" value="CH" className='checkbox' onChange={(e) => changeNationalities(e)} />
                    </div>
                </div>
                <div className="nationality__block--wrapper">
                    <div className="nationality__block">
                        <p>ES</p>
                    </div>
                    <div className="nationality__block--checkbox">
                        <input type="checkbox" value="ES" className='checkbox' onChange={(e) => changeNationalities(e)} />
                    </div>
                </div>
                <div className="nationality__block--wrapper">
                    <div className="nationality__block">
                        <p>FR</p>
                    </div>
                    <div className="nationality__block--checkbox">
                        <input type="checkbox" value="FR" className='checkbox' onChange={(e) => changeNationalities(e)} />
                    </div>
                </div>
                <div className="nationality__block--wrapper">
                    <div className="nationality__block">
                        <p>GB</p>
                    </div>
                    <div className="nationality__block--checkbox">
                        <input type="checkbox" value="GB" className='checkbox' onChange={(e) => changeNationalities(e)} />
                    </div>
                </div>
            </div>
            <div className="nationalities__confirm-wrapper">
                <button className='nationalities__confirm--button' onClick={confirmNationalities}>
                    Confirm
                </button>
                <div className="selected__nationalities--text-wrapper">
                    <p className="selected__nationalities--text">{selectednationalities.length > 0 ? "Selected nationalities: " + selectednationalities.toString() : "No nationality is selected"}</p>
                </div>
            </div>
        </>
    );
}

export default Nationalities;
