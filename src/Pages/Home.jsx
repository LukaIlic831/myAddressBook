import React from 'react';
import Nav from '../components/Nav';
import Search from '../components/Search';
import Users from '../components/Users';

const Home = ({users, fetchusers, hasmore, setuserfirstname, nationalities, setuserlastname, filterusers, setfilterusers, userlastname, userfirstname, selecteduser, setselecteduser}) => {




    return (
        <div>
            <Nav />
            <div className="row">
                <Search setuserfirstname = {setuserfirstname} setuserlastname = {setuserlastname} setfilterusers = {setfilterusers}/>
                <Users users={users} fetchusers={fetchusers} hasmore={hasmore} nationalities={nationalities} filterusers={filterusers} userlastname={userlastname} userfirstname={userfirstname} selecteduser={selecteduser} setselecteduser={setselecteduser} />
            </div>
        </div>
    );
}

export default Home;
