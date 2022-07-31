import React from 'react';
import Nationalities from '../components/Nationalities';
import Nav from '../components/Nav';

const Settings = ({setnationalities, nationalities, setchangednationalities, selectednationalities, setselectednationalities, setpage, setfilterusers}) => {

    return (
        <div>
             <Nav/>
             <div className="row">
                <Nationalities setnationalities={setnationalities} nationalities={nationalities} setchangednationalities={setchangednationalities} setpage={setpage} selectednationalities={selectednationalities} setselectednationalities={setselectednationalities} setfilterusers={setfilterusers}/>
             </div>
        </div>
    );
}

export default Settings;
