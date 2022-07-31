import React from 'react';
import User from './ui/User';
import InfiniteScroll from "react-infinite-scroll-component";
import FilteredUser from './ui/FilteredUser';


const Users = ({ users, fetchusers, hasmore, selecteduser, setselecteduser, filterusers, userlastname, userfirstname }) => {


    return (
        <>
            {
                filterusers ?
                    <div className="users__wrapper">
                        <FilteredUser users={users} userlastname={userlastname} userfirstname={userfirstname} selecteduser={selecteduser} setselecteduser={setselecteduser} />
                    </div>
                    :
                    <InfiniteScroll className='users__wrapper' data-testid="userCard"
                        dataLength={users?.length}
                        next={fetchusers}
                        hasMore={hasmore}
                        loader={
                            <div>
                                <h4 data-testid="loading">Loading...</h4>
                            </div>
                        }
                        endMessage={
                            <div>
                                <b data-testid="usersEnd">End of users catalog</b>
                            </div>
                        }>
                        <User users={users} fetchusers={fetchusers} hasmore={hasmore} selecteduser={selecteduser} setselecteduser={setselecteduser} />
                    </InfiniteScroll>
            }
        </>
    );
}

export default Users;
